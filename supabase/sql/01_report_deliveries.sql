-- ОГЭ Кристины: создать ТОЛЬКО таблицу регистрации отправленных отчётов.
-- Уже существующие progress, события, пользователи и RLS-политики НЕ меняются.
-- Запускается в SQL Editor проекта «общий» (zqzgarvmpqqqaobeicpc).

create table if not exists public.oge_report_deliveries (
  user_id uuid not null references auth.users(id) on delete cascade,
  report_kind text not null check (report_kind in ('weekly', 'monthly')),
  period_key date not null,
  sent_at timestamptz,
  telegram_message_id bigint,
  last_error text,
  created_at timestamptz not null default now(),
  primary key (user_id, report_kind, period_key)
);

alter table public.oge_report_deliveries enable row level security;
-- В таблице есть служебные сведения о доставке; браузерам доступ не нужен.
revoke all on table public.oge_report_deliveries from anon, authenticated;

-- Проверка после выполнения:
-- select to_regclass('public.oge_report_deliveries');
