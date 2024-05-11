import { SocialButtonProps } from "@/components";
import { NavLinkProps } from "@/components/header/nav-link";

import { IconMessage, IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandVk, IconBrandGithub } from "@tabler/icons-react";

/**
 * List technologies that I use.
 */
export type TechnologiesMap =
    | "chrakraui"
    | "1C"
    | "CRM"
    | "ERP"
    | "cypress"
    | "expo"
    | "express"
    | "fastify"
    | "figma"
    | "git"
    | "githubActions"
    | "i18next"
    | "jest"
    | "jwt"
    | "mailtrap"
    | "next"
    | "node"
    | "prisma"
    | "pwa"
    | "radix"
    | "reactHookForm"
    | "reactNative"
    | "reactQuery"
    | "react"
    | "redux"
    | "sentry"
    | "shadcn"
    | "sqlite"
    | "storybook"
    | "tailwind"
    | "typescript"
    | "vite"
    | "zod";

/**
 * My social links.
 */
export const socialLinks: SocialButtonProps[] = [
    {
        icon: IconBrandVk,
        href: "https://vk.com/whitearmor",
    },
    {
        icon: IconBrandGithub,
        href: "https://github.com/zluxy",
    },
    {
        icon: IconBrandTelegram,
        href: "https://t.me/remilia",
    },
    {
        icon: IconBrandGmail,
        href: "mailto:zluxerino1337@gmail.com",
    },
];

/**
 * Nav links for the header.
 */
export const navLinks: NavLinkProps[] = [
    { label: "Главная", href: "/" },
    { label: "Связь", href: "/#about" },
    { label: "История", href: "/#career" },
    { label: "Проекты", href: "/#projects" },
    { label: "Контакты", href: "/#contact" },
];
