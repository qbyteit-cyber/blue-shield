"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, ShieldCheck } from "lucide-react";

export function CostCalculator() {
    const [employees, setEmployees] = useState(1);
    const [sites, setSites] = useState(1);
    const [frameworks, setFrameworks] = useState<string[]>(["TISAX"]);

    const calculateEstimate = () => {
        let base = 10000;
        if (employees > 50) base += 5000;
        if (employees > 250) base += 10000;
        base += (sites - 1) * 3000;
        base += (frameworks.length - 1) * 7000;

        return {
            min: Math.floor(base * 0.8),
            max: Math.floor(base * 1.2)
        };
    };

    const estimate = calculateEstimate();

    const toggleFramework = (f: string) => {
        setFrameworks(prev =>
            prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f]
        );
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border border-neutral-100 shadow-xl max-w-5xl mx-auto">
            <div className="space-y-10">
                <div>
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 block">Company Size (Employees)</label>
                    <input
                        type="range"
                        min="1"
                        max="1000"
                        value={employees}
                        onChange={(e) => setEmployees(parseInt(e.target.value))}
                        className="w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer accent-accent-coral"
                    />
                    <div className="flex justify-between mt-2 text-sm font-bold text-neutral-900">
                        <span>{employees} Empl.</span>
                        <span className="opacity-40">1000+</span>
                    </div>
                </div>

                <div>
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 block">Number of Physical Sites</label>
                    <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map(num => (
                            <button
                                key={num}
                                onClick={() => setSites(num)}
                                className={`flex-1 py-3 rounded-lg font-bold border-2 transition-all ${sites === num
                                    ? "border-primary-navy bg-primary-navy/5 text-primary-navy"
                                    : "border-neutral-50 hover:border-neutral-100 text-neutral-400"
                                    }`}
                            >
                                {num === 5 ? "5+" : num}
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-6 block">Target Frameworks</label>
                    <div className="grid grid-cols-2 gap-3">
                        {["TISAX", "CMMC", "ISO 27001", "ISO 21434"].map(f => (
                            <button
                                key={f}
                                onClick={() => toggleFramework(f)}
                                className={`py-3 rounded-lg text-sm font-bold border-2 transition-all ${frameworks.includes(f)
                                    ? "border-primary-navy bg-primary-navy/5 text-primary-navy"
                                    : "border-neutral-50 hover:border-neutral-100 text-neutral-400"
                                    }`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-primary-navy text-white p-8 rounded-xl flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <Calculator className="text-accent-coral" size={24} />
                        <span className="text-xs font-bold uppercase tracking-widest opacity-60">Investment Estimate</span>
                    </div>

                    <div className="mb-4 text-sm opacity-60 italic">Based on your firm profile, we estimate:</div>
                    <div className="text-5xl font-black mb-2 font-mono">
                        €{estimate.min.toLocaleString()} - €{estimate.max.toLocaleString()}
                    </div>
                    <div className="text-xs opacity-40">Plus auditing body fees (ENX/TÜV/C3PAO)</div>
                </div>

                <div className="space-y-6 mt-12">
                    <div className="flex gap-3 text-sm">
                        <ShieldCheck className="text-success-emerald shrink-0" size={20} />
                        <span>Includes end-to-end implementation & mock audit.</span>
                    </div>
                    <Button variant="primary" className="w-full h-14 bg-accent-coral hover:bg-white hover:text-primary-navy">
                        Request Itemized Proposal
                    </Button>
                </div>
            </div>
        </div>
    );
}
