"use client";

import { lazy } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

/**
 * Spline card displayed on the hero section.
 */
export const SplineCard = () => {
    return (
        <Spline
            data-testid="spline-card"
            scene="https://prod.spline.design/895CvQRcV3uZpHD9/scene.splinecode"
            className="min-h-[300px] w-full lg:min-h-[100px] lg:w-auto xl:-mt-10 massive:-mt-0"
        />
    );
};
