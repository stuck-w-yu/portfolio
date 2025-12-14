'use client'

import React from 'react';
// 1. FIX: Import 'Variants' dari framer-motion untuk memperbaiki error TypeScript
import { motion, Variants } from 'framer-motion';
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

// --- DATA DUMMY PROJECTS ---
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Next.js", "Tailwind", "Prisma"],
    description: "A comprehensive dashboard for managing products, orders, and analytics with real-time data visualization.",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Crypto Portfolio Tracker",
    category: "Fintech",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["React", "Redux", "CoinGecko API"],
    description: "Track your cryptocurrency assets in real-time with interactive charts and profit/loss calculation.",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    category: "AI Tool",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["OpenAI API", "Node.js", "MongoDB"],
    description: "Generate unique images from text prompts using DALL-E integration with a custom gallery feed.",
    demoLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "Travel Booking App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tech: ["Flutter", "Firebase", "Google Maps"],
    description: "Seamless flight and hotel booking experience with interactive maps and user reviews.",
    demoLink: "#",
    repoLink: "#"
  }
];

// --- 1. DEFINISI VARIAN ANIMASI (Animation Variants) ---

// 2. FIX: Tambahkan ': Variants' di sini
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

// 3. FIX: Tambahkan ': Variants' di sini juga
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 50, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { 
      type: "spring", // Sekarang TypeScript tahu ini valid karena sudah di-set sebagai Variants
      stiffness: 50,
      damping: 20,
      duration: 0.6
    }
  }
};


// --- COMPONENT CARD PROYEK ---
const ProjectCard = ({ project }: { project: typeof projectsData[0] }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative rounded-xl bg-slate-800/50 border border-slate-700/50 overflow-hidden hover:border-teal-500/50 transition-colors duration-300 flex flex-col h-full"
    >
      {/* Background Glow Effect on Hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500 group-hover:duration-200 pointer-events-none"></div>

      <div className="relative h-full flex flex-col z-10">
        
        {/* IMAGE SECTION */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          
          {/* Overlay & Buttons */}
          <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
            <a 
              href={project.demoLink} 
              className="p-3 bg-teal-500 rounded-full text-white hover:bg-teal-400 hover:scale-110 transition-all shadow-[0_0_15px_rgba(20,184,166,0.5)]"
              title="View Live Demo"
            >
              <EyeIcon className="w-6 h-6" />
            </a>
            <a 
              href={project.repoLink} 
              className="p-3 bg-slate-700 rounded-full text-white hover:bg-white hover:text-slate-900 hover:scale-110 transition-all"
              title="View Source Code"
            >
              <CodeBracketIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-6 flex flex-col flex-grow bg-[#15202b]">
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            {project.category}
          </span>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
            {project.description}
          </p>
          <div className="mt-4 pt-4 border-t border-slate-700/50 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold text-slate-300 bg-slate-800 border border-slate-700 rounded-md group-hover:border-teal-500/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- MAIN COMPONENT ---
export default function Projects() {
  return (
    <section className="bg-[#121c24] min-h-screen py-24 relative overflow-hidden font-sans">
      
      {/* Decorative Background Elements (Fade In Background) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER (Fade In Left) --- */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Projects</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 100, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-teal-500 rounded-full"
          ></motion.div>

          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.5 }}
             className="mt-4 text-slate-400 max-w-2xl text-lg"
          >
            Here are some of the projects I've worked on. Each project represents a unique challenge and a solution crafted with modern technologies.
          </motion.p>
        </div>

        {/* --- GRID PROJECTS (Staggered Fade In) --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* --- VIEW ALL BUTTON (Fade In Up) --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-transparent border border-teal-500 text-teal-400 font-bold rounded-full hover:bg-teal-500/10 transition-colors uppercase tracking-widest text-sm shadow-[0_0_10px_rgba(20,184,166,0.2)] hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
          >
            View Github
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}