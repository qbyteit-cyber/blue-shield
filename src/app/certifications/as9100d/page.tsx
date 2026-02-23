import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AS9100D Certified Aerospace & Defense Quality Management | ITIS-Secure',
    description: 'ITIS-Secure is an AS9100D certified leader in Aerospace and Defense solutions. Discover how our stringent QMS ensures safety, reliability, and regulatory compliance for your mission-critical projects.',
    keywords: 'AS9100D certification, IAQG standards, aerospace quality management, defense industry compliance, ITIS-Secure, counterfeit parts prevention, AS&D supply chain',
};

export default function AS9100DPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-24 lg:py-32 bg-primary text-white overflow-hidden">
                {/* Aerospace manufacturing image placeholder */}
                <div className="absolute inset-0 z-0 opacity-20 bg-slate-800">
                    {/* Placeholder for background image */}
                    <div className="w-full h-full bg-slate-800 mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-2/3">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                                AS9100D Certification: <br /><span className="text-slate-300">Excellence in Aerospace &amp; Defense Quality Management</span>
                            </h1>
                            <p className="text-xl text-slate-200 mb-8 max-w-2xl font-light">
                                Uncompromising Standards for Mission-Critical Performance
                            </p>
                            <div className="prose prose-lg prose-invert text-slate-300">
                                <p>
                                    At ITIS-Secure, we recognize that in the aviation, space, and defense (AS&amp;D) industries, there is zero room for error. Reliability isn&apos;t just a goal; it is a requirement. To meet the rigorous demands of our partners and regulatory bodies, ITIS-Secure is proud to operate under the AS9100D Quality Management System (QMS).
                                </p>
                                <p>
                                    As the premier international standard for the aerospace industry, AS9100D incorporates the entirety of ISO 9001:2015 while adding over 100 additional requirements specifically designed to ensure the safety, reliability, and airworthiness of products and services.
                                </p>
                            </div>
                        </div>

                        <div className="md:w-1/3 flex justify-center">
                            {/* AS9100D Certification Badge Placeholder */}
                            <div className="w-64 h-64 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full flex flex-col items-center justify-center shadow-2xl p-8 text-center ring-4 ring-slate-800/50">
                                <div className="w-24 h-24 mb-4 border-4 border-accent rounded-full flex items-center justify-center">
                                    <span className="text-accent text-3xl font-bold">QMS</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">AS9100D</h3>
                                <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold">Certified</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why AS9100D Matters */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why AS9100D Matters to Our Clients</h2>
                        <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            AS9100D certification is more than a badge of honor—it is a promise of operational excellence. By adhering to the standards set by the International Aerospace Quality Group (IAQG), ITIS-Secure provides our clients with:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Enhanced Risk Management</h3>
                            <p className="text-slate-600">Proactive identification and mitigation of risks throughout the project lifecycle.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Product Safety &amp; Reliability</h3>
                            <p className="text-slate-600">Stringent controls that ensure every component and service meets the highest safety benchmarks.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Supply Chain Integrity</h3>
                            <p className="text-slate-600">Comprehensive monitoring and management of sub-tier suppliers to prevent counterfeit parts and ensure quality.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow bg-blue-50/50">
                            <div className="w-12 h-12 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Compliance</h3>
                            <p className="text-slate-600">Full alignment with FAA, ESA, NASA, and DoD requirements.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 bg-slate-100 text-primary rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Improvement</h3>
                            <p className="text-slate-600">A culture dedicated to refining processes, reducing waste, and increasing efficiency.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Pillars */}
            <section className="py-20 bg-white border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How ITIS-Secure Implements AS9100D</h2>
                        <div className="w-20 h-1 bg-accent mb-6"></div>
                        <p className="text-lg text-slate-600 max-w-3xl">
                            Our implementation of AS9100D is integrated into the DNA of our daily operations. We don&apos;t just follow the standard; we live it through the following core pillars:
                        </p>
                    </div>

                    <div className="space-y-12">
                        {[
                            {
                                title: "Robust Configuration Management",
                                desc: "We maintain strict control over versions, revisions, and design changes. This ensures that every product is built to the exact specifications required, with full traceability from raw materials to the finished assembly.",
                                num: "01"
                            },
                            {
                                title: "Operational Risk Assessment",
                                desc: "Before a single step is taken, we evaluate potential risks in production, technology, and delivery. Our \"Risk-First\" approach allows us to pivot and solve problems before they impact our clients' timelines.",
                                num: "02"
                            },
                            {
                                title: "Counterfeit Parts Prevention",
                                desc: "The integrity of the AS&D supply chain is under constant threat. ITIS-Secure employs rigorous inspection protocols and verified sourcing strategies to ensure that every component used is authentic, documented, and fully compliant.",
                                num: "03"
                            },
                            {
                                title: "Human Factors & Safety Culture",
                                desc: "We recognize that quality starts with people. Our staff undergoes continuous training in \"Human Factors\"—understanding how human error can be mitigated through better process design, clear communication, and a culture of accountability.",
                                num: "04"
                            },
                            {
                                title: "Ethical & Product Conformity",
                                desc: "Beyond technical specs, we emphasize the importance of ethical behavior and the role each employee plays in product safety. At ITIS-Secure, every team member is empowered to halt production if a quality standard is not being met.",
                                num: "05"
                            }
                        ].map((pillar, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                                <div className="flex-shrink-0 w-16 h-16 bg-slate-100 text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300 rounded-xl flex items-center justify-center text-2xl font-bold shadow-sm">
                                    {pillar.num}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{pillar.title}</h3>
                                    <p className="text-lg text-slate-600 leading-relaxed">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Policy Blockquote */}
            <section className="py-24 bg-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/pattern-bg.png')] bg-repeat"></div>
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <svg className="w-16 h-16 text-slate-500/50 mx-auto mb-8" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10.041 21.082c-1.896 0-3.329-1.291-3.329-3.208 0-1.875 1.542-3.292 3.583-3.292.417 0 .833.042 1.25.125-1.042-4.292-3.833-6.417-7.542-6.583v-3.792c5.625.292 10.125 4.333 10.125 11.083v5.667h-4.083zM23.541 21.082c-1.896 0-3.329-1.291-3.329-3.208 0-1.875 1.542-3.292 3.583-3.292.417 0 .833.042 1.25.125-1.042-4.292-3.833-6.417-7.542-6.583v-3.792c5.625.292 10.125 4.333 10.125 11.083v5.667h-4.083z" />
                    </svg>
                    <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-slate-100 italic">
                        &quot;ITIS-Secure is committed to exceeding customer expectations by delivering defect-free products and services on time, every time. We achieve this through a relentless focus on the AS9100D standard, fostering a culture of innovation, and maintaining a world-class Quality Management System.&quot;
                    </blockquote>
                    <div className="uppercase tracking-widest text-sm font-semibold text-accent">ITIS-Secure Quality Policy</div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-900 text-white border-t border-slate-800">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with an Industry Leader</h2>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        In a sector where the stakes are stratospheric, you need a partner who understands the gravity of your mission. ITIS-Secure combines technical expertise with the disciplined framework of AS9100D to deliver results that move the world—safely.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <p className="text-lg font-medium text-slate-300">Ready to discuss your next mission-critical project?</p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-accent rounded-lg hover:bg-[#ff8c61] transition-colors shadow-lg shadow-accent/20 group"
                        >
                            Contact the Quality Team
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
