-- Migration 007: add_gadgets_table
-- Created: 2026-08-21T16:59:55Z
--
-- Migrations are applied in numeric order on app boot (or via
-- RUN_MIGRATIONS_ONLY=1 ./cpp_api_template). Use --verify-migrations to
-- list pending without applying.
--
-- The MigrationRunner already wraps this file in ONE transaction (under an
-- advisory lock) together with the schema_migrations bookkeeping. Do NOT add
-- BEGIN/COMMIT — an embedded COMMIT ends that transaction early and breaks
-- atomicity. Prefer idempotent DDL (IF NOT EXISTS / ON CONFLICT DO NOTHING).

CREATE TABLE IF NOT EXISTS gadgets (
    id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name       TEXT        NOT NULL,   -- TODO: replace with your real columns
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Bump updated_at on every UPDATE via the shared function from
-- migrations/000_updated_at_trigger.sql.
DROP TRIGGER IF EXISTS gadgets_touch_updated_at ON gadgets;
CREATE TRIGGER gadgets_touch_updated_at
    BEFORE UPDATE ON gadgets
    FOR EACH ROW EXECUTE FUNCTION touch_updated_at();
