import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "ISMS Implementation Services",
    description:
        "Build a robust Information Security Management System from the ground up. Our ISMS implementation service covers risk assessment, controls, documentation and ongoing CISO support.",
    openGraph: {
        title: "ISMS Implementation Services | ITIS-Secure",
        description:
            "Build a robust Information Security Management System from the ground up. Our ISMS implementation service covers risk assessment, controls, documentation and ongoing CISO support.",
        url: "https://itis-secure.com/services/isms-implementation",
    },
};

export default function IsmsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
