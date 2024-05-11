import Image from "next/image";

import dayjs from "dayjs";

import { IconCode, IconDiscountCheck, IconFlare, IconPhoneCall, IconSchool } from "@tabler/icons-react";

import { CtaButtons, FadeInWhileInView, Title } from "@/components";

import { Topic, TopicProps } from "./topic";
import { BackgroundCell } from "./background-cell";

import Me from "@/assets/me.webp";

/**
 * Topics to be displayed on the about section.
 */
const topics: TopicProps[] = [
    {
        icon: IconCode,
        children: (
            <h3 className="text-base font-normal text-secondary">
                Мы <span className="text-primary">специализируется</span> на использовании продукта <span className="text-primary">1С-Битрикс: Управление сайтом</span> для создания и поддержки корпоративных ресурсов.
            </h3>
        ),
    },
    {
        icon: IconSchool,
        children: (
            <h3 className="text-base font-normal text-secondary">
                Осуществляем разработку корпоративных порталов и <span className="text-primary">интеграцию с 1С:Предприятие</span>, обеспечивая эффективное взаимодействие бизнес-процессов.
            </h3>
        ),
    },
    {
        icon: IconFlare,
        children: (
            <h3 className="text-base font-normal text-secondary">
                Имеем значительный опыт в создании <span className="text-primary">проектов</span> и <span className="text-primary">многоуровневых систем управления</span>, повышаем уровень доступности и управляемости бизнеса.
            </h3>
        ),
    },
];

/**
 * About section.
 */
export const About = () => {
    const birthDate = "2003-01-14";
    const myAge = dayjs().diff(birthDate, "year");

    return (
        <section
            id="about"
            className="relative flex h-full w-full flex-col items-start gap-12 md:items-center lg:gap-32"
        >
            <BackgroundCell />

            <div className="flex w-full flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-0">
                <div className="flex w-full flex-col items-start justify-center gap-12 lg:max-w-[540px] xl:max-w-[593px] xl:gap-16">
                    <div className="z-50 flex w-full flex-col items-start gap-7">
                        <FadeInWhileInView initial={{ y: -40 }} animate={{ y: 0 }}>
                            <Title label="Cвязь" icon={IconPhoneCall} title="Сэкономьте время!" />
                        </FadeInWhileInView>

                        <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }}>
                            <p className="font-regular text-start text-xl text-secondary">
                                <strong>Вы ищете <span className="text-primary">надежного</span> и <span className="text-primary">опытного</span> партнера для решения задач в сфере <span className="text-primary">разработки программного обеспечения</span> и <span className="text-primary">ИТ-консалтинга</span>? Тогда вы пришли по адресу!</strong>
                            </p>
                        </FadeInWhileInView>
                    </div>

                    <FadeInWhileInView initial={{ y: 40 }} animate={{ y: 0 }} className="w-full">
                        <CtaButtons
                            primary={{ label: "Заказать звонок", link: "https://burg.1cbit.ru/" }}
                            secondary={{ label: "Консультация", link: "https://burg.1cbit.ru/" }}
                        />
                    </FadeInWhileInView>
                </div>

                <FadeInWhileInView initial={{ x: 40 }} animate={{ x: 0 }} className="w-full lg:w-auto">
                    <Image
                        src={Me}
                        alt="Первый Бит"
                        className="z-50 h-auto max-h-[480px] w-full rounded-[26px] object-cover object-top md:object-center lg:max-h-[600px] lg:w-[600px] 2xl:w-[640px]"
                        priority
                    />
                </FadeInWhileInView>
            </div>

            <FadeInWhileInView initial={{ x: -40 }} animate={{ x: 0 }} className="w-full">
                <div className="flex w-full flex-col items-center gap-8 xl:flex-row">
                    {topics.map((topic, index) => (
                        <Topic key={index} {...topic} />
                    ))}
                </div>
            </FadeInWhileInView>
        </section>
    );
};
