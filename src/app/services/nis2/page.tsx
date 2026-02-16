import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { nis2Data } from "@/components/services/frameworks/data/nis2Data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: nis2Data.meta.title,
    description: nis2Data.meta.description,
};

export default function Nis2Page() {
    return <FrameworkTemplate data={nis2Data} />;
}
