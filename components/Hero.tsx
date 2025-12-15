'use client'

// 1. FIX: Tambahkan useState di sini
import React, { useState } from 'react';
import TextType from './TextType';

// --- TIPE DATA (INTERFACES) ---

interface TechData {
  name: string;
  sub: string;
}

interface StatData {
  label: string;
  cx: number;
  cy: number;
  isMain?: boolean;
}

// --- COMPONENT BARU: HEARTBEAT CHART ---
interface HeartbeatChartProps {
  stats: StatData[];
  className?: string;
  color?: string;
}

const HeartbeatChart = ({ stats, className = "", color = "rgb(94 234 212)" }: HeartbeatChartProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 800 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M0 180 H 180 L 220 80 L 260 180 H 340 L 380 220 L 400 50 L 440 200 L 480 180 H 580 L 620 120 L 660 180 H 800" 
          stroke={color} 
          strokeWidth="2"
          strokeOpacity="0.6"
          filter="url(#glow)" 
        />
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <circle 
              cx={stat.cx} 
              cy={stat.cy} 
              r={stat.isMain ? 8 : 6} 
              fill="white" 
              filter="url(#glow)" 
            />
            <text 
              x={stat.cx} 
              y={stat.cy - 20} 
              textAnchor="middle" 
              fill="white" 
              fontSize={stat.isMain ? 14 : 12} 
              className={`${stat.isMain ? 'font-bold' : 'font-light'} tracking-wider`}
            >
              {stat.label}
            </text>
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
};

// --- COMPONENT KECIL: TECH ITEM ---
const TechItem = ({ item }: { item: TechData }) => (
  <div className="relative text-center group cursor-default p-1">
    <div className="absolute inset-0 bg-teal-500/30 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>
    <h4 className="text-xl md:text-2xl font-bold text-slate-200 group-hover:text-teal-50 transition-colors duration-300 relative z-10">
      {item.name}
    </h4>
    <span className="text-[0.65rem] md:text-xs text-slate-500 tracking-widest uppercase relative z-10 block mt-1">
      {item.sub}
    </span>
  </div>
);

// --- MAIN COMPONENT: HERO ---
const Hero = () => {
  // 2. FIX: Definisikan variabel content
  const content = {
    Heading1: ["Wahyu Firmansyah"],
    Heading2: ["Frontend Developer"] // Array string sesuai kebutuhan TextType
  };

  const techStack: TechData[] = [
    { name: 'HTML', sub: 'Advanced' },
    { name: 'CSS', sub: 'Advanced' },
    { name: 'JS', sub: 'Advanced' },
    { name: 'LARAVEL', sub: 'Intermediate' },
    { name: 'NODE.JS', sub: 'Intermediate' },
    { name: 'PYTHON', sub: 'Intermediate' },
    { name: 'SQL', sub: 'Intermediate' },
  ];

  const techStackRow2: TechData[] = [
    { name: 'NEXT.JS', sub: 'Intermediate' },
    { name: 'GOLANG', sub: 'Beginner' },
    { name: 'NO SQL', sub: 'Beginner' },
    { name: 'C++', sub: 'Beginner'},
  ];

  const statistics: StatData[] = [
    { label: '1 YEAR EXPERIENCE', cx: 220, cy: 80 },
    { label: '1 PROJECT', cx: 400, cy: 50, isMain: true },
    { label: '5 LANGUAGE', cx: 620, cy: 120 },
  ];

  // 3. State sekarang sudah dikenali
  const [isH1Done, setIsH1Done] = useState(false);
  const [isH2Done, setIsH2Done] = useState(false);

  return (
    <section className="bg-[#121c24] text-slate-200 min-h-screen py-8 mx-auto relative overflow-hidden font-sans">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none pl-8"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center">

        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase mb-4 drop-shadow-[0_0_10px_rgba(,255,255,0.3)]">
              {/* TextType component usage */}
              <TextType 
                  text={content.Heading1} 
                  loop={false} 
                  className="text-4xl md:text-6xl font-bold text-amber-50"
                  onSentenceComplete={(sentence: any, index: number) => {
                    // Cek jika kalimat terakhir selesai
                    if (index === content.Heading1.length - 1) setIsH1Done(true);
                }}
              />
          </h1>
          
          {/* Contoh penggunaan state: Efek fade in pada H2 jika H1 selesai */}
          <h2 className={`text-2xl md:text-4xl font-light tracking-[0.2em] text-slate-400 uppercase transition-opacity duration-1000 ${isH1Done ? 'opacity-100' : 'opacity-0'}`}>
            <TextType 
                  text={content.Heading2} 
                  loop={false} 
                  // FIX: Gunakan style yang sesuai subtitle (Light & Slate), bukan Bold & Amber
                  className="text-2xl md:text-4xl font-light text-slate-400"
                  onSentenceComplete={(sentence: any, index: number) => {
                    // FIX: Cek length Heading2 dan set isH2Done
                    if (index === content.Heading2.length - 1) setIsH2Done(true);
                  }}
              />
          </h2>
        </div>

        {/* About Me */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto mb-24 gap-12 md:gap-0">
          <div className="md:w-1/2 text-center md:text-left order-2 md:order-1">
            <h3 className="text-3xl font-bold mb-6 text-slate-100">About Me</h3>
            <p className="text-slate-400 leading-relaxed text-lg pr-0 md:pr-10">
              Hi there! I'm an Informatics Engineering student at Universitas Putera Batam. I specialize in Front-End Development and love crafting beautiful, responsive websites. I'm always eager to learn new technologies and turn creative ideas into reality through code.
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col items-center justify-center order-1 md:order-2 relative">
            <div className="relative w-56 h-56 mb-8 group">
               <div className="absolute inset-0 bg-gradient-to-b from-slate-600 to-teal-900 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
               <img 
                 src="/profile.jpg" 
                 alt="Profile" 
                 className="rounded-full w-full h-full object-cover relative z-10 border-[3px] border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-500" 
               />
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="w-full max-w-6xl mx-auto mb-28 flex flex-col items-center gap-y-12">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-16">
            {techStack.map((item, index) => (
              <TechItem key={index} item={item} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-16">
            {techStackRow2.map((item, index) => (
               <TechItem key={index} item={item} />
            ))}
          </div>
        </div>

        {/* HEARTBEAT CHART */}
        <HeartbeatChart 
          stats={statistics} 
          className="w-full max-w-4xl h-48 md:h-64 mb-10"
        />

      </div>
    </section>
  );
};

export default Hero;