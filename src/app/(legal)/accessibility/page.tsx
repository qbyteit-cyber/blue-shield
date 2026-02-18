import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Accessibility, MousePointer2, Type, Laptop, Send, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Accessibility Statement | ITIS-Secure",
    description: "Our commitment to ensuring digital accessibility for people with disabilities on the ITIS-Secure platform.",
};

const LAST_UPDATED = "February 16, 2026";

export default function AccessibilityPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-24 bg-white">
                <article className="container mx-auto px-6 max-w-4xl">
                    {/* Header */}
                    <header className="mb-16 border-b border-neutral-100 pb-12">
                        <div className="flex items-center gap-3 text-accent-coral mb-6">
                            <Accessibility size={24} />
                            <span className="text-sm font-bold uppercase tracking-widest">Inclusive Access</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-primary-navy tracking-tighter mb-6">
                            Accessibility Statement
                        </h1>
                        <p className="text-neutral-500 font-medium">
                            Last Updated: <time dateTime="2026-02-16">{LAST_UPDATED}</time>
                        </p>
                    </header>

                    {/* Content */}
                    <div className="prose prose-neutral prose-headings:text-primary-navy prose-headings:font-black prose-headings:tracking-tight prose-a:text-accent-coral prose-a:no-underline hover:prose-a:underline max-w-none">
                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <ShieldCheck className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">1. Our Commitment</h2>
                            </div>
                            <p>
                                ITIS-Secure is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Laptop className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">2. Conformance Status</h2>
                            </div>
                            <p>
                                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. Our platform strives to conform to <strong>WCAG 2.1 level AA</strong> standards.
                            </p>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <MousePointer2 className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">3. Technical Specifications</h2>
                            </div>
                            <p>
                                Accessibility of the ITIS-Secure website relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
                            </p>
                            <ul>
                                <li>HTML</li>
                                <li>WAI-ARIA</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Type className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">4. Features Supported</h2>
                            </div>
                            <p>
                                Key features we have implemented to support accessibility include:
                            </p>
                            <ul>
                                <li>Semantic HTML5 structure for screen reader navigation.</li>
                                <li>High color contrast ratios for all core text elements.</li>
                                <li>Keyboard-navigable menus and interactive components.</li>
                                <li>Responsive layout optimized for various zoom levels and viewport sizes.</li>
                            </ul>
                        </section>

                        <section className="mb-12">
                            <div className="flex items-center gap-3 mb-4">
                                <Send className="text-primary-navy" size={20} />
                                <h2 className="m-0 text-2xl">5. Feedback & Contact</h2>
                            </div>
                            <p>
                                We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:office@itis-secure.com">office@itis-secure.com</a>
                            </p>
                            <p>
                                We try to respond to feedback within 2 business days.
                            </p>
                        </section>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
