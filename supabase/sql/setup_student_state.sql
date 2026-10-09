-- Исполнять ТОЛЬКО в выбранном проекте Кристины после проверки SQL.
-- Снимок прогресса личного кабинета. Доступ строго по auth.uid().
create table if not exists public.oge_student_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  snapshot jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.oge_student_state enable row level security;
revoke all on public.oge_student_state from anon;
grant select, insert, update on public.oge_student_state to authenticated;
drop policy if exists oge_state_select_own on public.oge_student_state;
create policy oge_state_select_own on public.oge_student_state
for select to authenticated using ((select auth.uid())=user_id);
drop policy if exists oge_state_insert_own on public.oge_student_state;
create policy oge_state_insert_own on public.oge_student_state
for insert to authenticated with check ((select auth.uid())=user_id);
drop policy if exists oge_state_update_own on public.oge_student_state;
create policy oge_state_update_own on public.oge_student_state
for update to authenticated using ((select auth.uid())=user_id)
with check ((select auth.uid())=user_id);
-- Браузеру никогда не выдавать secret/service_role ключ.
