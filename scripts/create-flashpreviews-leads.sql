-- Run this in Supabase SQL Editor
-- https://supabase.com/dashboard/project/wwaovysvcsesahcltuai/sql

CREATE TABLE IF NOT EXISTS public.flashpreviews_leads (
  id              BIGSERIAL PRIMARY KEY,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  full_name       TEXT,
  business_name   TEXT,
  email           TEXT,
  phone           TEXT,
  business_type   TEXT,
  service_type    TEXT,
  target_market   TEXT,
  website_url     TEXT,
  lead_situation  TEXT,
  monthly_budget  TEXT,
  goal            TEXT,
  notes           TEXT,
  lead_status     TEXT DEFAULT 'new',
  source          TEXT DEFAULT 'flashpreviews_site',
  ai_summary      TEXT
);

-- Disable RLS so API can insert
ALTER TABLE public.flashpreviews_leads DISABLE ROW LEVEL SECURITY;

-- Index for filtering by status and market
CREATE INDEX IF NOT EXISTS idx_fp_leads_status ON public.flashpreviews_leads(lead_status);
CREATE INDEX IF NOT EXISTS idx_fp_leads_market ON public.flashpreviews_leads(target_market);
