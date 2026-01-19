"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="py-32 bg-core-black border-b border-core-white/10">
            <div className="container mx-auto px-4">
                {/* Simple text based about for high impact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-accent-blue font-bold tracking-widest text-sm mb-8 uppercase">Introduction</h2>
                    <p className="text-2xl md:text-4xl text-core-white leading-relaxed font-light">
                        I am <strong className="text-white font-bold">Wahyu Firmansyah</strong>. A <span className="text-stroke-blue">Frontend Developer</span> obsessed with performance and interaction. I don't just build websites; I engineer digital environments.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
