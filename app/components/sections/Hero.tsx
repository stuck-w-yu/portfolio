"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-core-black">
            {/* Background Grid/Glow */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,71,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,71,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-4"
                    >
                        <h2 className="text-accent-blue font-bold tracking-[0.5em] text-sm md:text-lg uppercase">
                            Portfolio 2026
                        </h2>
                    </motion.div>

                    {/* Main Title - Asymmetric Glitch Effect */}
                    <div className="relative">
                        <motion.h1
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-6xl md:text-9xl font-display font-bold text-core-white leading-none tracking-tighter mix-blend-difference z-20 relative"
                        >
                            WAHYU FIRMANSYAH
                            <br />
                            <span className="text-stroke-blue md:ml-24 block">FIRMANSYAH</span>
                        </motion.h1>

                        {/* Decorative Floating Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-10 -left-10 w-20 h-20 border border-accent-blue/30 rounded-full hidden md:block"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-10 -right-10 w-32 h-32 border border-core-white/10 rounded-full border-dashed hidden md:block"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex flex-col items-center"
                    >
                        <p className="text-core-silver text-xl md:text-2xl font-light tracking-wide max-w-lg">
                            Frontend Developer crafting immersive digital experiences.
                        </p>

                        <div className="mt-8 flex gap-2">
                            <span className="w-1 h-1 bg-accent-blue rounded-full animate-pulse"></span>
                            <span className="w-1 h-1 bg-accent-blue rounded-full animate-pulse delay-75"></span>
                            <span className="w-1 h-1 bg-accent-blue rounded-full animate-pulse delay-150"></span>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2">
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-accent-blue to-transparent"></div>
                <span className="text-[10px] text-accent-blue tracking-widest writing-vertical-rl">SCROLL</span>
            </div>
        </section>
    );
}
