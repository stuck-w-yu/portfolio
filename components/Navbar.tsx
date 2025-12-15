'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Helper function untuk menentukan style aktif/tidak aktif
  const getLinkStyle = (path: string, isMainButton: boolean = false) => {
    // Cek apakah pathname saat ini sama dengan path tombol
    // Khusus untuk Home ('/'), kita cek exact match agar tidak aktif di semua halaman
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    
    // Base styles (ukuran tergantung main button atau bukan)
    const sizeClass = isMainButton ? "w-16 h-16" : "w-14 h-14";
    
    // Active styles (Putih, Glow Kuat, Scale Up)
    const activeClass = "border-2 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-[#121c24] scale-110 z-30";
    
    // Inactive styles (Abu-abu, Border Tipis, Hover Effect)
    const inactiveClass = "border border-slate-500 text-slate-400 bg-[#121c24] hover:scale-110 hover:border-teal-400 hover:text-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20";

    return `${sizeClass} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <>
      {/* =========================================
          DESKTOP VIEW (Hidden on Mobile)
          ========================================= */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden">
        
        {/* SVG Curve Background */}
        <div className="absolute left-0 top-0 h-full w-[100px] pointer-events-none z-0">
          <svg className="h-full w-full" viewBox="0 0 100 800" preserveAspectRatio="none">
            <path 
              d="M 100 0 Q 30 400 100 800" 
              fill="none" 
              stroke="rgba(20, 184, 166, 0.3)" 
              strokeWidth="4"
              className="blur-md"
            />
            <path 
              d="M 100 0 Q 30 400 100 800" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex items-center h-full pl-4">
          <div className="flex items-center">
            <div className="flex flex-col space-y-12 py-10">
              
              {/* 1. ABOUT (Desktop) */}
              <motion.div
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="relative group ml-12"
              >
                <Link href="/">
                  <div className={getLinkStyle('/')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </Link>
                <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">ABOUT</span>
              </motion.div>
              
              {/* 2. PROJECTS (Desktop) */}
              <motion.div
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
                className="relative group ml-4"
              >
                {/* FIX: href harus sama persis dengan argumen getLinkStyle ('/projects') */}
                <Link href="/projects">
                  <div className={getLinkStyle('/projects', true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </Link>
                <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">PROJECTS</span>
              </motion.div>
              
              {/* 3. CONTACT (Desktop) */}
              <motion.div
                initial={{ scale: 0, x: -50 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                className="relative group ml-12"
              >
                <Link href="/contact">
                  <div className={getLinkStyle('/contact')}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-2H5v2z" />
                    </svg>
                  </div>
                </Link>
                <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">CONTACT</span>
              </motion.div>

            </div>
            
            {/* Desktop Content Placeholder */}
            <div className="mx-auto my-auto ml-auto">
              {/* Content Goes Here */}
            </div>
          </div>
        </div>
      </div>


      {/* =========================================
          MOBILE VIEW (Hidden on Desktop)
          ========================================= */}
      <div className="block md:hidden fixed bottom-0 left-0 w-full z-50 h-24 pointer-events-none">
        
        {/* SVG Background Curve Horizontal */}
        {/* <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none"> */}
             {/* Glow Line */}
             {/* <path 
              d="M 0 20 Q 200 80 400 20" 
              fill="none" 
              stroke="rgba(20, 184, 166, 0.3)" 
              strokeWidth="4"
              className="blur-md"
            /> */}
            {/* Main Line */}
            {/* <path 
              d="M 0 20 Q 200 80 400 20" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
          </svg>
        </div> */}

        {/* Button Container Mobile */}
        <div className="relative w-full h-full flex items-start justify-around px-6 pointer-events-auto">
          
          {/* 1. ABOUT (Mobile - Left) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-1"
          >
            <Link href="/">
              <div className={getLinkStyle('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* 2. PROJECTS (Mobile - Center - Lower) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-1" 
          >
            {/* FIX: href dan getLinkStyle disamakan menjadi '/projects' */}
            <Link href="/projects">
              <div className={getLinkStyle('/projects', true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* 3. CONTACT (Mobile - Right) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-1"
          >
            <Link href="/contact">
              <div className={getLinkStyle('/contact')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-2H5v2z" />
                </svg>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </>
  );
}