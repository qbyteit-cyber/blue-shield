import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Your Free TISAX® Gap Assessment",
    description:
        "Book a free TISAX® gap assessment with our certified consultants. Get a clear roadmap to certification in as little as 95 days — no obligation, no surprises, 100% first-time pass rate.",
    openGraph: {
        title: "Book Your Free TISAX® Gap Assessment | ITIS-Secure",
        description:
            "Book a free TISAX® gap assessment with our certified consultants. Get a clear roadmap to certification in as little as 95 days — no obligation, no surprises, 100% first-time pass rate.",
        url: "https://itis-secure.com/contact",
    },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
