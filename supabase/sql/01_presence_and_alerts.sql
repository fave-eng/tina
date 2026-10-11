-- ОГЭ 2027: только новые служебные таблицы. Старые прогрессы не изменяются.
create table if not exists public.oge_student_presence (
  user_id uuid primary key references auth.users(id) on delete cascade,
  last_seen_at timestamptz not null default now()
);
alter table public.oge_student_presence enable row level security;
revoke all on public.oge_student_presence from anon, authenticated;

-- Последнее посещение записывается временем сервера по JWT Кристины.
-- Права на прямое изменение даты клиенту не выдаются.
create or replace function public.oge_mark_visit()
returns timestamptz language plpgsql security definer set search_path = ''
as $$
declare v_user uuid := auth.uid(); v_seen timestamptz;
begin
  if v_user is null then raise exception 'Authentication required'; end if;
  if not exists(select 1 from public.oge_student_state s
                where s.user_id=v_user and s.snapshot->>'studentId'='kristina-oge-2027')
  then raise exception 'Kristina student profile required'; end if;
  insert into public.oge_student_presence(user_id,last_seen_at) values(v_user,now())
  on conflict(user_id) do update set last_seen_at=excluded.last_seen_at
    where public.oge_student_presence.last_seen_at < now() - interval '55 minutes'
  returning last_seen_at into v_seen;
  if v_seen is null then
    select last_seen_at into v_seen from public.oge_student_presence where user_id=v_user;
  end if;
  return v_seen;
end $$;
revoke all on function public.oge_mark_visit() from public, anon;
grant execute on function public.oge_mark_visit() to authenticated;

create table if not exists public.oge_alert_deliveries (
  user_id uuid not null references auth.users(id) on delete cascade,
  alert_kind text not null check (alert_kind in ('inactive_4d','behind_plan')),
  period_key date not null,
  sent_at timestamptz,
  telegram_message_id bigint,
  last_error text,
  created_at timestamptz not null default now(),
  primary key(user_id,alert_kind,period_key)
);
alter table public.oge_alert_deliveries enable row level security;
revoke all on public.oge_alert_deliveries from anon, authenticated;
