/**
 * @file Config.cpp
 * @brief Bodies for src/utils/Config.hpp — compiled once into app_core: file
 *        load/parse, the ${VAR} / ${VAR:-default} placeholder expansion, the
 *        dot-path walker and the global-instance lifecycle. The typed
 *        template accessors (get / require / get_optional) stay in the
 *        header; every contract is documented on the declarations there.
 */

#include "utils/Config.hpp"

#include <cstdlib>
#include <fstream>
#include <memory>
#include <stdexcept>
#include <string>

namespace Config {

AppConfig::AppConfig(const std::string& config_file) {
    config_path = config_file;
    load_from_file(config_file);
}

void AppConfig::load_from_file(const std::string& file_path) {
    std::ifstream file(file_path);
    if (!file.is_open()) {
        throw std::runtime_error("Failed to open config file: " + file_path);
    }

    try {
        file >> config_data;
    } catch (const json::parse_error& e) {
        throw std::runtime_error("Failed to parse config file: " + std::string(e.what()));
    }

    substitute_env_placeholders(config_data);
}

std::string AppConfig::expand_string(const std::string& s) {
    std::string out;
    out.reserve(s.size());
    size_t i = 0;
    while (i < s.size()) {
        if (i + 1 < s.size() && s[i] == '$' && s[i + 1] == '{') {
            size_t end = s.find('}', i + 2);
            if (end == std::string::npos) {
                out.append(s, i, std::string::npos);
                break;
            }
            std::string expr = s.substr(i + 2, end - i - 2);
            std::string var_name;
            std::string default_value;
            bool has_default = false;
            auto sep = expr.find(":-");
            if (sep != std::string::npos) {
                var_name = expr.substr(0, sep);
                default_value = expr.substr(sep + 2);
                has_default = true;
            } else {
                var_name = expr;
            }
            const char* env_value = var_name.empty() ? nullptr : std::getenv(var_name.c_str());
            if (env_value != nullptr) {
                out.append(env_value);
            } else if (has_default) {
                out.append(default_value);
            }
            // else: leave the placeholder unexpanded? No — drop it silently
            // (matches POSIX shell behavior for unset-without-default).
            i = end + 1;
        } else {
            out.push_back(s[i++]);
        }
    }
    return out;
}

void AppConfig::substitute_env_placeholders(json& node) {
    if (node.is_string()) {
        const auto& raw = node.get_ref<const std::string&>();
        if (raw.find("${") != std::string::npos) {
            node = expand_string(raw);
        }
    } else if (node.is_object()) {
        for (auto it = node.begin(); it != node.end(); ++it) {
            substitute_env_placeholders(it.value());
        }
    } else if (node.is_array()) {
        for (auto& v : node)
            substitute_env_placeholders(v);
    }
}

const json* AppConfig::find_nested_node(const std::string& key) const {
    const json* current = &config_data;
    size_t start = 0;
    while (true) {
        const size_t pos = key.find('.', start);
        const std::string segment = (pos == std::string::npos) ? key.substr(start) : key.substr(start, pos - start);
        if (!current->is_object())
            return nullptr;
        const auto it = current->find(segment);
        if (it == current->end())
            return nullptr;
        current = &it.value();
        if (pos == std::string::npos)
            return current;
        start = pos + 1;
    }
}

namespace {

/// Global configuration instance. File-local on purpose: everything outside
/// this TU reaches it through initialize() / get() / is_initialized() /
/// shutdown() below (nothing else ever referenced it directly when it was an
/// inline header variable).
std::unique_ptr<AppConfig> global_config = nullptr;

}  // namespace

void initialize(const std::string& config_file) {
    if (global_config != nullptr) {
        throw std::runtime_error("Configuration already initialized");
    }
    global_config = std::make_unique<AppConfig>(config_file);
}

AppConfig& get() {
    if (global_config == nullptr) {
        throw std::runtime_error("Configuration not initialized");
    }
    return *global_config;
}

bool is_initialized() {
    return global_config != nullptr;
}

void shutdown() {
    global_config.reset();
}

}  // namespace Config
