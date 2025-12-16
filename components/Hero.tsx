'use client';

import React, { useState } from 'react';
import TextType from './TextType';
// Jika HeartbeatChart tidak dipakai, komentar atau hapus
// import HeartbeatChart from './HeartbeatChart';

// --- TIPE DATA (INTERFACES) ---
interface TechData {
  name: string;
  sub: string;
}

// --- COMPONENT KECIL: TECH ITEM DENGAN GLITCH EFFECT ---
const TechItem = ({ item }: { item: TechData }) => (
  <div className="relative text-center group cursor-default p-1 overflow-hidden">
    {/* Background glow on hover */}
    <div className="absolute inset-0 bg-teal-500/30 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>

    {/* Main text container */}
    <h4 className="text-xl md:text-2xl font-bold text-slate-200 group-hover:text-transparent transition-colors duration-300 relative z-10">
      {item.name}

      {/* Glitch Layer 1: Merah / Atas */}
      <span className="absolute top-0 left-0 text-red-500/70 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-1">
        {item.name}
      </span>

      {/* Glitch Layer 2: Cyan / Bawah */}
      <span className="absolute top-0 left-0 text-cyan-400/70 opacity-0 group-hover:opacity-100 group-hover:animate-glitch-2">
        {item.name}
      </span>
    </h4>

    {/* Subtext — tetap stabil */}
    <span className="text-[0.65rem] md:text-xs text-slate-500 tracking-widest uppercase relative z-10 block mt-1 transition-colors duration-300 group-hover:text-slate-300">
      {item.sub}
    </span>

    {/* Custom keyframes for glitch (scoped via <style jsx>) */}
    <style jsx>{`
      @keyframes glitch-1 {
        0% { transform: translate(0); }
        20% { transform: translate(-3px, 2px); }
        40% { transform: translate(2px, -1px); }
        60% { transform: translate(-1px, 3px); }
        80% { transform: translate(3px, -2px); }
        100% { transform: translate(0); }
      }
      @keyframes glitch-2 {
        0% { transform: translate(0); }
        20% { transform: translate(2px, -2px); }
        40% { transform: translate(-3px, 1px); }
        60% { transform: translate(1px, -3px); }
        80% { transform: translate(-2px, 2px); }
        100% { transform: translate(0); }
      }
      .animate-glitch-1 {
        animation: glitch-1 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      }
      .animate-glitch-2 {
        animation: glitch-2 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
        clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
      }
    `}</style>
  </div>
);

// --- MAIN COMPONENT: HERO ---
const Hero = () => {
  const content = {
    Heading1: ['Wahyu Firmansyah'],
    Heading2: ['Frontend Developer'],
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
    { name: 'C++', sub: 'Beginner' },
  ];

  const [isH1Done, setIsH1Done] = useState(false);
  const [isH2Done, setIsH2Done] = useState(false);

  return (
    <section className="bg-[#121c24] text-slate-200 min-h-screen py-8 mx-auto relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col items-center justify-center">
        {/* Title */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-[0.3em] text-white uppercase mb-4">
            <TextType
              text={content.Heading1}
              loop={false}
              className="text-4xl md:text-6xl font-bold text-amber-50"
              onSentenceComplete={(sentence: any, index: number) => {
                if (index === content.Heading1.length - 1) setIsH1Done(true);
              }}
            />
          </h1>

          <h2 className="text-2xl md:text-7xl font-bold tracking-[0.3em] text-slate-400 uppercase mb-4">
            <TextType
              text={content.Heading2}
              loop={false}
              className="text-2xl md:text-4xl font-light text-slate-400"
              onSentenceComplete={(sentence: any, index: number) => {
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
              <TechItem key={`tech1-${index}`} item={item} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 md:gap-x-16">
            {techStackRow2.map((item, index) => (
              <TechItem key={`tech2-${index}`} item={item} />
            ))}
          </div>
        </div>

        {/* Optional: Uncomment if you have HeartbeatChart */}
        {/* <HeartbeatChart /> */}
      </div>
    </section>
  );
};

export default Hero;