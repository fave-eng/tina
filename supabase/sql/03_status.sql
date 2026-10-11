-- Диагностика состояния (служебные данные, без личных текстов)
select count(*) as presence_records from public.oge_student_presence;
select alert_kind, period_key, sent_at is not null as delivered, left(coalesce(last_error,''),120) as error
from public.oge_alert_deliveries order by created_at desc limit 15;
select extname from pg_extension where extname in ('pg_cron','pg_net');
