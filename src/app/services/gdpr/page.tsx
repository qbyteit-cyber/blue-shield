import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { gdprData } from "@/components/services/frameworks/data/gdprData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: gdprData.meta.title,
    description: gdprData.meta.description,
};

export default function GdprPage() {
    return <FrameworkTemplate data={gdprData} />;
}
