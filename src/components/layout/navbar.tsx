"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { ServicesMenu } from "./ServicesMenu";
import { servicesMenuColumns } from "./ServicesMenuData";

/* ── Industries dropdown data ───────────────────────────────── */
const industriesLinks = [
    { label: "Automotive", href: "/industries/automotive" },
    { label: "Defence", href: "/industries/defence" },
];

/* ── Small hover dropdown (for Industries, etc.) ────────────── */
function NavDropdown({
    label,
    links,
}: {
    label: string;
    links: { label: string; href: string }[];
}) {
    const [open, setOpen] = useState(false);
    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const enter = () => {
        if (timeout.current) clearTimeout(timeout.current);
        setOpen(true);
    };
    const leave = () => {
        timeout.current = setTimeout(() => setOpen(false), 150);
    };

    return (
        <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
            <button
                className="flex items-center gap-1 hover:text-primary-navy transition-colors"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
            >
                {label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            <div
                className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${open
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-1 pointer-events-none"
                    }`}
            >
                <div className="bg-white rounded-xl shadow-lg border border-neutral-100 py-2 min-w-[180px]">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-5 py-2.5 text-sm font-semibold text-neutral-600 hover:text-primary-navy hover:bg-neutral-50 transition-colors"
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ── Navbar ──────────────────────────────────────────────────── */
export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
    const [mobileIndustriesExpanded, setMobileIndustriesExpanded] = useState(false);
    const servicesTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    /* Lock body scroll when mobile menu is open */
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const servicesEnter = () => {
        if (servicesTimeout.current) clearTimeout(servicesTimeout.current);
        setServicesOpen(true);
    };
    const servicesLeave = () => {
        servicesTimeout.current = setTimeout(() => setServicesOpen(false), 200);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
            <div className="relative w-full px-8 h-20 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/itis-secure-logo.svg"
                        alt="ITIS-Secure"
                        width={160}
                        height={72}
                        className="h-12 w-auto"
                        priority
                    />
                </Link>

                {/* ── Desktop Nav ─────────────────────────── */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-neutral-500">
                    {/* Services — Mega Menu Trigger */}
                    <div
                        className="relative"
                        onMouseEnter={servicesEnter}
                        onMouseLeave={servicesLeave}
                    >
                        <button
                            onClick={() => setServicesOpen((v) => !v)}
                            aria-expanded={servicesOpen}
                            aria-haspopup="true"
                            className="flex items-center gap-1 hover:text-primary-navy transition-colors py-2"
                        >
                            Services
                            <ChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                                aria-hidden="true"
                            />
                        </button>
                    </div>

                    {/* Industries — Plain Link */}
                    <Link href="/industries" className="hover:text-primary-navy transition-colors">Industries</Link>

                    <Link href="/about" className="hover:text-primary-navy transition-colors">About</Link>
                </div>

                {/* CTA + Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link href="/contact" className="hidden sm:block">
                        <Button variant="primary" size="sm">Book Assessment</Button>
                    </Link>
                    <button
                        className="lg:hidden p-2 text-primary-navy"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* ── Services Mega Menu (desktop) ─────────── */}
            <div
                onMouseEnter={servicesEnter}
                onMouseLeave={servicesLeave}
            >
                <ServicesMenu
                    isOpen={servicesOpen}
                    onClose={() => setServicesOpen(false)}
                />
            </div>

            {/* ── Mobile Menu ──────────────────────────── */}
            {mobileOpen && (
                <div className="lg:hidden bg-white border-t border-neutral-100 max-h-[calc(100vh-5rem)] overflow-y-auto">
                    {/* Services — Expandable */}
                    <div className="border-b border-neutral-100">
                        <button
                            onClick={() => setMobileServicesExpanded((v) => !v)}
                            aria-expanded={mobileServicesExpanded}
                            className="flex items-center justify-between w-full px-6 py-5 text-base font-semibold text-neutral-800"
                        >
                            Services
                            <ArrowRight
                                size={18}
                                className={`text-neutral-800 transition-transform duration-200 ${mobileServicesExpanded ? "rotate-90" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {mobileServicesExpanded && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-5">
                                        {servicesMenuColumns.map((column) => (
                                            <div key={column.heading} className="mb-4">
                                                <p className="text-[10px] font-black tracking-[0.1em] uppercase text-neutral-400 mb-2 mt-3">
                                                    {column.heading}
                                                </p>
                                                <ul className="space-y-1">
                                                    {column.items.map((item) => (
                                                        <li key={item.label}>
                                                            <Link
                                                                href={item.href}
                                                                onClick={() => setMobileOpen(false)}
                                                                className="block py-2 pl-3 text-sm font-medium text-neutral-600 hover:text-primary-navy transition-colors"
                                                            >
                                                                {item.label}
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
                    </div>


                    {/* Industries */}
                    <Link
                        href="/industries"
                        className="flex items-center px-6 py-5 text-base font-semibold text-neutral-800 border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        Industries
                    </Link>

                    {/* About Us */}
                    <Link
                        href="/about"
                        className="flex items-center px-6 py-5 text-base font-semibold text-neutral-800 border-b border-neutral-100 hover:bg-neutral-50 transition-colors"
                        onClick={() => setMobileOpen(false)}
                    >
                        About Us
                    </Link>
                </div>
            )}
        </nav>
    );
}
