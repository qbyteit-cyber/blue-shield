"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary-navy p-1.5 rounded-lg">
                        <Shield className="text-white" size={24} />
                    </div>
                    <span className="text-xl font-black text-primary-navy tracking-tighter">
                        ITIS-SECURE
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-bold text-neutral-500">
                    <Link href="/services/tisax" className="hover:text-primary-navy transition-colors">TISAX®</Link>
                    <Link href="/services/cmmc" className="hover:text-primary-navy transition-colors">CMMC</Link>
                    <Link href="/services/iso-27001" className="hover:text-primary-navy transition-colors">ISO 27001</Link>
                    <Link href="/services/isms-implementation" className="hover:text-primary-navy transition-colors">ISMS</Link>
                    <Link href="/industries/automotive" className="hover:text-primary-navy transition-colors">Automotive</Link>
                    <Link href="/industries/defence" className="hover:text-primary-navy transition-colors">Defence</Link>
                    <Link href="/about" className="hover:text-primary-navy transition-colors">About</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/contact">
                        <Button variant="primary" size="sm">Book Assessment</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
