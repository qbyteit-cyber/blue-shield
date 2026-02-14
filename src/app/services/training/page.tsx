"use client";

import { HowWeHelpTemplate } from "@/components/services/how-we-help/HowWeHelpTemplate";
import { TrainingProgrammes } from "@/components/services/how-we-help/training/TrainingProgrammes";
import {
    trainingPageMeta,
    trainingProgrammes,
    trainingFormats,
    audienceCards,
} from "@/components/services/how-we-help/data/trainingData";

export default function TrainingPage() {
    return (
        <HowWeHelpTemplate meta={trainingPageMeta}>
            <TrainingProgrammes
                programmes={trainingProgrammes}
                formats={trainingFormats}
                audienceCards={audienceCards}
            />
        </HowWeHelpTemplate>
    );
}
