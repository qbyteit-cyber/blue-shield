"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

interface TerminalPulseProps {
    text: string;
    className?: string;
    delay?: number;
    typingSpeed?: number;
}

export function TerminalPulse({ text, className, delay = 0, typingSpeed = 50 }: TerminalPulseProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    const type = useCallback(async () => {
        for (let i = 0; i <= text.length; i++) {
            setDisplayedText(text.slice(0, i));
            // Randomized typing speed for authenticity
            const randomSpeed = typingSpeed + (Math.random() * 50 - 25);
            await new Promise((resolve) => setTimeout(resolve, randomSpeed));
        }
        setIsComplete(true);
    }, [text, typingSpeed]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            type();
        }, delay);
        return () => clearTimeout(timeout);
    }, [type, delay]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="inline-block w-[0.6em] h-[1.1em] bg-primary ml-1 translate-y-[0.2em]"
            />
        </span>
    );
}
