"use client";

import { motion } from "framer-motion";
import NeoButton from "../ui/NeoButton";

export default function Contact() {
    return (
        <section className="py-32 bg-core-black border-t border-core-white/10">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
                        READY TO <span className="text-accent-blue">COLLABORATE?</span>
                    </h2>
                    <p className="text-core-silver text-lg mb-12 font-light">
                        Let's build the future provided by web technologies.
                    </p>

                    <form className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" className="w-full bg-core-white/5 border border-core-white/10 p-4 text-white focus:border-accent-blue focus:outline-none transition-colors" placeholder="NAME" />
                            <input type="email" className="w-full bg-core-white/5 border border-core-white/10 p-4 text-white focus:border-accent-blue focus:outline-none transition-colors" placeholder="EMAIL" />
                        </div>
                        <textarea rows={6} className="w-full bg-core-white/5 border border-core-white/10 p-4 text-white focus:border-accent-blue focus:outline-none transition-colors" placeholder="MESSAGE"></textarea>

                        <div className="text-center pt-8">
                            <NeoButton className="w-full md:w-auto px-12" variant="primary">INITIATE SEQUENCE</NeoButton>
                        </div>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
