"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import ServicesSection from "@/components/ui/ServicesSection";
import ReadinessCalculator from "@/components/ui/ReadinessCalculator";
import { SuccessMatrix } from "@/components/ui/SuccessMatrix";
import { TisaxPipeline } from "@/components/ui/TisaxPipeline";
import { Shield, Lock } from "lucide-react";

const SecurityMesh = dynamic(() => import("@/components/canvas/SecurityMesh"), {
    ssr: false,
});

export default function ServicesPage() {
    const [calculatorOpen, setCalculatorOpen] = useState(false);

    return (
        <main className="min-h-screen relative overflow-x-hidden bg-background text-foreground">
            {/* 3D Background */}
            <div className="fixed inset-0 z-0 opacity-40 dark:opacity-20 pointer-events-none">
                <SecurityMesh />
            </div>

            <div className="relative z-10">
                <Navbar onOpenCalculator={() => setCalculatorOpen(true)} />

                <div className="pt-32 pb-16 px-8">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 tracking-tighter">
                            Enterprise <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-mono">
                            Deep technical expertise in TISAX®, ISO 27001, and high-integrity information security for the automotive industry.
                        </p>
                    </div>
                </div>

                {/* 1. Compliance Ecosystem (ServicesSection) */}
                <ServicesSection />

                {/* 2. Success Matrix Table */}
                <section className="py-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                            <div>
                                <span className="text-primary font-mono font-bold tracking-[0.3em] uppercase block mb-4">Empirical Proof</span>
                                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground mb-8 tracking-tighter">
                                    The Success Matrix: <br />
                                    <span className="text-foreground/40">Automotive Transformation</span>
                                </h2>
                                <p className="text-lg text-foreground/50 font-mono mb-8 leading-relaxed">
                                    Our engagement model focuses on shifting legacy infrastructure into high-performance security silos. We prioritize data sovereignty and zero-trust protocols over "just being compliant."
                                </p>
                                <div className="flex gap-8">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Lock className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-foreground">Military-Grade ISMS</span>
                                        </div>
                                        <p className="text-xs text-foreground/40 font-mono">ISO 27001:2022 Compliant</p>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-3">
                                            <Shield className="w-5 h-5 text-primary" />
                                            <span className="text-sm font-bold text-foreground">OEM Ready AL3</span>
                                        </div>
                                        <p className="text-xs text-foreground/40 font-mono">TISAX Specialized Nodes</p>
                                    </div>
                                </div>
                            </div>
                            <SuccessMatrix />
                        </div>
                    </div>
                </section>

                {/* 3. TISAX Pipeline Section */}
                <section className="py-32 px-8 bg-surface/50 border-t border-foreground/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-[0.4em] mb-4 block">Deployment Lifecycle</span>
                            <h2 className="text-4xl md:text-6xl font-display font-black text-foreground tracking-tighter">
                                TISAX® Implementation Pipeline
                            </h2>
                        </div>
                        <TisaxPipeline />
                    </div>
                </section>

                <Footer />
            </div>

            <ReadinessCalculator isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} />
        </main>
    );
}
