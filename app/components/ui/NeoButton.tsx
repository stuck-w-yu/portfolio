"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NeoButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export default function NeoButton({
    children,
    className,
    variant = "primary",
    ...props
}: NeoButtonProps) {
    const variants = {
        primary: "bg-accent-blue text-white border-accent-blue shadow-glow",
        secondary: "bg-transparent text-white border-core-white/20 hover:border-accent-blue hover:text-accent-blue",
        outline: "bg-transparent text-core-silver border-core-white/10 hover:border-accent-blue hover:text-accent-blue",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,71,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "px-8 py-3 font-display font-bold border rounded-full transition-all tracking-wider uppercase text-sm",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}
