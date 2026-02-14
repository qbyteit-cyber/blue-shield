"use client";

import { TisaxQuiz } from "@/components/features/tisax-quiz";
import { motion } from "framer-motion";

export function ToolSection() {
    return (
        <section className="py-24 bg-neutral-50" id="tools">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-6">Compliance Planning Tools</h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <TisaxQuiz />
                </motion.div>
            </div>
        </section>
    );
}
