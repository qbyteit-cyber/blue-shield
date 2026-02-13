"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRight, ChevronLeft, Send } from "lucide-react";

const questions = [
    {
        id: 1,
        question: "Do you have a documented Information Security Management System (ISMS)?",
        category: "ISMS Maturity"
    },
    {
        id: 2,
        question: "Is your organization already ISO 27001 certified?",
        category: "ISMS Maturity"
    },
    {
        id: 3,
        question: "Do you have a designated Information Security Officer (ISO)?",
        category: "Organizational Readiness"
    },
    {
        id: 4,
        question: "Is physical access to your production sites strictly controlled and logged?",
        category: "Technical Controls"
    },
    {
        id: 5,
        question: "Do you conduct regular vulnerability scans and penetration tests?",
        category: "Technical Controls"
    }
];

export function TisaxQuiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleAnswer = (value: string) => {
        setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }));
        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const calculateScore = () => {
        const score = Object.values(answers).filter(a => a === "Yes").length;
        return (score / questions.length) * 100;
    };

    if (isSubmitted) {
        const score = calculateScore();
        return (
            <div className="p-8 text-center bg-white rounded-2xl border border-neutral-100 shadow-xl">
                <div className="w-20 h-20 bg-success-emerald/10 text-success-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Assessment Complete</h3>
                <p className="text-neutral-500 mb-6">Your estimated TISAX® readiness is:</p>
                <div className="text-6xl font-black text-primary-navy mb-8">{score}%</div>
                <div className="p-4 bg-neutral-50 rounded-lg text-sm text-left mb-8">
                    <p className="font-bold mb-2">Next Steps:</p>
                    <p>Based on your score, we recommend a deep-dive Gap Analysis to address critical evidence requirements before your official audit.</p>
                </div>
                <Button size="lg" className="w-full">Get Detailed Report & Timeline</Button>
            </div>
        );
    }

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl border border-neutral-100 shadow-xl relative overflow-hidden">
            {/* Progress Bar */}
            <div className="absolute top-0 left-0 h-1 bg-accent-coral transition-all duration-300" style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }} />

            <div className="mb-8 flex justify-between items-center">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Step {currentStep + 1} of {questions.length}
                </span>
                <span className="text-[10px] font-bold text-accent-coral uppercase bg-accent-coral/5 px-2 py-1 rounded">
                    {questions[currentStep].category}
                </span>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="min-h-[120px]"
                >
                    <h3 className="text-xl font-bold text-neutral-900 leading-tight">
                        {questions[currentStep].question}
                    </h3>
                </motion.div>
            </AnimatePresence>

            <div className="grid grid-cols-1 gap-3 mt-8">
                {["Yes", "Partial", "No"].map((text) => (
                    <button
                        key={text}
                        onClick={() => handleAnswer(text)}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 text-left font-bold transition-all ${answers[questions[currentStep].id] === text
                            ? "border-primary-navy bg-primary-navy/5 text-primary-navy"
                            : "border-neutral-100 hover:border-neutral-200 text-neutral-600"
                            }`}
                    >
                        {text}
                        <ChevronRight size={18} />
                    </button>
                ))}
            </div>

            <div className="mt-12 flex justify-between gap-4">
                {currentStep > 0 && (
                    <Button variant="ghost" onClick={() => setCurrentStep(currentStep - 1)}>
                        <ChevronLeft size={18} /> Back
                    </Button>
                )}
                {currentStep === questions.length - 1 && answers[questions[currentStep].id] && (
                    <Button className="ml-auto" onClick={() => setIsSubmitted(true)}>
                        Finish Assessment <Send size={18} className="ml-2" />
                    </Button>
                )}
            </div>
        </div>
    );
}
