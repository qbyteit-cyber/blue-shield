"use client";

import { HowWeHelpTemplate } from "@/components/services/how-we-help/HowWeHelpTemplate";
import { AuditServicesGrid } from "@/components/services/how-we-help/audits/AuditServicesGrid";
import {
    auditsPageMeta,
    auditServices,
} from "@/components/services/how-we-help/data/auditsData";

export default function SecurityAuditsPage() {
    return (
        <HowWeHelpTemplate meta={auditsPageMeta}>
            <AuditServicesGrid services={auditServices} />
        </HowWeHelpTemplate>
    );
}
