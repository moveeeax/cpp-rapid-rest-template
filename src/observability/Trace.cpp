/**
 * @file Trace.cpp
 * @brief Bodies for src/observability/Trace.hpp — compiled once into
 *        app_core: the W3C traceparent parser/formatter, the hex/random
 *        helpers (file-local) and the thread-local ambient traceparent. The
 *        attribute keys and the TraceContext struct stay in the header; every
 *        contract is documented on the declarations there.
 */

#include "observability/Trace.hpp"

#include <algorithm>
#include <array>
#include <cctype>
#include <chrono>
#include <cstdint>
#include <random>

#include <opentelemetry/nostd/span.h>

namespace Observability::Trace {

namespace {
namespace detail {

bool is_hex_char(char c) {
    return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
}

bool is_hex_string(std::string_view s, size_t expected_len) {
    if (s.size() != expected_len)
        return false;
    for (char c : s)
        if (!is_hex_char(c))
            return false;
    return true;
}

std::string to_lower_ascii(std::string_view s) {
    std::string out(s);
    std::transform(
        out.begin(), out.end(), out.begin(), [](unsigned char c) { return static_cast<char>(std::tolower(c)); });
    return out;
}

/**
 * @brief Hex string → fixed-size byte buffer (for TraceId/SpanId).
 * @return false if the input length doesn't match or has a non-hex char.
 */
bool hex_to_bytes(std::string_view hex, uint8_t* out, size_t n) {
    if (hex.size() != n * 2)
        return false;
    auto nibble = [](char c) -> int {
        if (c >= '0' && c <= '9')
            return c - '0';
        if (c >= 'a' && c <= 'f')
            return c - 'a' + 10;
        if (c >= 'A' && c <= 'F')
            return c - 'A' + 10;
        return -1;
    };
    for (size_t i = 0; i < n; ++i) {
        const int hi = nibble(hex[2 * i]), lo = nibble(hex[2 * i + 1]);
        if (hi < 0 || lo < 0)
            return false;
        out[i] = static_cast<uint8_t>((hi << 4) | lo);
    }
    return true;
}

std::string to_hex(const uint8_t* bytes, size_t n) {
    static const char* hex = "0123456789abcdef";
    std::string out;
    out.reserve(n * 2);
    for (size_t i = 0; i < n; ++i) {
        out.push_back(hex[(bytes[i] >> 4) & 0xF]);
        out.push_back(hex[bytes[i] & 0xF]);
    }
    return out;
}

std::mt19937_64& rng() {
    thread_local std::mt19937_64 r(static_cast<uint64_t>(std::chrono::steady_clock::now().time_since_epoch().count()));
    return r;
}

std::string random_hex(size_t byte_count) {
    std::array<uint8_t, 16> buf{};
    for (size_t i = 0; i < byte_count; i += 8) {
        uint64_t v = rng()();
        for (size_t j = 0; j < 8 && (i + j) < byte_count; ++j) {
            buf[i + j] = static_cast<uint8_t>(v & 0xFF);
            v >>= 8;
        }
    }
    return to_hex(buf.data(), byte_count);
}

bool is_all_zero_hex(std::string_view s) {
    for (char c : s)
        if (c != '0')
            return false;
    return !s.empty();
}

}  // namespace detail
}  // namespace

std::optional<TraceContext> parse_traceparent(std::string_view header) {
    // Parsed straight off the caller's view — no lowercase copy of the whole
    // header. Hex validation is case-insensitive (the spec allows lowercase
    // only, but upstreams sometimes send mixed case); the stored components
    // are lowercased individually below.

    // Expect "version-traceid-spanid-flags" — 4 dash-separated components.
    std::array<std::string_view, 4> parts{};
    size_t idx = 0;
    size_t start = 0;
    for (size_t i = 0; i <= header.size(); ++i) {
        if (i == header.size() || header[i] == '-') {
            if (idx >= 4)
                return std::nullopt;
            parts[idx++] = header.substr(start, i - start);
            start = i + 1;
        }
    }
    if (idx != 4)
        return std::nullopt;
    if (parts[0] != "00")
        return std::nullopt;  // unknown version
    if (!detail::is_hex_string(parts[1], 32))
        return std::nullopt;
    if (!detail::is_hex_string(parts[2], 16))
        return std::nullopt;
    if (!detail::is_hex_string(parts[3], 2))
        return std::nullopt;
    if (detail::is_all_zero_hex(parts[1]) || detail::is_all_zero_hex(parts[2])) {
        return std::nullopt;
    }
    TraceContext ctx;
    ctx.trace_id = detail::to_lower_ascii(parts[1]);
    ctx.parent_id = detail::to_lower_ascii(parts[2]);
    ctx.flags = detail::to_lower_ascii(parts[3]);
    return ctx;
}

std::string format_traceparent(const TraceContext& ctx) {
    return "00-" + ctx.trace_id + "-" + ctx.parent_id + "-" + ctx.flags;
}

TraceContext generate_context() {
    TraceContext ctx;
    ctx.trace_id = detail::random_hex(16);  // 16 bytes = 32 hex chars
    ctx.parent_id = detail::random_hex(8);  // 8 bytes = 16 hex chars
    ctx.flags = "01";                       // sampled by default
    return ctx;
}

TraceContext extract_or_generate(std::string_view traceparent_header) {
    if (!traceparent_header.empty()) {
        auto parsed = parse_traceparent(traceparent_header);
        if (parsed)
            return *parsed;
    }
    return generate_context();
}

std::optional<opentelemetry::trace::SpanContext> to_remote_span_context(const TraceContext& t) {
    uint8_t tid[16], sid[8], flags[1];
    if (!detail::hex_to_bytes(t.trace_id, tid, 16) || !detail::hex_to_bytes(t.parent_id, sid, 8) ||
        !detail::hex_to_bytes(t.flags, flags, 1)) {
        return std::nullopt;
    }
    return opentelemetry::trace::SpanContext(
        opentelemetry::trace::TraceId(opentelemetry::nostd::span<const uint8_t, 16>(tid)),
        opentelemetry::trace::SpanId(opentelemetry::nostd::span<const uint8_t, 8>(sid)),
        opentelemetry::trace::TraceFlags(flags[0]),
        /*is_remote=*/true);
}

std::string& current_traceparent_ref() {
    thread_local std::string tp;
    return tp;
}

void set_current_traceparent(const TraceContext& ctx) {
    current_traceparent_ref() = format_traceparent(ctx);
}

void clear_current_traceparent() {
    current_traceparent_ref().clear();
}

std::string current_traceparent() {
    return current_traceparent_ref();
}

}  // namespace Observability::Trace
