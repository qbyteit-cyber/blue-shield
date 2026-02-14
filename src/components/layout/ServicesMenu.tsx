"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { servicesMenuColumns } from "./ServicesMenuData";

interface ServicesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const panelVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" as const } },
};

const columnVariants = {
    hidden: { opacity: 0, y: 6 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.06, duration: 0.2, ease: "easeOut" as const },
    }),
};

export function ServicesMenu({ isOpen, onClose }: ServicesMenuProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop — click outside to close */}
                    <div
                        className="fixed inset-0 z-40"
                        onClick={onClose}
                        aria-hidden="true"
                    />

                    {/* Mega menu panel */}
                    <motion.div
                        variants={panelVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute left-0 right-0 z-50 bg-white border-b border-b-[#E2E8F0] rounded-b-xl"
                        style={{
                            borderTop: "3px solid #FF6B35",
                            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.10)",
                            borderBottomLeftRadius: 12,
                            borderBottomRightRadius: 12,
                        }}
                        role="dialog"
                        aria-label="Services menu"
                    >
                        <div className="max-w-[1280px] mx-auto px-12 pt-10 pb-6">

                            {/* 3-column grid */}
                            <div className="grid grid-cols-[1fr_1.4fr_1.4fr]">
                                {servicesMenuColumns.map((column, colIndex) => (
                                    <motion.div
                                        key={column.heading}
                                        custom={colIndex}
                                        variants={columnVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className={`${colIndex > 0
                                            ? "pl-8 border-l border-[#E2E8F0]"
                                            : "pr-8"
                                            }`}
                                    >
                                        {/* Column heading */}
                                        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#94A3B8] mb-4 pb-3 border-b border-[#E2E8F0]">
                                            {column.heading}
                                        </p>

                                        {/* Items */}
                                        <ul className="space-y-0.5" role="list">
                                            {column.items.map((item) => {
                                                const Icon = item.icon;
                                                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

                                                return (
                                                    <li key={item.label}>
                                                        <Link
                                                            href={item.href}
                                                            onClick={onClose}
                                                            className={`
                                group flex items-center gap-2.5 px-3 py-2 rounded-md
                                text-sm font-medium transition-all duration-150
                                ${isActive
                                                                    ? "bg-[#EFF6FF] text-[#0A2463] font-semibold"
                                                                    : "text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0A2463]"
                                                                }
                              `}
                                                        >
                                                            <Icon
                                                                size={16}
                                                                className={`
                                  flex-shrink-0 transition-colors duration-150
                                  ${isActive
                                                                        ? "text-[#3E92CC]"
                                                                        : "text-[#94A3B8] group-hover:text-[#FF6B35]"
                                                                    }
                                `}
                                                                aria-hidden="true"
                                                            />
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Footer bar */}
                            <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#E2E8F0]">
                                <p className="text-[13px] text-[#64748B]">
                                    Not sure where to start?{" "}
                                    <Link
                                        href="/contact"
                                        onClick={onClose}
                                        className="text-[#FF6B35] font-semibold hover:underline"
                                    >
                                        Book a free consultation →
                                    </Link>
                                </p>
                                <Link href="/contact" onClick={onClose}>
                                    <Button variant="primary" size="sm">
                                        Book Assessment
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
