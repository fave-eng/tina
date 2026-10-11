-- Выполнять только после удачной пробной отправки!
-- Перед запуском активировать расширения pg_cron и pg_net и создать 2 Vault секрета:
-- oge_project_url = https://zqzgarvmpqqqaobeicpc.supabase.co
-- oge_report_cron_secret = значение OGE_REPORT_CRON_SECRET в Edge Function Secrets.
-- CRON использует UTC: 16:00 UTC = 21:00 по Уфе (UTC+5).
select cron.schedule('kristina-oge-diary-2100-ufa', '0 16 * * *', $$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name='oge_project_url') || '/functions/v1/kristina-oge-diary-reminder',
    headers := jsonb_build_object('Content-Type','application/json','x-report-secret',
      (select decrypted_secret from vault.decrypted_secrets where name='oge_report_cron_secret')),
    body := '{"mode":"scheduled"}'::jsonb
  );
$$);
