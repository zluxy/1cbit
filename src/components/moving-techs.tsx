import { IconBolt } from "@tabler/icons-react";

/**
 * List of my technologies.
 */
const techs = [
    "1C:Предприятие",
    "1C:ERP",
    "1C:Бухгалтерия",
    "1C:Управление торговлей",
    "1C:Управление документооборотом",
    "1C:CRM",
    "1C:HRM",
    "1C:Зарплата и Управление Персоналом",
    "1C:Розница",
    "1C:Управление производственным предприятием",
    "1C:Управление проектами",
    "1C:Комплексная автоматизация",
    "1C:Промышленность",
    "1C:Малый бизнес",
    "1C:Управление обучением",
    "1C:Юридический",
    "1C:ITIL",
    "1C:Сервис-деск",
    "1C:Управление корпоративными данными",
    "1C:Бизнес-анализ",
    "1C:Управление корпоративной эффективностью",
    "1C:Бюджетирование",
    "1C:Консолидация",
    "1C:Бизнес Старт",
    "1C:Инструменты разработчика",
    "1C:Платформа предприятия",
    "1C:Анализ данных",
    "1C:Сервер приложений",
    "1C:SQL Сервер",
    "1C:Веб-сервисы",
    "1C:Облачные решения",
    "1C:Мобильная платформа",
    "1C:Инструменты совместной работы",
    "1C:Системы безопасности",
];

/**
 * Moving techs section.
 */
export const MovingTechs = () => {
    const extendedTechs = techs.concat(techs);

    return (
        <section
            data-testid="moving-techs"
            className="group relative flex h-20 w-full max-w-[100vw] items-center justify-center overflow-x-hidden border-y border-y-hover"
        >
            <ul className="flex h-full w-full animate-infinity-card items-center justify-between gap-6 group-hover:[animation-play-state:paused] lg:animate-infinity-card-lg">
                {extendedTechs.map((tech, index) => (
                    <li key={index} className="flex flex-none items-center gap-6">
                        <IconBolt className="h-4 w-4 flex-none fill-secondary text-secondary" />
                        <span className="flex-none text-base font-semibold text-secondary">{tech}</span>
                    </li>
                ))}
            </ul>

            {/* Gradient overlay */}
            <div className="absolute inset-y-0 left-0 w-14 bg-gradient-to-r from-black to-transparent" />
            <div className="absolute inset-y-0 right-0 w-14 bg-gradient-to-l from-black to-transparent" />
        </section>
    );
};
