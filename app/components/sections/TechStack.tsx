"use client";

import { motion } from "framer-motion";

const skills = [
    "NEXT.JS", "REACT", "TYPESCRIPT", "TAILWIND CSS", "FRAMER MOTION", "NODE.JS", "THREE.JS", "WEBGL"
];

export default function TechStack() {
    return (
        <section className="py-20 bg-core-black border-y border-core-white/10 overflow-hidden">
            <div className="flex">
                <motion.div
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-16"
                >
                    {[...skills, ...skills, ...skills].map((skill, i) => (
                        <div key={i} className="flex items-center gap-4">
                            <span className="text-4xl md:text-6xl font-display font-bold text-transparent text-stroke opacity-50 hover:opacity-100 hover:text-stroke-blue transition-all cursor-default">
                                {skill}
                            </span>
                            <span className="text-accent-blue text-2xl">✦</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
