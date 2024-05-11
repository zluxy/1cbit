import { IconBriefcase2 } from "@tabler/icons-react";

import { calculateDuration } from "@/utils";

import { Title, FadeInWhileInView } from "@/components";

import { TracingBeam } from "./tracing-beam";
import { ExperienceCard, ExperienceCardProps } from "./experience-card";

/**
 * Список значимых достижений компаний.
 */
const companyAchievements: ExperienceCardProps[] = [
    {
        jobTitle: "Запуск новой CRM системы",
        company: "Первый Бит",
        companyLink: "https://www.1cbit.ru/",
        location: "Екатеринбург, Россия",
        duration: `Дек 2023 - Настоящее время • ${calculateDuration("2023/12/01", new Date().toDateString())}`,
        achievements: [
            "Успешный запуск и интеграция новой CRM системы, что позволило улучшить взаимодействие с клиентами.",
            "Оптимизация процессов работы с данными, ускорение отчетности и аналитики.",
            "Внедрение современных технологий для повышения удобства использования приложений.",
        ],
        pointClassName: "bg-gradient-to-r from-[#FCB045] to-[#E100FF]",
    },
    {
        jobTitle: "Разработка модуля для аналитики данных",
        company: "Первый Бит",
        companyLink: "https://www.1cbit.ru/",
        location: "Екатеринбург, Россия",
        duration: `Дек 2022 - Янв 2024 • ${calculateDuration("2022/12/01/", "2024/01/01")}`,
        achievements: [
            "Разработка и внедрение модуля для аналитики данных, значительно улучшившего процессы принятия решений в компании.",
            "Руководство проектами по интеграции решений для клиентов, контроль сроков и ресурсов.",
            "Управление переходом веб-приложений на современные технологии, значительное улучшение производительности и пользовательского опыта.",
        ],
        pointClassName: "bg-gradient-to-r from-[#E100FF] to-[#3f6bfb]",
    },
    {
        jobTitle: "Внедрение системы удаленной работы",
        company: "Первый Бит",
        companyLink: "https://www.1cbit.ru/",
        location: "Екатеринбург, Россия",
        duration: `Апр 2022 - Дек 2022 • ${calculateDuration("2022/04/01", "2022/12/01")}`,
        achievements: [
            "Успешное внедрение системы удаленной работы, что позволило компании эффективно функционировать в условиях пандемии.",
        ],
        pointClassName: "bg-gradient-to-r from-[#3F5EFB] to-[#1CB5E0]",
    },
];

/**
 * Раздел карьеры.
 */
export const Career = () => {
    return (
        <section
            id="career"
            className="flex w-full flex-col items-start gap-12 overflow-visible lg:items-center lg:gap-24"
        >
            <FadeInWhileInView initial={{ y: 40 }} animate={{ y: 0 }}>
                <Title icon={IconBriefcase2} label="История" title="Значимые достижения компаний" align="center" />
            </FadeInWhileInView>

            <TracingBeam>
                <div className="flex h-full w-full flex-col items-start gap-12 pl-5 md:pl-12">
                    {companyAchievements.map((achievement, index) => (
                        <FadeInWhileInView key={index} initial={{ x: -40 }} animate={{ x: 0 }} className="w-full">
                            <ExperienceCard {...achievement} />
                        </FadeInWhileInView>
                    ))}
                </div>
            </TracingBeam>
        </section>
    );
};
