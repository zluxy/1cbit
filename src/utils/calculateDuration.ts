import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

/**
 * Рассчитать продолжительность между двумя датами в годах и месяцах.
 * @param startDate - Дата начала.
 * @param endDate - Дата окончания.
 */
export function calculateDuration(startDate: string, endDate: string) {
    const start = dayjs(startDate);
    const end = dayjs(endDate);

    const diff = dayjs.duration(end.diff(start));
    const years = diff.years();
    const months = diff.months() + 1;

    return `${years > 0 ? `${years} год` : ""} ${months} мес`;
}

