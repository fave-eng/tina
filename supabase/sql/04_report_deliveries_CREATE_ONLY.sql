-- Server-side tracking for report delivery; does not read, reset or alter any student progress.
-- Run manually and only once after review. Scheduled sends are configured separately.
create table if not exists public.oge_report_deliveries (
  user_id uuid not null references auth.users(id) on delete cascade,
  report_kind text not null check (report_kind in ('weekly','monthly')),
  period_key date not null,
  created_at timestamptz not null default now(),
  sent_at timestamptz,
  telegram_message_id bigint,
  last_error text,
  primary key (user_id,report_kind,period_key)
);
alter table public.oge_report_deliveries enable row level security;
revoke all on public.oge_report_deliveries from anon, authenticated;
