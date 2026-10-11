-- Проверка после настройки. Не меняет базу.
select to_regclass('public.oge_report_deliveries') as delivery_table;
select extname from pg_extension where extname in ('pg_cron','pg_net');
select name from vault.secrets where name in ('oge_project_url','oge_report_cron_secret');
select jobname, schedule, active from cron.job where jobname like 'kristina-oge-%';
select report_kind,period_key,sent_at,telegram_message_id,last_error,created_at
from public.oge_report_deliveries order by created_at desc limit 20;
