/**
 * @file UploadController.hpp
 * @brief Admin image upload: POST /api/v1/admin/uploads (multipart) stores the
 *        file in the configured Storage backend (local or S3/MinIO) under a
 *        random key and returns its public URL. The admin post editor inserts
 *        that URL into the Markdown body as an image.
 *
 *        With the local backend that URL is same-origin (/uploads/<key>) and
 *        this controller also SERVES it — see serveUpload. With an S3/CDN
 *        origin configured (storage.public_base_url) the URL is absolute and
 *        the read route is dead weight: it 404s.
 *
 *        Every handler is gated by Core::content_enabled() first — same
 *        module-off contract as PostsController/ContentPagesController: with
 *        the content module disabled, every route here (including the public
 *        read route) 404s instead of touching Storage.
 */

#pragma once

#include <algorithm>
#include <cctype>
#include <cstddef>
#include <initializer_list>
#include <optional>
#include <string>
#include <string_view>

#include <drogon/HttpController.h>
#include <drogon/MultiPart.h>
#include <spdlog/spdlog.h>

#include <nlohmann/json.hpp>

#include "api/Guards.hpp"
#include "api/HandlerSupport.hpp"
#include "api/RequestUtils.hpp"
#include "core/Modules.hpp"
#include "storage/Storage.hpp"
#include "utils/Config.hpp"
#include "utils/Crypto.hpp"
#include "utils/ErrorResponse.hpp"

namespace Api {

using namespace drogon;
using json = nlohmann::json;

// Cheap magic-number sniff: confirm the bytes actually match the claimed image
// type, so a .jpg that's really HTML/script can't be stored and served back.
inline bool image_bytes_match(const std::string& ext, std::string_view b) {
    const auto starts = [&](std::initializer_list<unsigned char> sig) {
        if (b.size() < sig.size())
            return false;
        std::size_t i = 0;
        for (unsigned char c : sig)
            if (static_cast<unsigned char>(b[i++]) != c)
                return false;
        return true;
    };
    if (ext == "jpg" || ext == "jpeg")
        return starts({0xFF, 0xD8, 0xFF});
    if (ext == "png")
        return starts({0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A});
    if (ext == "gif")
        return b.size() >= 6 && (b.compare(0, 6, "GIF87a") == 0 || b.compare(0, 6, "GIF89a") == 0);
    if (ext == "webp")
        return b.size() >= 12 && b.compare(0, 4, "RIFF") == 0 && b.compare(8, 4, "WEBP") == 0;
    return false;
}

class UploadController : public HttpController<UploadController> {
public:
    METHOD_LIST_BEGIN
    ADD_METHOD_TO(UploadController::upload, "/api/v1/admin/uploads", Post);
    // Media library: list + delete what the editor uploaded.
    ADD_METHOD_TO(UploadController::listUploads, "/api/v1/admin/uploads", Get);
    ADD_METHOD_TO(UploadController::deleteUpload, "/api/v1/admin/uploads/{1}", Delete);
    // Public read of a stored object (local backend only) — this is the URL
    // Storage::url() hands the editor when no CDN origin is configured. Via
    // regex because keys contain a '/' (posts/<hex>.<ext>) and a {1} path
    // parameter only ever matches a single segment.
    ADD_METHOD_VIA_REGEX(UploadController::serveUpload, "/uploads/(.*)", Get);
    METHOD_LIST_END

    void upload(const HttpRequestPtr& req, std::function<void(const HttpResponsePtr&)>&& callback) {
        if (!require_content_enabled(callback))
            return;
        API_REQUIRE_ADMIN(req, callback);

        MultiPartParser parser;
        if (parser.parse(req) != 0 || parser.getFiles().empty()) {
            callback(ErrorResponse::bad_request("no_file", "Expected a multipart file upload"));
            return;
        }
        const auto& file = parser.getFiles()[0];

        // Lowercased here (not only inside mime_for_ext) because the extension
        // also feeds the stored key and the magic-number sniff below.
        std::string ext(file.getFileExtension());
        std::transform(ext.begin(), ext.end(), ext.begin(), [](unsigned char c) { return std::tolower(c); });
        const std::string type = mime_for_ext(ext);
        if (type.empty()) {
            callback(ErrorResponse::bad_request("unsupported_type", "Allowed: jpg, jpeg, png, gif, webp"));
            return;
        }

        // Validate on a view — the (up to 5 MB) body is only copied into an
        // owning string once every check has passed, right before Storage::put.
        const std::string_view bytes = file.fileContent();
        constexpr std::size_t kMaxBytes = 5 * 1024 * 1024;  // 5 MB
        if (bytes.empty() || bytes.size() > kMaxBytes) {
            callback(ErrorResponse::bad_request("bad_size", "File must be 1 byte – 5 MB"));
            return;
        }
        if (!image_bytes_match(ext, bytes)) {
            callback(ErrorResponse::bad_request("bad_content", "File content does not match its image type"));
            return;
        }

        if (!require_storage(callback))
            return;

        // Opaque random key (never a client-supplied filename) under a posts/ prefix.
        const std::string key = "posts/" + Utils::Crypto::random_hex(16) + "." + ext;
        try {
            Storage::get().put(key, std::string(bytes), type);
        } catch (const std::exception& e) {
            spdlog::error("upload: storage put failed for {}: {}", key, e.what());
            callback(ErrorResponse::service_unavailable("storage_error", "Could not store the file"));
            return;
        }

        callback(Response::created({{"data", {{"key", key}, {"url", Storage::get().url(key)}}}}));
    }

    // GET /api/v1/admin/uploads — offset-paged listing of the posts/ prefix.
    void listUploads(const HttpRequestPtr& req, std::function<void(const HttpResponsePtr&)>&& callback) {
        if (!require_content_enabled(callback))
            return;
        API_REQUIRE_ADMIN(req, callback);
        if (!require_storage(callback))
            return;
        const auto page = parse_page_params(req, /*default_limit=*/50, /*max_limit=*/200);
        with_repo_errors(callback, "listUploads", [&] {
            auto& st = Storage::get();
            auto all = st.list("posts/");
            json data = json::array();
            const std::size_t from = std::min<std::size_t>(static_cast<std::size_t>(page.offset), all.size());
            const std::size_t to = std::min<std::size_t>(from + static_cast<std::size_t>(page.limit), all.size());
            for (std::size_t i = from; i < to; ++i) {
                const auto& o = all[i];
                const std::string name = o.key.substr(o.key.rfind('/') + 1);
                data.push_back({{"key", o.key},
                                {"name", name},
                                {"url", st.url(o.key)},
                                {"size_bytes", o.size_bytes},
                                {"content_type", content_type_for(name)},
                                {"created_at", o.last_modified}});
            }
            callback(Response::paginated(data, static_cast<long>(all.size()), page.limit, page.offset));
        });
    }

    // DELETE /api/v1/admin/uploads/{name} — name is the single-segment
    // basename of an upload key (keys are posts/<hex>.<ext>).
    void deleteUpload(const HttpRequestPtr& req,
                      std::function<void(const HttpResponsePtr&)>&& callback,
                      const std::string& name) {
        if (!require_content_enabled(callback))
            return;
        API_REQUIRE_ADMIN(req, callback);
        if (name.empty() || name.find('/') != std::string::npos || name.find("..") != std::string::npos ||
            name.find('\\') != std::string::npos) {
            callback(ErrorResponse::bad_request("invalid_name", "Expected a single-segment object name"));
            return;
        }
        if (!require_storage(callback))
            return;
        const std::string key = "posts/" + name;
        with_repo_errors(callback, "deleteUpload", [&] {
            if (!Storage::get().exists(key)) {
                callback(ErrorResponse::not_found("upload"));
                return;
            }
            Storage::get().remove(key);
            callback(Response::ok({{"message", "Upload deleted"}}));
        });
    }

    // GET /uploads/{key} — read an uploaded image back out of local storage.
    // Public (post bodies link to it) and read-only. Everything that isn't a
    // safe key naming an object with an allowlisted raster extension is a 404,
    // including every request in S3/CDN mode: there storage.public_base_url is
    // set, the stored URLs point at that origin, and nothing links here.
    void serveUpload(const HttpRequestPtr&,
                     std::function<void(const HttpResponsePtr&)>&& callback,
                     const std::string& key) {
        auto no_such_upload = [&] { callback(ErrorResponse::not_found("upload")); };
        if (!Core::content_enabled()) {
            no_such_upload();
            return;
        }
        // Traversal guard: keys are opaque ids under posts/. key_is_safe covers
        // "..", a leading '/' or '\', empty and NUL; the backslash can also sit
        // mid-key on a Windows-style path, so reject it anywhere. Every key
        // `upload` ever writes is "posts/" + a random hex name + extension
        // (see upload() above) — defense-in-depth pins reads to that same
        // prefix so this route can never be used to fetch an object stored
        // under some other prefix a future writer might introduce.
        if (!Storage::key_is_safe(key) || key.find('\\') != std::string::npos || key.rfind("posts/", 0) != 0) {
            no_such_upload();
            return;
        }
        // Content type comes from the extension allowlist — never from the
        // request — and anything outside it (no extension, .svg, .html) is a
        // 404 rather than an octet-stream download.
        const std::string type = content_type_for(key.substr(key.rfind('/') + 1));
        if (type == "application/octet-stream") {
            no_such_upload();
            return;
        }
        if (!Storage::is_initialized() || !serves_uploads_locally()) {
            no_such_upload();
            return;
        }
        std::optional<std::string> bytes;
        try {
            bytes = Storage::get().get(key);
        } catch (const std::exception& e) {
            spdlog::error("serveUpload: storage get failed for {}: {}", key, e.what());
            callback(ErrorResponse::service_unavailable("storage_error", "Could not read the file"));
            return;
        }
        if (!bytes) {
            no_such_upload();
            return;
        }
        auto resp = HttpResponse::newHttpResponse();
        resp->setBody(std::move(*bytes));
        resp->setContentTypeString(type);
        // Keys are random and an object is never rewritten in place.
        resp->addHeader("Cache-Control", "public, max-age=31536000, immutable");
        callback(resp);
    }

private:
    // True when this process is the origin for uploads: the local backend with
    // no external public base URL, which is exactly when Storage::url() returns
    // the same-origin /uploads/<key> path that serveUpload answers.
    static bool serves_uploads_locally() {
        if (!Config::is_initialized())
            return false;
        auto& cfg = Config::get();
        if (cfg.get<std::string>("storage.backend", "STORAGE_BACKEND", "local") != "local")
            return false;
        return cfg.get<std::string>("storage.public_base_url", "STORAGE_PUBLIC_BASE_URL", "").empty();
    }

    // Reject with 503 unless a Storage backend is configured. Returns false
    // after responding — callers `if (!require_storage(callback)) return;`,
    // same contract as the Api::require_* guards.
    static bool require_storage(const std::function<void(const HttpResponsePtr&)>& callback) {
        if (Storage::is_initialized())
            return true;
        callback(ErrorResponse::service_unavailable("storage_unavailable", "Storage backend not configured"));
        return false;
    }

    // The single extension → MIME table (uploads are raster images only; SVG
    // intentionally excluded: it can carry inline <script> → stored XSS when
    // served same-origin). Lowercases its input; empty result = unknown ext.
    static std::string mime_for_ext(std::string ext) {
        std::transform(ext.begin(), ext.end(), ext.begin(), [](unsigned char c) { return std::tolower(c); });
        if (ext == "jpg" || ext == "jpeg")
            return "image/jpeg";
        if (ext == "png")
            return "image/png";
        if (ext == "gif")
            return "image/gif";
        if (ext == "webp")
            return "image/webp";
        return {};
    }

    // Extension → content type for listings/serving; unknown extensions map to
    // application/octet-stream (which serveUpload treats as "not servable").
    static std::string content_type_for(const std::string& name) {
        const auto dot = name.rfind('.');
        const std::string mime = mime_for_ext(dot == std::string::npos ? std::string{} : name.substr(dot + 1));
        return mime.empty() ? "application/octet-stream" : mime;
    }
};

}  // namespace Api
