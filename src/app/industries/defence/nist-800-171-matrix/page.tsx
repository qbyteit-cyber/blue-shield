import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, FileText, ArrowLeft, Lock, Award } from "lucide-react";
import { CertificationBadgeStrip } from "@/components/sections/CertificationBadgeStrip";

const nistFamilies = [
    {
        id: "3.1",
        name: "Access Control",
        desc: "Limit information system access to authorized users, processes acting on behalf of authorized users, or devices (including other information systems).",
        controls: 22,
        icon: Lock
    },
    {
        id: "3.2",
        name: "Awareness and Training",
        desc: "Ensure that managers, systems administrators, and users of organizational information systems are made aware of the security risks associated with their activities.",
        controls: 3,
        icon: FileText
    },
    {
        id: "3.3",
        name: "Audit and Accountability",
        desc: "Create, protect, and retain information system audit records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized activity.",
        controls: 9,
        icon: FileText
    },
    {
        id: "3.4",
        name: "Configuration Management",
        desc: "Establish and maintain baseline configurations and inventories of organizational information systems.",
        controls: 9,
        icon: Shield
    },
    {
        id: "3.5",
        name: "Identification and Authentication",
        desc: "Identify information system users, processes acting on behalf of users, or devices and authenticate (or verify) the identities of those users, processes, or devices.",
        controls: 11,
        icon: Lock
    },
    {
        id: "3.6",
        name: "Incident Response",
        desc: "Establish an operational incident-handling capability for organizational information systems that includes adequate preparation, detection, analysis, containment, recovery, and user response activities.",
        controls: 3,
        icon: Shield
    },
    {
        id: "3.7",
        name: "Maintenance",
        desc: "Perform maintenance on organizational information systems.",
        controls: 6,
        icon: FileText
    },
    {
        id: "3.8",
        name: "Media Protection",
        desc: "Protect (i.e., physically control and securely store) information system media containing CUI, both paper and digital.",
        controls: 9,
        icon: Lock
    },
    {
        id: "3.9",
        name: "Personnel Security",
        desc: "Screen individuals prior to authorizing access to information systems containing CUI.",
        controls: 2,
        icon: Shield
    },
    {
        id: "3.10",
        name: "Physical Protection",
        desc: "Limit physical access to information systems, equipment, and the respective operating environments to authorized individuals.",
        controls: 6,
        icon: Lock
    },
    {
        id: "3.11",
        name: "Risk Assessment",
        desc: "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals.",
        controls: 3,
        icon: Shield
    },
    {
        id: "3.12",
        name: "Security Assessment",
        desc: "Periodically assess the security controls in organizational information systems to determine if the controls are effective in their application.",
        controls: 4,
        icon: Award
    },
    {
        id: "3.13",
        name: "System and Communications Protection",
        desc: "Monitor, control, and protect organizational communications (i.e., information transmitted or received by organizational information systems) at the external boundaries and key internal boundaries of the information systems.",
        controls: 16,
        icon: Shield
    },
    {
        id: "3.14",
        name: "System and Information Integrity",
        desc: "Identify, report, and correct information and information system flaws in a timely manner.",
        controls: 7,
        icon: CheckCircle
    }
];

export default function NistMatrixPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-20">
                {/* Hero Section */}
                <section className="relative bg-[#0F172A] py-20 overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#FF6B35,transparent_60%)]" />
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                        <div className="mb-6">
                            <Link href="/industries/defence" className="inline-flex items-center text-accent-coral font-bold text-sm tracking-widest uppercase hover:underline">
                                <ArrowLeft size={16} className="mr-2" />
                                Back to Defence
                            </Link>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                            NIST 800-171 <span className="text-accent-coral">Controls Matrix</span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
                            A comprehensive breakdown of the 110 Controls across 14 Families required for CMMC Level 2 Compliance and safeguarding Controlled Unclassified Information (CUI).
                        </p>
                    </div>
                </section>

                <CertificationBadgeStrip />

                {/* Matrix Content */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {nistFamilies.map((family) => (
                                <div key={family.id} className="group p-8 rounded-2xl border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-primary-navy/5 p-3 rounded-xl group-hover:bg-accent-coral/10 transition-colors">
                                            <family.icon className="text-primary-navy group-hover:text-accent-coral transition-colors" size={24} />
                                        </div>
                                        <div className="text-xs font-black text-neutral-300 group-hover:text-accent-coral transition-colors">
                                            {family.id}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-primary-navy mb-3">
                                        {family.name}
                                    </h3>

                                    <p className="text-sm text-neutral-600 mb-6 leading-relaxed h-20">
                                        {family.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200 group-hover:border-accent-coral/20 transition-colors">
                                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                                            Controls
                                        </span>
                                        <span className="bg-primary-navy text-white text-xs font-bold px-3 py-1 rounded-full group-hover:bg-accent-coral transition-colors">
                                            {family.controls}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-24 bg-neutral-900 text-white text-center">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">
                            Need Help Implementing These 110 Controls?
                        </h2>
                        <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
                            We map these requirements directly to your existing workflows. Don't build a separate shadow IT system just for compliance.
                        </p>
                        <Link href="/contact">
                            <Button variant="primary" size="lg" className="px-12 py-8 text-lg h-auto rounded-xl">
                                Book CMMC Implementation Call
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
