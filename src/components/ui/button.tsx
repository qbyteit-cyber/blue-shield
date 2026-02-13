"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-accent-coral text-white hover:bg-accent-coral/90 shadow-lg hover:-translate-y-0.5",
            secondary: "bg-primary-navy text-white hover:bg-primary-navy/90 shadow-lg hover:-translate-y-0.5",
            outline: "bg-transparent border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white",
            ghost: "bg-transparent text-neutral-700 hover:bg-neutral-50",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-7 py-3.5 text-base font-semibold",
            lg: "px-8 py-4 text-lg font-bold",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-navy disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
