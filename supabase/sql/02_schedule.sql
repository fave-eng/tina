-- СНАЧАЛА: 01_report_deliveries.sql, Edge Function, Function Secrets,
-- Vault secrets 'oge_project_url' и 'oge_report_cron_secret'.
-- В Supabase Dashboard → Database → Extensions включите pg_cron и pg_net,
-- в Integrations/Database → Vault создайте два секрета (см. README).
-- НИКАКИХ реальных токенов и секретов в этот файл не вставлять!
-- КРОН работает по UTC: 05:00 UTC = 10:00 Уфа, 05:05 UTC = 10:05 Уфа.

-- Проверка наличия необходимых компонентов (должны быть pg_cron, pg_net):
select extname from pg_extension where extname in ('pg_cron','pg_net');

-- Если pg_cron / pg_net не включены, остановитесь и включите в Dashboard.
-- Проверка секретов (не раскрывает их значения):
select name from vault.secrets where name in ('oge_project_url','oge_report_cron_secret');

select cron.schedule('kristina-oge-weekly', '0 5 * * 1', $job$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name='oge_project_url') || '/functions/v1/kristina-oge-reports',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'X-Report-Secret', (select decrypted_secret from vault.decrypted_secrets where name='oge_report_cron_secret')
    ),
    body := '{"period":"weekly"}'::jsonb
  );
$job$);

select cron.schedule('kristina-oge-monthly', '5 5 1 * *', $job$
  select net.http_post(
    url := (select decrypted_secret from vault.decrypted_secrets where name='oge_project_url') || '/functions/v1/kristina-oge-reports',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'X-Report-Secret', (select decrypted_secret from vault.decrypted_secrets where name='oge_report_cron_secret')
    ),
    body := '{"period":"monthly"}'::jsonb
  );
$job$);

-- Проверка планировщика:
select jobname, schedule, active from cron.job where jobname like 'kristina-oge-%';

-- Отключить при необходимости:
-- select cron.unschedule('kristina-oge-weekly');
-- select cron.unschedule('kristina-oge-monthly');
