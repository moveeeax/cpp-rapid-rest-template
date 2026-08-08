/**
 * @file test_content_pages.cpp
 * @brief Integration tests for ContentPagesController — Markdown-by-slug and
 *        the dynamic sitemap.xml, plus the Core::content_enabled() gate.
 *
 * Fixture pattern mirrors test_posts_api.cpp (PostsApiTest): CoreBackedTest
 * with migrations on, content.enabled toggled per fixture. Posts are seeded
 * directly via Repositories::PostRepository — these two handlers carry no
 * auth guard (they're the public content surface), so there's no need to go
 * through PostsController's admin API just to create fixture rows.
 */

#include <gtest/gtest.h>

#include <nlohmann/json.hpp>

#include "api/ContentPagesController.hpp"
#include "repositories/PostRepository.hpp"
#include "test_helpers.hpp"

using json = nlohmann::json;
using namespace drogon;

namespace {

// ── Fixture: content module ENABLED ─────────────────────────────────────────
class ContentPagesTest : public TestHelpers::CoreBackedTest {
protected:
    Api::ContentPagesController controller;

    std::string config_file_name() const override { return "content_pages_test_config.json"; }

    void config_overrides(json& cfg) override {
        cfg["database"]["migrations_enabled"] = true;
        cfg["database"]["migrations_dir"] = "migrations";
        cfg["content"]["enabled"] = true;
    }

    void SetUp() override {
        TestHelpers::CoreBackedTest::SetUp();
        if (::testing::Test::IsSkipped())
            return;
        Database::get().execute_write([](auto& txn) {
            txn.exec("TRUNCATE TABLE posts");
            return 0;
        });
    }

    template <typename Fn>
    static HttpResponsePtr call(Fn&& fn) {
        HttpResponsePtr resp;
        fn([&](const HttpResponsePtr& r) { resp = r; });
        return resp;
    }

    /// Seed a post straight through the repository (no controller/auth
    /// needed — the two handlers under test are unauthenticated reads).
    static std::string seed_post(const std::string& slug,
                                 const std::string& title,
                                 const std::string& body,
                                 const std::string& status) {
        Repositories::PostRepository repo;
        Repositories::PostInput in;
        in.slug = slug;
        in.title = title;
        in.body = body;
        in.status = status;
        auto created = repo.create(in);
        return created.id;
    }

    HttpResponsePtr getMarkdown(const std::string& slug) {
        auto req = TestHelpers::make_request(Get);
        return call([&](auto cb) { controller.post_markdown(req, std::move(cb), slug); });
    }

    HttpResponsePtr getSitemap() {
        auto req = TestHelpers::make_request(Get);
        return call([&](auto cb) { controller.sitemap(req, std::move(cb)); });
    }
};

// ── Fixture: content module DISABLED (default) ──────────────────────────────
class ContentPagesContentDisabledTest : public ContentPagesTest {
protected:
    std::string config_file_name() const override { return "content_pages_content_disabled_test_config.json"; }

    void config_overrides(json& cfg) override {
        ContentPagesTest::config_overrides(cfg);
        cfg["content"]["enabled"] = false;
    }
};

// ── Markdown-by-slug ─────────────────────────────────────────────────────────

TEST_F(ContentPagesTest, MarkdownBodyExactMatchForPublishedPost) {
    seed_post("markdown-post", "Markdown Post", "Some **bold** body text.", "published");

    auto resp = getMarkdown("markdown-post");
    ASSERT_EQ(resp->statusCode(), k200OK);
    EXPECT_NE(resp->getHeader("content-type").find("text/markdown"), std::string::npos);
    EXPECT_EQ(std::string(resp->body()), "# Markdown Post\n\nSome **bold** body text.");
}

TEST_F(ContentPagesTest, MarkdownFourOhFourForDraft) {
    seed_post("draft-post", "Draft Post", "wip", "draft");

    auto resp = getMarkdown("draft-post");
    EXPECT_EQ(resp->statusCode(), k404NotFound);
    EXPECT_EQ(std::string(resp->body()), "# 404\n\nNot found.\n");
}

TEST_F(ContentPagesTest, MarkdownFourOhFourForUnknownSlug) {
    auto resp = getMarkdown("does-not-exist");
    EXPECT_EQ(resp->statusCode(), k404NotFound);
    EXPECT_EQ(std::string(resp->body()), "# 404\n\nNot found.\n");
}

// ── Sitemap ──────────────────────────────────────────────────────────────────

TEST_F(ContentPagesTest, SitemapListsPublishedPostWithLastmod) {
    seed_post("sitemap-post", "Sitemap Post", "body", "published");

    auto resp = getSitemap();
    ASSERT_EQ(resp->statusCode(), k200OK);
    EXPECT_NE(resp->getHeader("content-type").find("application/xml"), std::string::npos);
    const std::string body(resp->body());
    EXPECT_NE(body.find("<loc>http://localhost:8080/posts/sitemap-post</loc><lastmod>"), std::string::npos) << body;
}

TEST_F(ContentPagesTest, SitemapExcludesDraftsAndEscapesSlug) {
    seed_post("draft-not-in-sitemap", "Draft", "body", "draft");
    // '&' is not valid in the controller's own slug charset, but the sitemap
    // XML-escapes every <loc> unconditionally — cover that directly against
    // a PostRepository-seeded row (bypasses PostsController's slug regex).
    seed_post("sitemap-a&b", "Ampersand Slug", "body", "published");

    auto resp = getSitemap();
    ASSERT_EQ(resp->statusCode(), k200OK);
    const std::string body(resp->body());
    EXPECT_EQ(body.find("draft-not-in-sitemap"), std::string::npos) << body;
    EXPECT_NE(body.find("/posts/sitemap-a&amp;b</loc>"), std::string::npos) << body;
}

// ── Module gate ────────────────────────────────────────────────────────────

TEST_F(ContentPagesContentDisabledTest, MarkdownFourOhFourWhenContentDisabled) {
    // Seeding bypasses the controller, so this only proves the *handler's*
    // own guard fires — same shape as PostsApiContentDisabledTest.
    auto resp = getMarkdown("whatever");
    EXPECT_EQ(resp->statusCode(), k404NotFound);
    EXPECT_EQ(std::string(resp->body()), "# 404\n\nNot found.\n");
}

TEST_F(ContentPagesContentDisabledTest, SitemapRootOnlyWhenContentDisabled) {
    // Seeding bypasses the controller/guard (straight through the
    // repository), so a post surfacing here would mean the handler skipped
    // its own guard and queried the repository anyway — sitemap() degrades
    // to a root-only feed instead of a 404 (unlike post_markdown) because a
    // sitemap is conceptually always present for the site; see the
    // handler's doc comment.
    seed_post("hidden-post", "Hidden", "body", "published");

    auto resp = getSitemap();
    ASSERT_EQ(resp->statusCode(), k200OK);
    const std::string body(resp->body());
    EXPECT_EQ(body.find("hidden-post"), std::string::npos) << body;
    EXPECT_NE(body.find("<loc>http://localhost:8080/</loc>"), std::string::npos) << body;
}

}  // namespace
