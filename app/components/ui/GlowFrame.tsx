"use client";

export default function GlowFrame() {
    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-blue shadow-[0_0_20px_rgba(0,71,255,0.8)]" />

            {/* Bottom Border */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-blue shadow-[0_0_20px_rgba(0,71,255,0.8)]" />

            {/* Left Border */}
            <div className="absolute top-0 left-0 h-full w-[2px] bg-accent-blue shadow-[0_0_20px_rgba(0,71,255,0.8)]" />

            {/* Right Border */}
            <div className="absolute top-0 right-0 h-full w-[2px] bg-accent-blue shadow-[0_0_20px_rgba(0,71,255,0.8)]" />

            {/* Vignette Glow */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,71,255,0.15)]" />
        </div>
    );
}
