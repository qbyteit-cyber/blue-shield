"use client";

import { HowWeHelpTemplate } from "@/components/services/how-we-help/HowWeHelpTemplate";
import { DeliveryAreasGrid } from "@/components/services/how-we-help/delivery-areas/DeliveryAreasGrid";
import {
    implementationPageMeta,
    deliveryAreas,
} from "@/components/services/how-we-help/data/implementationData";

export default function ImplementationSupportPage() {
    return (
        <HowWeHelpTemplate meta={implementationPageMeta}>
            <DeliveryAreasGrid areas={deliveryAreas} />
        </HowWeHelpTemplate>
    );
}
