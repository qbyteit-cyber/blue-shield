"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

interface NavbarProps {
    onOpenCalculator?: () => void;
}

const megamenuData = [
    {
        title: "How We Can Help You",
        items: [
            { name: "Implementation Support", href: "/implementation-support" },
            { name: "Security Audits and Testing", href: "/services/security-audits-and-testing" },
            { name: "Outsourcing Security Roles", href: "/services/outsourcing-security-roles" },
            { name: "Training and Courses", href: "/services/training-and-courses" },
        ],
    },
    {
        title: "Security Management Frameworks",
        items: [
            { name: "ISO 27001", href: "/services#iso" },
            { name: "TISAX", href: "/services#tisax" },
            { name: "NIS2", href: "/services#nis2" },
            { name: "DORA", href: "/services#dora" },
            { name: "GDPR", href: "/services#gdpr" },
            { name: "TPISR", href: "/services#tpisr-as9100d" },
            { name: "Other Frameworks", href: "/services#others" },
        ],
    },
    {
        title: "Outsourcing Security Roles",
        href: "/outsourcing-security-roles",
        items: [
            { name: "Cybersecurity Architect", href: "/services#architect" },
            { name: "Cybersecurity Auditor", href: "/services#auditor" },
            { name: "Cybersecurity Manager", href: "/services#manager" },
            { name: "Internal Auditor", href: "/services#internal-auditor" },
            { name: "Service Data Privacy Office", href: "/services#dpo" },
            { name: "Risk Management Specialist", href: "/services#risk" },
            { name: "Expert Security Manager", href: "/services#expert-manager" },
        ],
    },
];

export default function Navbar({ onOpenCalculator }: NavbarProps) {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/#services", label: "Services", hasMegamenu: true },
        { href: "/market-segments", label: "Segments" },
        { href: "/about", label: "About" },
        { href: "/#contact", label: "Contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
            >
                <div className="max-w-7xl mx-auto bg-foreground/5 backdrop-blur-md rounded-2xl px-6 py-2 border border-foreground/10 shadow-lg transition-all duration-300">

                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo-dark-blue.png"
                                alt="ITIS Secure - Information Security Consulting"
                                className="h-12 w-auto"
                            />
                        </Link>

                        <div className="hidden md:flex items-center gap-6">
                            {navLinks.map((link) => (
                                <div
                                    key={link.href}
                                    onMouseEnter={() => link.hasMegamenu && setIsMegamenuOpen(true)}
                                    onMouseLeave={() => link.hasMegamenu && setIsMegamenuOpen(false)}
                                    className="relative flex items-center h-full"
                                >
                                    <a
                                        href={link.href}
                                        className={`transition-colors text-sm font-bold flex items-center gap-1 py-4 ${pathname === link.href
                                            ? "text-primary"
                                            : "text-foreground/70 hover:text-primary"
                                            }`}
                                    >
                                        {link.label}
                                        {link.hasMegamenu && (
                                            <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isMegamenuOpen ? 'rotate-180 text-primary' : ''}`} />
                                        )}
                                    </a>

                                    {/* Caret Triangle */}
                                    <AnimatePresence>
                                        {link.hasMegamenu && isMegamenuOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute bottom-[-17px] left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-t border-l border-foreground/10 rotate-45 z-[60]"
                                            />
                                        )}
                                    </AnimatePresence>

                                    {/* Megamenu Dropdown */}
                                    {link.hasMegamenu && (
                                        <AnimatePresence>
                                            {isMegamenuOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 15 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 15 }}
                                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[1100px] bg-surface border border-foreground/10 rounded-2xl shadow-2xl p-12 z-50 overflow-hidden"
                                                >
                                                    {/* Decorative background pulse */}
                                                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                                                    <div className="grid grid-cols-3 gap-16 relative z-10">
                                                        {megamenuData.map((category, idx) => (
                                                            <div key={idx} className="space-y-6">
                                                                {category.href ? (
                                                                    <Link
                                                                        href={category.href}
                                                                        className="text-sm font-bold text-foreground/80 border-b border-foreground/5 pb-4 block hover:text-primary transition-colors"
                                                                    >
                                                                        {category.title}
                                                                    </Link>
                                                                ) : (
                                                                    <h3 className="text-sm font-bold text-foreground/80 border-b border-foreground/5 pb-4">
                                                                        {category.title}
                                                                    </h3>
                                                                )}
                                                                <ul className="space-y-3">
                                                                    {category.items.map((item, itemIdx) => (
                                                                        <li key={itemIdx}>
                                                                            <Link
                                                                                href={item.href}
                                                                                className={`text-sm font-medium transition-all duration-300 flex items-center group ${pathname === item.href
                                                                                    ? "text-primary"
                                                                                    : "text-foreground/60 hover:text-primary"
                                                                                    }`}
                                                                            >
                                                                                <span className="w-1 h-1 bg-primary/0 group-hover:bg-primary rounded-full mr-0 group-hover:mr-3 transition-all duration-300 shrink-0" />
                                                                                {item.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}
                            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-foreground/10">
                                <ThemeToggle />
                                <button
                                    onClick={onOpenCalculator}
                                    className="px-6 py-2 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(8,97,242,0.2)] transition-all text-sm"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button & Toggle */}
                        <div className="md:hidden flex items-center gap-3">
                            <ThemeToggle />
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 hover:bg-foreground/5 rounded-lg transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-4 right-4 z-40 md:hidden"
                    >
                        <div className="bg-foreground/10 backdrop-blur-xl rounded-2xl p-6 border border-foreground/10">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <div key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-foreground/70 hover:text-primary transition-colors text-lg font-bold py-2 flex items-center justify-between"
                                        >
                                            {link.label}
                                            {link.hasMegamenu && <ChevronDown className="w-5 h-5 opacity-40 shrink-0" />}
                                        </a>
                                        {link.hasMegamenu && (
                                            <div className="mt-2 ml-4 flex flex-col gap-4 border-l border-foreground/10 pl-4 py-2">
                                                {megamenuData.map((category, idx) => (
                                                    <div key={idx} className="space-y-2">
                                                        <h4 className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest opacity-60">
                                                            {category.title}
                                                        </h4>
                                                        <div className="flex flex-col gap-2">
                                                            {category.items.map((item, i) => (
                                                                <Link
                                                                    key={i}
                                                                    href={item.href}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                    className="text-sm text-foreground/50 hover:text-primary transition-colors"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-primary mt-2">View all services →</Link>
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => {
                                        onOpenCalculator?.();
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full px-6 py-3 bg-transparent border border-primary text-primary font-bold rounded-lg hover:bg-primary/5 hover:shadow-[0_0_20px_rgba(8,97,242,0.2)] transition-all mt-2"
                                >
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
