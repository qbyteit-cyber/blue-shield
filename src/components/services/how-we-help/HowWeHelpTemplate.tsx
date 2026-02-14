import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HowWeHelpHero } from "./HowWeHelpHero";
import { HowWeHelpIntro } from "./HowWeHelpIntro";
import { HowWeHelpProcess } from "./HowWeHelpProcess";
import { HowWeHelpFrameworks } from "./HowWeHelpFrameworks";
import { HowWeHelpFaq } from "./HowWeHelpFaq";
import { HowWeHelpCta } from "./HowWeHelpCta";
import type { PageMeta } from "./types";

interface Props {
    meta: PageMeta;
    children: React.ReactNode;
}

export function HowWeHelpTemplate({ meta, children }: Props) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <HowWeHelpHero meta={meta} />
                <HowWeHelpIntro meta={meta} />
                {children}
                <HowWeHelpProcess
                    h2={meta.processH2}
                    intro={meta.processIntro}
                    steps={meta.processSteps}
                />
                <HowWeHelpFrameworks
                    h2={meta.frameworksH2}
                    intro={meta.frameworksIntro}
                    frameworks={meta.frameworks}
                />
                <HowWeHelpFaq faqs={meta.faqs} />
                <HowWeHelpCta cta={meta.finalCta} />
            </main>
            <Footer />
        </>
    );
}
