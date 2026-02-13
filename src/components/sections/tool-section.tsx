"use client";

import { useState } from "react";
import { TisaxQuiz } from "@/components/features/tisax-quiz";
import { CostCalculator } from "@/components/features/cost-calculator";
import { motion } from "framer-motion";

export function ToolSection() {
    const [activeTab, setActiveTab] = useState<"quiz" | "calculator">("quiz");

    return (
        <section className="py-24 bg-neutral-50" id="tools">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-4xl font-bold text-neutral-900 mb-6">Compliance Planning Tools</h2>
                    <div className="flex bg-neutral-200 p-1 rounded-lg">
                        <button
                            onClick={() => setActiveTab("quiz")}
                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === "quiz" ? "bg-white text-primary-navy shadow-sm" : "text-neutral-500"
                                }`}
                        >
                            TISAX® Readiness Quiz
                        </button>
                        <button
                            onClick={() => setActiveTab("calculator")}
                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${activeTab === "calculator" ? "bg-white text-primary-navy shadow-sm" : "text-neutral-500"
                                }`}
                        >
                            Investment Calculator
                        </button>
                    </div>
                </div>

                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === "quiz" ? <TisaxQuiz /> : <CostCalculator />}
                </motion.div>
            </div>
        </section>
    );
}
