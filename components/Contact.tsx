'use client'

import React from 'react';
// 1. FIX: Import 'Variants' agar TypeScript mengenali tipe animasi
import { motion, Variants } from 'framer-motion';
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon, 
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';

// --- ANIMATION VARIANTS ---

// 2. FIX: Tambahkan ': Variants' disini
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

// 3. FIX: Tambahkan ': Variants' disini juga
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Error hilang karena sekarang dikenali sebagai tipe Variants
      stiffness: 100,
      damping: 10
    }
  }
};

// --- SUB-COMPONENT: SOCIAL BUTTON ---
const SocialButton = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
  <motion.a
    href={href}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-teal-500 hover:bg-teal-500/20 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300"
  >
    {icon}
  </motion.a>
);

// --- SUB-COMPONENT: INPUT FIELD ---
const InputField = ({ label, type, placeholder, textarea = false }: { label: string, type?: string, placeholder: string, textarea?: boolean }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-semibold text-slate-400 tracking-wider uppercase ml-1">
      {label}
    </label>
    {textarea ? (
      <textarea 
        rows={4}
        placeholder={placeholder}
        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300 resize-none"
      />
    ) : (
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/50 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300"
      />
    )}
  </div>
);


// --- MAIN COMPONENT ---
export default function Contact() {
  return (
    <section className="bg-[#121c24] min-h-screen py-8 relative overflow-hidden font-sans flex items-center">
      
      {/* Background Glow Elements */}
      {/* Note: Tailwind warning about canonical classes (w-[500px]) is fine, it's just a suggestion */}
      <div className="absolute pl-8 top-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="mb-16 text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Touch</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-teal-500 rounded-full mx-auto md:mx-0"
          ></motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          
          {/* --- LEFT SIDE: INFO & TEXT --- */}
          <div className="space-y-10">
            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </motion.p>

            {/* Contact Details Cards */}
            <div className="space-y-6">
              
              {/* Email */}
              <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 border border-slate-700 group-hover:border-transparent">
                  <EnvelopeIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</h4>
                  <p className="text-xl text-slate-200 font-medium group-hover:text-teal-400 transition-colors">xwoner38@gmail.com</p>
                </div>
              </motion.div>

              {/* Phone */}
              {/* <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 border border-slate-700 group-hover:border-transparent">
                  <PhoneIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</h4>
                  <p className="text-xl text-slate-200 font-medium group-hover:text-teal-400 transition-colors">+62 812 3456 7890</p>
                </div>
              </motion.div> */}

              {/* Location */}
              <motion.div variants={itemVariants} className="flex items-center space-x-5 group">
                <div className="w-14 h-14 rounded-full bg-slate-800/80 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] transition-all duration-300 border border-slate-700 group-hover:border-transparent">
                  <MapPinIcon className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">Location</h4>
                  <p className="text-xl text-slate-200 font-medium group-hover:text-teal-400 transition-colors">Batam, Indonesia</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8 border-t border-slate-800">
              <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {/* SVG Github Placeholder */}
                <SocialButton href="https://github.com/stuck-w-yu" icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                } />
                {/* SVG LinkedIn Placeholder */}
                <SocialButton href="#" icon={
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                } />
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.div 
            variants={itemVariants}
            className="bg-slate-800/30 p-8 md:p-10 rounded-3xl border border-slate-700/50 backdrop-blur-md relative group"
          >
            {/* Glow Behind Form */}
            <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-3xl -z-10 group-hover:bg-teal-500/10 transition-colors duration-500"></div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Name" type="text" placeholder="John Doe" />
                <InputField label="Email" type="email" placeholder="john@example.com" />
              </div>
              
              <InputField label="Subject" type="text" placeholder="Project Discussion" />
              
              <InputField label="Message" placeholder="Tell me about your project..." textarea />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-300 flex items-center justify-center space-x-2 mt-4"
              >
                <span>Send Message</span>
                <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
              </motion.button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}