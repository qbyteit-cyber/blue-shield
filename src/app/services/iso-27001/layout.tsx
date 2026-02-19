import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISO/IEC 27001:2022 Certification Consulting",
    description:
        "End-to-end ISO/IEC 27001:2022 certification consulting for enterprises. Gap analysis, policy development, internal audits, and certification body liaison — all in one engagement.",
    openGraph: {
        title: "ISO/IEC 27001:2022 Certification Consulting | ITIS-Secure",
        description:
            "End-to-end ISO/IEC 27001:2022 certification consulting for enterprises. Gap analysis, policy development, internal audits, and certification body liaison — all in one engagement.",
        url: "https://itis-secure.com/services/iso-27001",
    },
};

export default function Iso27001Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
