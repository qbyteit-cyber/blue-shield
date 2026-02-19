import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CMMC 2.0 Level 2 Compliance for European Defence Contractors",
    description:
        "Navigate CMMC 2.0 Level 2 requirements with expert guidance. We help European defence contractors achieve DoD compliance and secure US defence supply chain contracts.",
    openGraph: {
        title: "CMMC 2.0 Level 2 Compliance for European Defence Contractors | ITIS-Secure",
        description:
            "Navigate CMMC 2.0 Level 2 requirements with expert guidance. We help European defence contractors achieve DoD compliance and secure US defence supply chain contracts.",
        url: "https://itis-secure.com/services/cmmc",
    },
};

export default function CmmcLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
