import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { doraData } from "@/components/services/frameworks/data/doraData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: doraData.meta.title,
    description: doraData.meta.description,
};

export default function DoraPage() {
    return <FrameworkTemplate data={doraData} />;
}
