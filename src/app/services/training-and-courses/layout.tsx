import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cybersecurity Training & ISO 27001 Courses | Professional Academy | ITIS Secure",
    description: "Expert-led training for ISO 27001 Auditors, Cybersecurity Managers, and NIS2/DORA compliance. Empower your workforce with mission-critical security knowledge.",
    keywords: ["Cybersecurity Training", "ISO 27001 Course", "ISMS Auditor Training", "NIS2 Workshop", "DORA Compliance Training", "Security Awareness", "Employee Training"],
    openGraph: {
        title: "Cybersecurity Training & Professional Courses | ITIS Secure",
        description: "Official security training and certification preparation for modern enterprises.",
        type: "website",
    }
};

export default function TrainingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
