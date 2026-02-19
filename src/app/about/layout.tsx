import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About ITIS-Secure — Our Team & Methodology",
    description:
        "Meet the ITIS-Secure team: certified ISO 27001 lead auditors and TISAX® specialists with 11 globally certified locations. Discover our unique compliance methodology and track record.",
    openGraph: {
        title: "About ITIS-Secure — Our Team & Methodology | ITIS-Secure",
        description:
            "Meet the ITIS-Secure team: certified ISO 27001 lead auditors and TISAX® specialists with 11 globally certified locations. Discover our unique compliance methodology and track record.",
        url: "https://itis-secure.com/about",
    },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
