import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISO 42001 Certification & AI Trust for European Defence",
    description:
        "Manage AI risk, safety, and ethical transparency in aerospace and defence. Expert guidance on ISO/IEC 42001:2023, AIIA, and DO-326A for European subcontractors.",
    openGraph: {
        title: "ISO 42001 Certification & AI Trust for European Defence | ITIS-Secure",
        description:
            "Manage AI risk, safety, and ethical transparency in aerospace and defence. Expert guidance on ISO/IEC 42001:2023, AIIA, and DO-326A for European subcontractors.",
        url: "https://itis-secure.com/industries/defence",
    },
};

export default function DefenceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
