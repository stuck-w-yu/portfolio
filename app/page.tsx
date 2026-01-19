"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DesktopIcon from "./components/DesktopIcon";
import Window from "./components/Window";
import Taskbar from "./components/Taskbar";
import { User, Mail, FileText, Code2, Globe, Palette, Terminal, Database, Sparkles, FolderOpen } from "lucide-react";
import { getProjects } from "./actions";

export default function Home() {
  // Window State Management
  const [windows, setWindows] = useState({
    profile: { isOpen: true, zIndex: 1, position: { x: 350, y: 100 }, title: "C:\\User\\Profile" },
    works: { isOpen: false, zIndex: 0, position: { x: 450, y: 350 }, title: "C:\\User\\Works" },
    contact: { isOpen: false, zIndex: 0, position: { x: 550, y: 200 }, title: "C:\\User\\Contact" },
    resume: { isOpen: false, zIndex: 0, position: { x: 600, y: 250 }, title: "C:\\User\\Resume" },
  });

  interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    techStack: string;
    imageUrl: string | null;
  }

  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  const bringToFront = (key: string) => {
    setWindows((prev) => {
      const highestZ = Math.max(...Object.values(prev).map((w) => w.zIndex));
      return {
        ...prev,
        [key]: { ...prev[key as keyof typeof prev], zIndex: highestZ + 1 },
      };
    });
  };

  const toggleWindow = (key: string) => {
    setWindows((prev) => {
      const isOpen = !prev[key as keyof typeof prev].isOpen;
      const highestZ = Math.max(...Object.values(prev).map((w) => w.zIndex));
      return {
        ...prev,
        [key]: {
          ...prev[key as keyof typeof prev],
          isOpen,
          zIndex: isOpen ? highestZ + 1 : prev[key as keyof typeof prev].zIndex,
        },
      };
    });
  };

  const TECH_STACK = [
    { name: "React", icon: <Code2 size={24} className="text-blue-500" /> },
    { name: "Next.js", icon: <Globe size={24} className="text-black" /> },
    { name: "Tailwind", icon: <Palette size={24} className="text-teal-400" /> },
    { name: "Node.js", icon: <Terminal size={24} className="text-green-600" /> },
    { name: "Database", icon: <Database size={24} className="text-purple-500" /> },
    { name: "Framer", icon: <Sparkles size={24} className="text-pink-500" /> },
  ];

  return (
    <main className="retro-grid w-full h-screen relative overflow-hidden select-none font-[family-name:var(--font-vt323)]">

      {/* Background Title */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h1 className="text-[15vw] leading-none font-bold text-[#6B7D5D]">
          PORTFOLIO
        </h1>
      </div>

      {/* Desktop Icons Column */}
      <div className="absolute top-8 left-8 flex flex-col gap-8 z-0">
        <DesktopIcon
          label="Profile"
          onClick={() => toggleWindow("profile")}
          icon={<div className="w-16 h-16 bg-[#2D2D2D] rounded flex items-center justify-center text-white border-2 border-white/50"><User size={32} /></div>}
        />
        <DesktopIcon
          label="Works"
          onClick={() => toggleWindow("works")}
          icon={
            <div className="w-16 h-16 relative">
              <FolderOpen size={64} className="text-[#F4E06D] drop-shadow-md stroke-[1.5]" />
            </div>
          }
        />
      </div>

      <div className="absolute top-8 right-8 flex flex-col gap-8 z-0">
        <DesktopIcon
          label="Contact"
          onClick={() => toggleWindow("contact")}
          icon={
            <div className="w-16 h-16 relative">
              <FolderOpen size={64} className="text-[#F4E06D] drop-shadow-md stroke-[1.5]" />
            </div>
          }
        />
        <DesktopIcon
          label="Resume"
          onClick={() => toggleWindow("resume")}
          icon={
            <div className="w-16 h-16 relative">
              <FolderOpen size={64} className="text-[#F4E06D] drop-shadow-md stroke-[1.5]" />
            </div>
          }
        />
      </div>


      {/* Windows */}

      {/* PROFILE WINDOW */}
      <Window
        id="profile"
        title={windows.profile.title}
        isOpen={windows.profile.isOpen}
        onClose={() => toggleWindow("profile")}
        zIndex={windows.profile.zIndex}
        onFocus={() => bringToFront("profile")}
        initialPosition={windows.profile.position}
        width="550px"
      >
        <div className="flex flex-col md:flex-row gap-6 items-center p-4">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[var(--window-border)] overflow-hidden shadow-lg shrink-0 bg-white">
            <Image
              src="/profile.png"
              alt="Profile"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">hi! i&apos;m <span className="text-[#D97757]">Wahyu</span></h2>
            <div className="inline-block bg-[#F4E06D] px-3 py-1 border-2 border-[var(--window-border)] mb-4 shadow-[4px_4px_0px_rgba(0,0,0,0.1)]">
              <p className="text-xl font-bold uppercase tracking-widest text-[#2D2D2D]">Frontend Developer</p>
            </div>
            <p className="italic text-gray-600 text-lg leading-relaxed">
              &quot;Building responsive, high-performance web applications with a focus on clean code and seamless user interactions.&quot;
            </p>
          </div>
        </div>
      </Window>

      {/* WORKS WINDOW */}
      <Window
        id="works"
        title={windows.works.title}
        isOpen={windows.works.isOpen}
        onClose={() => toggleWindow("works")}
        zIndex={windows.works.zIndex}
        onFocus={() => bringToFront("works")}
        initialPosition={windows.works.position}
        width="650px"
        height="600px"
      >
        <div className="text-center p-2">
          <h3 className="text-2xl font-bold mb-6 border-b-2 border-dashed border-gray-400 pb-2 inline-block">TECH STACK</h3>
          <div className="grid grid-cols-3 gap-4 mb-8">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center gap-2 p-3 bg-white border-2 border-[#E6E6D8] rounded hover:border-[var(--window-border)] hover:scale-105 transition-all cursor-default">
                {tech.icon}
                <span className="text-lg">{tech.name}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-6 border-b-2 border-dashed border-gray-400 pb-2 inline-block">PROJECTS</h3>
          <div className="space-y-4 text-left">
            {projects.map((p) => (
              <div key={p.id} className="group bg-white border-2 border-transparent hover:border-[var(--window-border)] hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)] p-4 cursor-pointer transition-all">
                {p.imageUrl && (
                  <div className="relative w-full h-32 mb-3 bg-gray-100 overflow-hidden border border-gray-200">
                    <Image src={p.imageUrl} alt={p.title} fill className="object-cover" />
                  </div>
                )}
                <h4 className="font-bold text-lg flex justify-between">
                  {p.title}
                  <span className="text-sm bg-[#F49D9D] px-2 py-0.5 rounded text-white">{p.category}</span>
                </h4>
                <p className="text-sm text-gray-500 mb-1 font-mono">{p.techStack}</p>
                <p className="text-gray-600 line-clamp-2">{p.description}</p>
              </div>
            ))}
            {projects.length === 0 && <p className="text-center text-gray-400">Loading projects...</p>}
          </div>
        </div>
      </Window>

      {/* CONTACT WINDOW */}
      <Window
        id="contact"
        title={windows.contact.title}
        isOpen={windows.contact.isOpen}
        onClose={() => toggleWindow("contact")}
        zIndex={windows.contact.zIndex}
        onFocus={() => bringToFront("contact")}
        initialPosition={windows.contact.position}
      >
        <div className="flex flex-col items-center justify-center h-full p-4 space-y-6">
          <p className="text-xl text-center">Interested in working together?</p>
          <a
            href="mailto:wahyu@example.com"
            className="
                    flex items-center gap-2 px-8 py-3 
                    bg-[#F49D9D] text-white text-xl font-bold 
                    border-2 border-[var(--window-border)] 
                    shadow-[4px_4px_0px_rgba(0,0,0,0.2)] 
                    hover:translate-x-[2px] hover:translate-y-[2px] 
                    hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] 
                    transition-all"
          >
            <Mail size={24} />
            Send Email
          </a>
        </div>
      </Window>

      {/* RESUME WINDOW */}
      <Window
        id="resume"
        title={windows.resume.title}
        isOpen={windows.resume.isOpen}
        onClose={() => toggleWindow("resume")}
        zIndex={windows.resume.zIndex}
        onFocus={() => bringToFront("resume")}
        initialPosition={windows.resume.position}
      >
        <div className="space-y-6 p-2">
          <div className="border-4 border-[var(--window-border)] p-8 bg-white text-center min-h-[200px] flex flex-col items-center justify-center gap-4">
            <FileText size={48} className="text-gray-300" />
            <p className="text-lg text-gray-500">Resume Preview Unavailable</p>
          </div>
          <button className="w-full py-3 bg-[var(--retro-green)] text-white text-xl font-bold border-2 border-[var(--window-border)] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all">
            Download PDF
          </button>
        </div>
      </Window>

      <Taskbar />
    </main>
  );
}
