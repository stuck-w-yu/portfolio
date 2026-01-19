"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: "01",
        title: "E-Commerce",
        role: "Frontend",
        image: "bg-gradient-to-br from-gray-900 to-black",
    },
    {
        id: "02",
        title: "Dashboard",
        role: "Full Stack",
        image: "bg-gradient-to-bl from-gray-800 to-black",
    },
    {
        id: "03",
        title: "Portfolio",
        role: "Design",
        image: "bg-gradient-to-tr from-gray-900 to-black",
    }
];

export default function Projects() {
    return (
        <section className="py-32 bg-core-black">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-bold text-core-white mb-24 max-w-4xl leading-none"
                >
                    SELECTED <span className="text-accent-blue">WORKS</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className={`group relative ${i % 2 === 1 ? 'md:mt-32' : ''}`}
                        >
                            <div className="relative aspect-[4/3] overflow-hidden border border-core-white/10 group-hover:border-accent-blue transition-colors duration-500">
                                <div className={`absolute inset-0 ${project.image} group-hover:scale-105 transition-transform duration-700 opacity-50 group-hover:opacity-100`}></div>

                                {/* Overlay Vignette */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-0 left-0 p-8 w-full">
                                    <span className="text-accent-blue font-mono text-sm mb-2 block">0{i + 1}</span>
                                    <h3 className="text-3xl font-display font-bold text-white mb-1 group-hover:text-accent-blue transition-colors">{project.title}</h3>
                                    <p className="text-core-silver text-sm">{project.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
