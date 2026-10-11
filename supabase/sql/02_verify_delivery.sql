-- Отчёт о последних проверках (без содержания личного дневника)
select reminder_date, sent_at, telegram_message_id, last_error
from public.oge_journal_reminder_deliveries
order by reminder_date desc limit 14;
-- Статус расписания
select jobname, schedule, active from cron.job where jobname='kristina-oge-diary-2100-ufa';
