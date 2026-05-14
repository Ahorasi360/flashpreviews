-- flashpreviews_leads — backing table for the FlashPreviews consulting site intake form
-- Paste this in: https://supabase.com/dashboard/project/wwaovysvcsesahcltuai/sql/new
-- Then click "Run".

create table if not exists public.flashpreviews_leads (
  id              uuid primary key default gen_random_uuid(),
  created_at      timestamptz not null default now(),

  -- Contact
  full_name       text not null,
  business_name   text,
  email           text not null,
  phone           text,

  -- Qualification
  business_type   text,
  service_type    text,
  target_market   text,
  website_url     text,
  lead_situation  text,
  monthly_budget  text,
  goal            text,
  notes           text,

  -- Pipeline tracking
  lead_status     text not null default 'new'
                  check (lead_status in ('new','contacted','qualified','disqualified','closed','spam')),
  source          text not null default 'flashpreviews_site',

  -- Useful indexes
  contacted_at    timestamptz,
  contacted_by    text
);

create index if not exists flashpreviews_leads_created_at_idx
  on public.flashpreviews_leads (created_at desc);

create index if not exists flashpreviews_leads_status_idx
  on public.flashpreviews_leads (lead_status);

create index if not exists flashpreviews_leads_email_idx
  on public.flashpreviews_leads (lower(email));

-- Lock the table down. Service role (used by the server-side intake route)
-- bypasses RLS, so writes from the API keep working. The anon key cannot
-- read or write this table from the browser — that's intentional.
alter table public.flashpreviews_leads enable row level security;

-- No public policies. Only service_role can read/write.
-- (Service role automatically bypasses RLS regardless of policies.)
