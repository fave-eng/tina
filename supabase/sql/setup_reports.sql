-- Только для ВЫБРАННОГО проекта Supabase Кристины.
-- Запустить один раз через SQL Editor, предварительно просмотрев изменения.
-- Здесь нет chat_id, паролей и токенов.
create table if not exists public.oge_report_events (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  date timestamptz not null,
  type text not null check (type in ('diagnostic','lesson','grammar','vocab','verb','practice')),
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists oge_report_events_user_date_idx
  on public.oge_report_events (user_id, date desc);
alter table public.oge_report_events enable row level security;
revoke all on public.oge_report_events from anon;
grant select, insert, delete on public.oge_report_events to authenticated;
drop policy if exists oge_events_select_own on public.oge_report_events;
create policy oge_events_select_own on public.oge_report_events
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists oge_events_insert_own on public.oge_report_events;
create policy oge_events_insert_own on public.oge_report_events
  for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists oge_events_delete_own on public.oge_report_events;
create policy oge_events_delete_own on public.oge_report_events
  for delete to authenticated using ((select auth.uid()) = user_id);

-- Таблица служебных отправок. Доступна ТОЛЬКО серверу (service_role),
-- запрет на anon/authenticated сохраняется при включённом RLS.
create table if not exists public.oge_report_deliveries (
  user_id uuid not null references auth.users(id) on delete cascade,
  report_kind text not null check (report_kind in ('weekly','monthly')),
  period_key date not null,
  telegram_message_id bigint,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  primary key (user_id, report_kind, period_key)
);
alter table public.oge_report_deliveries enable row level security;
revoke all on public.oge_report_deliveries from anon, authenticated;

-- Для вызова функции по расписанию потребуются расширения pg_cron, pg_net,
-- а также секреты в Supabase Vault (см. setup_cron.sql.template).
