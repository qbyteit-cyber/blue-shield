"use client";

import { HowWeHelpTemplate } from "@/components/services/how-we-help/HowWeHelpTemplate";
import { RolesGrid } from "@/components/services/how-we-help/roles/RolesGrid";
import {
    rolesPageMeta,
    outsourcedRoles,
    whoIsThisForCards,
    comparisonRows,
} from "@/components/services/how-we-help/data/rolesData";

export default function OutsourcedRolesPage() {
    return (
        <HowWeHelpTemplate meta={rolesPageMeta}>
            <RolesGrid
                roles={outsourcedRoles}
                whoIsThisFor={whoIsThisForCards}
                comparisonRows={comparisonRows}
            />
        </HowWeHelpTemplate>
    );
}
