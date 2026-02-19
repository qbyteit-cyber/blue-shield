import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TISAX® Certification Preparation",
    description:
        "Specialist TISAX® AL2 and AL3 preparation for automotive suppliers. We guide you through VDA ISA assessments with a proven 95-day roadmap and 100% first-time pass rate.",
    openGraph: {
        title: "TISAX® Certification Preparation | ITIS-Secure",
        description:
            "Specialist TISAX® AL2 and AL3 preparation for automotive suppliers. We guide you through VDA ISA assessments with a proven 95-day roadmap and 100% first-time pass rate.",
        url: "https://itis-secure.com/services/tisax",
    },
};

export default function TisaxLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
