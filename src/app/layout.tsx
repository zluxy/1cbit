import "./globals.css";

import { Plus_Jakarta_Sans } from "next/font/google";

import { Header } from "@/components";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    style: ["normal", "italic"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-plus_jakarta_sans",
});

export const metadata = {
    title: "Шараев Руслан | Дипломная работа",
    description:
        "Разработка интерактивного 3D Web-сайта с использованием инструмента Spline",
    keywords:
        "3D, Web-сайт, Spline, Руслан, Шараев, Дипломная работа, Интерактивный, Web-сайт, 3D, Web-сайт, Spline, Руслан, Шараев, Дипломная работа, Интерактивный",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="en"
            className="scrollbar scrollbar-track-[#424242] scrollbar-thumb-[#686868] scrollbar-w-2 hover:scrollbar-thumb-[#7b7b7b] active:scrollbar-thumb-[#7b7b7b]"
        >
            <body
                className={`
                    ${plusJakartaSans.variable}
                    relative
                    flex
                    min-h-screen
                    w-full
                    max-w-[100vw]
                    flex-col
                    items-center
                    justify-center
                    overflow-x-hidden
                    bg-background
                    font-sans
                    selection:bg-accent
                `}
            >
                <Header />
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
