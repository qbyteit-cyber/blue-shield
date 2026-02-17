import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Info, Building, MapPin, Contact, Briefcase, Copyright, Landmark } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Legal Notice | ITIS-SECURE",
    description: "Statutory information and company details for QBYTE IT SRL (ITIS-SECURE).",
};

const LAST_UPDATED = "February 16, 2026";

export default function LegalNoticePage() {
    const legalSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://itis-secure.com/#organization",
                "name": "ITIS-SECURE",
                "legalName": "QBYTE IT SRL",
                "url": "https://itis-secure.com",
                "logo": "https://itis-secure.com/itis-secure-logo.svg",
                "vatID": "DE123456789",
                "iso6523Code": "0088:DE123456789",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Str. Liliacului nr 2",
                    "addressLocality": "Cisnadie",
                    "addressRegion": "Sibiu",
                    "postalCode": "555300",
                    "addressCountry": "RO"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+40-741-711-770",
                    "contactType": "customer service",
                    "email": "office@itis-secure.com"
                }
            },
            {
                "@type": "Service",
                "provider": { "@id": "https://itis-secure.com/#organization" },
                "serviceType": "Cybersecurity Compliance Consulting",
                "areaServed": {
                    "@type": "Country",
                    "name": "European Union"
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Audit Readiness Services",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "TISAX® Readiness (AL2/AL3)"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "CMMC 2.0 Level 2 Implementation"
                            }
                        }
                    ]
                }
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
            />
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-white">
                <article className="container mx-auto px-6 max-w-4xl">
                    {/* Header */}
                    <header className="mb-16 border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-3 text-accent-coral mb-6">
                            <Info size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest">Company Disclosure</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-6">
                            Legal Notice
                        </h1>
                        <p className="text-neutral-500 font-medium">
                            Last Updated: <time dateTime="2026-02-16">{LAST_UPDATED}</time>
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-neutral prose-headings:text-primary-navy prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent-coral prose-a:no-underline hover:prose-a:underline max-w-none">
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Building className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">1. Information according to § 5 TMG / Romanian Law</h2>
                            </div>
                            <p>This website is operated as a commercial presence by:</p>
                            <p>
                                <strong>QBYTE IT SRL</strong><br />
                                Trading as: <strong>ITIS-SECURE</strong>
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">2. Registered Office</h2>
                            </div>
                            <p>
                                Str. Liliacului nr 2<br />
                                555300 Cisnadie, Sibiu<br />
                                Romania
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Contact className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">3. Representative</h2>
                            </div>
                            <p>
                                <strong>Managing Director:</strong> Iulian Bozdoghina
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:office@itis-secure.com">office@itis-secure.com</a><br />
                                <strong>Phone:</strong> +40 741 711 770
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Landmark className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">4. Commercial Register</h2>
                            </div>
                            <p>
                                Registered in the Trade Register (Registrul Comerțului) of Romania.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">5. Professional Liability Insurance</h2>
                            </div>
                            <p>
                                ITIS-SECURE maintains professional indemnity insurance covering the delivery of cybersecurity consulting services across the European Union.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Copyright className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">6. Copyright & Trademarks</h2>
                            </div>
                            <p>
                                TISAX® is a registered trademark of the ENX Association. ITIS-SECURE is an independent consultancy and not an official representative of the ENX Association. All other content, including layout and images, is protected by copyright laws of Romania and the EU.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
