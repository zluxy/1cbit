import ChakraUiIcon from "@/assets/icons/chakraui.svg";
import CypressIcon from "@/assets/icons/cypress.svg";
import ExpoIcon from "@/assets/icons/expo.svg";
import ExpressIcon from "@/assets/icons/express.svg";
import FastifyIcon from "@/assets/icons/fastify.svg";
import FigmaIcon from "@/assets/icons/figma.svg";
import GitIcon from "@/assets/icons/git.svg";
import GithubActionsIcon from "@/assets/icons/github-actions.svg";
import I18nextIcon from "@/assets/icons/i18next.svg";
import JestIcon from "@/assets/icons/jest.svg";
import JwtIcon from "@/assets/icons/jwt.svg";
import MailtrapIcon from "@/assets/icons/mailtrap.svg";
import NextIcon from "@/assets/icons/next.svg";
import NodeIcon from "@/assets/icons/node.svg";
import PrismaIcon from "@/assets/icons/prisma.svg";
import PwaIcon from "@/assets/icons/pwa.svg";
import RadixIcon from "@/assets/icons/radix.svg";
import ReactHookFormIcon from "@/assets/icons/react-hook-form.svg";
import ReactNativeIcon from "@/assets/icons/react-native.svg";
import ReactQueryIcon from "@/assets/icons/react-query.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import SentryIcon from "@/assets/icons/sentry.svg";
import ShadcnIcon from "@/assets/icons/shadcn.svg";
import SqliteIcon from "@/assets/icons/sqlite.svg";
import StorybookIcon from "@/assets/icons/storybook.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import TypescriptIcon from "@/assets/icons/typescript.svg";
import ViteIcon from "@/assets/icons/vite.svg";
import ZodIcon from "@/assets/icons/zod.svg";
import CIcon from "@/assets/icons/1c.svg";
import ERPIcon from "@/assets/icons/erp.svg";
import CRMIcon from "@/assets/icons/crm.svg";

import Image from "next/image";

import { IconCode } from "@tabler/icons-react";

import { TechnologiesMap } from "@/utils";
import { Tooltip, TooltipArrow, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

export type Technologies = {
    [key in TechnologiesMap]: {
        label: string;
        icon: string;
    };
};

interface TechnologiesWrapperProps {
    technologies: TechnologiesMap[];
}

const technologiesMap: Technologies = {
    chrakraui: { label: "Chakra UI", icon: ChakraUiIcon },
    cypress: { label: "Cypress", icon: CypressIcon },
    expo: { label: "Expo", icon: ExpoIcon },
    express: { label: "Express", icon: ExpressIcon },
    fastify: { label: "Fastify", icon: FastifyIcon },
    figma: { label: "Figma", icon: FigmaIcon },
    git: { label: "Git", icon: GitIcon },
    githubActions: { label: "Github Actions", icon: GithubActionsIcon },
    i18next: { label: "i18next", icon: I18nextIcon },
    jest: { label: "Jest", icon: JestIcon },
    jwt: { label: "JWT", icon: JwtIcon },
    mailtrap: { label: "Mailtrap", icon: MailtrapIcon },
    next: { label: "Next.js", icon: NextIcon },
    node: { label: "Node.js", icon: NodeIcon },
    prisma: { label: "Prisma", icon: PrismaIcon },
    pwa: { label: "PWA", icon: PwaIcon },
    radix: { label: "Radix UI", icon: RadixIcon },
    reactHookForm: { label: "React Hook Form", icon: ReactHookFormIcon },
    reactNative: { label: "React Native", icon: ReactNativeIcon },
    reactQuery: { label: "React Query", icon: ReactQueryIcon },
    react: { label: "React", icon: ReactIcon },
    redux: { label: "Redux.JS", icon: ReduxIcon },
    sentry: { label: "Sentry", icon: SentryIcon },
    shadcn: { label: "Shadcn UI", icon: ShadcnIcon },
    sqlite: { label: "SQLite", icon: SqliteIcon },
    storybook: { label: "Storybook", icon: StorybookIcon },
    tailwind: { label: "Tailwind CSS", icon: TailwindIcon },
    typescript: { label: "TypeScript", icon: TypescriptIcon },
    vite: { label: "Vite", icon: ViteIcon },
    zod: { label: "Zod", icon: ZodIcon },
    "1C": { label: "1C", icon: CIcon }, 
    CRM: { label: "CRM", icon: CRMIcon }, 
    ERP: { label: "ERP", icon: ERPIcon }, 
};

/**
 * Technologies wrapper component used to display the technologies used in some project or section.
 * @param technologies - Technologies used.
 */
export const TechnologiesWrapper = ({ technologies }: TechnologiesWrapperProps) => {
    const filteredTechnologies = technologies.map((tech) => technologiesMap[tech]);

    return (
        <div data-testid="technologies-wrapper" className="flex w-full flex-col items-start gap-7">
            <div className="flex items-center gap-2">
                <IconCode className="h-5 w-5 text-primary" />
                <h1 className="text-lg font-medium text-primary">Технологии</h1>
            </div>

            <div className="flex w-full max-w-7xl flex-wrap items-start justify-start gap-8">
                {filteredTechnologies.map((tech, index) => (
                    <TooltipProvider key={index}>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl border border-hover p-[14px]">
                                    <Image src={tech.icon} alt={tech.label} className="h-auto w-auto" loading="lazy" />
                                </div>
                            </TooltipTrigger>

                            <TooltipContent className="flex items-center justify-center rounded-lg border border-hover bg-background/90 px-4 py-1.5">
                                <h1 className="text-xs font-medium text-primary">{tech.label}</h1>
                                <TooltipArrow className="fill-hover" />
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                ))}
            </div>
        </div>
    );
};
