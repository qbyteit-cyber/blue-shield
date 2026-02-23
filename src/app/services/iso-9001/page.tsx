import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { iso9001Data } from "@/components/services/frameworks/data/iso9001Data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: iso9001Data.meta.title,
    description: iso9001Data.meta.description,
};

export default function Iso9001Page() {
    return <FrameworkTemplate data={iso9001Data} />;
}
