import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { tpisrData } from "@/components/services/frameworks/data/tpisrData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: tpisrData.meta.title,
    description: tpisrData.meta.description,
};

export default function TpisrPage() {
    return <FrameworkTemplate data={tpisrData} />;
}
