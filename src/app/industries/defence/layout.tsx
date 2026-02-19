import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CMMC 2.0 & DO-326A for Aerospace & Defence",
    description:
        "Cybersecurity compliance for aerospace and defence subcontractors. Expert guidance on CMMC 2.0, DO-326A airworthiness, and NIS2 for European critical infrastructure operators.",
    openGraph: {
        title: "CMMC 2.0 & DO-326A for Aerospace & Defence | ITIS-Secure",
        description:
            "Cybersecurity compliance for aerospace and defence subcontractors. Expert guidance on CMMC 2.0, DO-326A airworthiness, and NIS2 for European critical infrastructure operators.",
        url: "https://itis-secure.com/industries/defence",
    },
};

export default function DefenceLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
