"use client";

import { motion, useDragControls } from "framer-motion";
import { X, Minus, Square } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

interface WindowProps {
    id: string;
    title: string;
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    initialPosition?: { x: number; y: number };
    zIndex: number;
    onFocus: () => void;
    width?: string;
    height?: string;
}

export default function Window({
    id,
    title,
    isOpen,
    onClose,
    children,
    initialPosition = { x: 100, y: 100 },
    zIndex,
    onFocus,
    width = "500px",
    height = "auto",
}: WindowProps) {
    const dragControls = useDragControls();
    const constraintsRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (!isOpen) return null;

    const mobileStyle = {
        position: "fixed" as const,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxHeight: "80vh",
        margin: 0,
    };

    const desktopStyle = {
        position: "absolute" as const,
        top: initialPosition.y,
        left: initialPosition.x,
        width: width,
        height: height,
        maxHeight: "80vh",
    };

    return (
        <motion.div
            drag={!isMobile}
            dragControls={dragControls}
            dragMomentum={false}
            dragListener={false} // Only drag from header
            whileDrag={{ scale: 1.02 }}
            onMouseDown={onFocus}
            style={{
                zIndex,
                ...(isMobile ? {} : desktopStyle),
            }}
            className={`
        fixed md:absolute flex flex-col
        border-2 border-[var(--window-border)]
        bg-[var(--window-bg)] shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
        rounded-lg overflow-hidden
        ${isMobile ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-h-[80vh]" : ""}
      `}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
        >
            {/* Window Header */}
            <div
                className="h-10 bg-[var(--retro-green)] border-b-2 border-[var(--window-border)] flex items-center justify-between px-2 cursor-grab active:cursor-grabbing select-none"
                onPointerDown={(e) => {
                    if (!isMobile) dragControls.start(e);
                    onFocus();
                }}
            >
                <span className="text-white font-bold tracking-wider truncate px-2 font-[family-name:var(--font-vt323)] text-lg">
                    {title}
                </span>
                <div className="flex gap-2">
                    <button className="p-1 hover:bg-white/20 rounded">
                        <Minus size={14} className="text-white" />
                    </button>
                    <button className="p-1 hover:bg-white/20 rounded">
                        <Square size={12} className="text-white" />
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="p-1 hover:bg-red-400 rounded transition-colors"
                    >
                        <X size={16} className="text-white" />
                    </button>
                </div>
            </div>

            {/* Window Content */}
            <div className="flex-1 overflow-auto p-6 font-[family-name:var(--font-vt323)] text-lg leading-relaxed">
                {children}
            </div>
        </motion.div>
    );
}
