import { IconBriefcase, IconPalette } from "@tabler/icons-react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    FadeInWhileInView,
    Title,
} from "@/components";

import { Project, ProjectProps } from "./project";

import YaziImg from "@/assets/yazi.webp";
import DeltaImg from "@/assets/delta.webp";
import HabitsImg from "@/assets/habits.webp";
import FeedgetImg from "@/assets/feedget.webp";
import TimeCapsuleImg from "@/assets/timecapsule.webp";

/**
 * My side projects.
 **/
const projects: ProjectProps[] = [
    {
        title: "Автоматизация учета в строительной компании",
        description: [
            "Проект по внедрению системы 1С:ERP в крупной строительной компании для оптимизации учета и управления ресурсами.",
            "Результаты: сокращение времени на подготовку отчетности на 40%, улучшение контроля за затратами и материальными ресурсами.",
            "Данный проект позволил значительно улучшить процессы внутри компании, обеспечив эффективное взаимодействие между отделами и сокращение издержек."
        ],
        image: YaziImg,
        link: "https://burg.1cbit.ru/blog/business-cases/",
        repository: "",
        technologies: ["1C", "ERP"],
        beamClassName: "from-[#007BFF] to-[#004085]",
    },
    {
        title: "Разработка CRM-системы для ритейлера",
        description: [
            "Разработка и внедрение индивидуальной CRM-системы для крупной розничной сети, интегрированной с 1С:Предприятие.",
            "Эффект: повышение эффективности работы отдела продаж на 30%, улучшение взаимодействия с клиентами.",
            "Проект обеспечил более глубокий анализ данных о покупателях, что позволило улучшить маркетинговые стратегии и повысить общую удовлетворенность клиентов."
        ],
        image: HabitsImg,
        link: "https://burg.1cbit.ru/blog/business-cases/",
        repository: "",
        technologies: ["CRM", "1C"],
        beamClassName: "from-[#28A745] to-[#155724]",
    },
    {
        title: "Управление учетом в логистической компании",
        description: [
            "Внедрение системы 1С:Управление торговлей для автоматизации учета в крупной логистической компании.",
            "Результаты: ускорение процессов складского учета на 50%, повышение точности отчетности.",
            "Проект также способствовал оптимизации логистических операций, что привело к снижению времени доставки и увеличению общей производительности."
        ],
        image: DeltaImg,
        link: "https://burg.1cbit.ru/blog/business-cases/",
        repository: "",
        technologies: ["1C"],
        beamClassName: "from-[#FFC107] to-[#FFD54F]",
    }
];

/**
 * Projects section.
 */
export const Projects = () => {
    return (
        <section id="projects" className="flex w-full flex-col items-start gap-12 lg:items-center lg:gap-24">
            <FadeInWhileInView initial={{ y: -40 }} animate={{ y: 0 }}>
                <Title icon={IconBriefcase} label="Кейсы" title="Бизнес-проекты" align="center" />
            </FadeInWhileInView>

            <Carousel data-testid="project-carousel" className="w-full" opts={{ loop: true, duration: 0 }}>
                <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }}>
                    <CarouselContent data-testid="project-carousel-content">
                        {projects.map((project, index) => (
                            <CarouselItem data-testid="project-carousel-item" key={index}>
                                <Project {...project} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Navigation buttons */}
                    <CarouselPrevious data-testid="project-carousel-previous" />
                    <CarouselNext data-testid="project-carousel-next" />
                </FadeInWhileInView>
            </Carousel>
        </section>
    );
};
