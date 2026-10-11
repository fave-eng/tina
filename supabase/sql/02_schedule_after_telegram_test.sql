-- ТОЛЬКО после тестовой отправки Telegram и включения pg_cron/pg_net.
-- Vault: oge_project_url = https://zqzgarvmpqqqaobeicpc.supabase.co
-- Vault: oge_report_cron_secret = тот же OGE_REPORT_CRON_SECRET из Edge Secrets.
-- Время: 05:00 UTC = 10:00 в Уфе. Повторные сообщения блокируются таблицей deliveries.
-- Проверьте сначала:
select extname from pg_extension where extname in ('pg_cron','pg_net');
select name from vault.secrets where name in ('oge_project_url','oge_report_cron_secret');
-- Запускайте следующую команду один раз после проверки.
select cron.schedule('kristina-oge-alerts-daily','0 5 * * *',$job$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name='oge_project_url') || '/functions/v1/kristina-oge-alerts',
    headers := jsonb_build_object(
      'Content-Type','application/json',
      'X-Report-Secret',(select decrypted_secret from vault.decrypted_secrets where name='oge_report_cron_secret')
    ),
    body := '{"run":true}'::jsonb
  );
$job$);
-- Проверка: select jobname,schedule,active from cron.job where jobname='kristina-oge-alerts-daily';
-- Остановка: select cron.unschedule('kristina-oge-alerts-daily');
