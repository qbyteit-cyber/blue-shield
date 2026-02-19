import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "TISAX® Compliance for Automotive Suppliers",
    description:
        "Trusted TISAX® compliance partner for BMW, VW, and Mercedes supply chain Tier-1/Tier-2 suppliers. Achieve certification without disrupting production. 100% first-time pass rate.",
    openGraph: {
        title: "TISAX® Compliance for Automotive Suppliers | ITIS-Secure",
        description:
            "Trusted TISAX® compliance partner for BMW, VW, and Mercedes supply chain Tier-1/Tier-2 suppliers. Achieve certification without disrupting production. 100% first-time pass rate.",
        url: "https://itis-secure.com/industries/automotive",
    },
};

export default function AutomotiveLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
