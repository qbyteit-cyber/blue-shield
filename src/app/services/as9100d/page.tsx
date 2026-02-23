import { FrameworkTemplate } from "@/components/services/frameworks/FrameworkTemplate";
import { as9100dData } from "@/components/services/frameworks/data/as9100dData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: as9100dData.meta.title,
    description: as9100dData.meta.description,
};

export default function As9100dPage() {
    return <FrameworkTemplate data={as9100dData} />;
}
