"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";
import type { FrameworkPageData } from "./types";

import { FrameworkHero } from "./FrameworkHero";
import { FrameworkBenefits } from "./FrameworkBenefits";
import { FrameworkProcess } from "./FrameworkProcess";
import { FrameworkExpert } from "./FrameworkExpert";
import { FrameworkCTA } from "./FrameworkCTA";

export function FrameworkTemplate({ data }: { data: FrameworkPageData }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                <FrameworkHero data={data.hero} />

                <CertificationBadgeStrip />

                <FrameworkBenefits data={data.benefits} />

                <FrameworkProcess data={data.process} />

                <FrameworkExpert data={data.expert} />

                <FrameworkCTA data={data.cta} />
            </main>
            <Footer />
        </>
    );
}
