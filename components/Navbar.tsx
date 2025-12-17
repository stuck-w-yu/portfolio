'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const getLinkStyle = (path: string, isMainButton: boolean = false) => {
    // Logic active state
    const isActive = path === '/' ? pathname === '/' : pathname?.startsWith(path);
    
    // Ukuran button
    const sizeClass = isMainButton ? "w-16 h-16" : "w-14 h-14";
    
    // Style saat aktif
    const activeClass = "border-2 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] bg-[#121c24] scale-110 z-30";
    
    // Style saat tidak aktif
    const inactiveClass = "border border-slate-500 text-slate-400 bg-[#121c24] hover:scale-110 hover:border-teal-400 hover:text-teal-400 hover:shadow-[0_0_20px_rgba(45,212,191,0.5)] z-20";

    return `${sizeClass} rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 relative ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <>
      {/* =========================================
          DESKTOP VIEW (Hidden on Mobile)
          ========================================= */}
      <div className="hidden md:block relative h-screen w-full overflow-hidden">
        
        {/* --- Backgrounds --- */}
        
        {/* SVG Curve Background (Left) */}
        <div className="absolute left-0 top-0 h-full w-[150px] pointer-events-none z-0">
          <svg className="ml-22 h-full w-full" viewBox="0 0 100 800" preserveAspectRatio="none">
            {/* Ubah Q 30 menjadi Q -100 */}
            <path 
              d="M 100 0 Q -100 400 100 800" 
              fill="none" 
              stroke="rgba(20, 184, 166, 0.3)" 
              strokeWidth="4" 
              className="blur-md"
            />
            <path 
              d="M 100 0 Q -100 400 100 800" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* SVG Curve Background (Right - Mirrored) */}
       <div className="absolute right-0 top-0 h-full w-[150px] pointer-events-none z-0 scale-x-[-1]">
          <svg className="ml-23 h-full w-full" viewBox="0 0 100 800" preserveAspectRatio="none">
            {/* Ubah Q 30 menjadi Q -100 */}
            <path 
              d="M 100 0 Q -100 400 100 800" 
              fill="none" 
              stroke="rgba(20, 184, 166, 0.3)" 
              strokeWidth="4" 
              className="blur-md"
            />
            <path 
              d="M 100 0 Q -100 400 100 800" 
              fill="none" 
              stroke="rgba(255,255,255,0.2)" 
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* --- Content Container --- */}
        <div className="relative z-10 w-full h-full flex justify-between items-center px-10">
          
          {/* === LEFT COLUMN (About, Projects, Contact) === */}
          {/* Added 'relative' here to position the gradient background */}
          <div className="relative flex flex-col space-y-12 py-10">
            
            {/* --- BACKGROUND GRADIENT GLOW --- */}
            {/* Posisinya absolute di belakang tombol-tombol kiri */}
            <div className="absolute left-9 top-12 bottom-12 w-10 bg-gradient-to-b from-transparent via-teal-800/80 to-transparent blur-xl rounded-full pointer-events-none" />

            {/* 1. ABOUT */}
            <motion.div
              initial={{ scale: 0, x: -50 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="relative group ml-7"
            >
              <Link href="/">
                <div className={getLinkStyle('/')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </Link>
              <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">ABOUT</span>
            </motion.div>
            
            {/* 2. PROJECTS */}
            <motion.div
              initial={{ scale: 0, x: -50 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              className="relative group ml-5"
            >
              <Link href="/projects">
                <div className={getLinkStyle('/projects', true)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </Link>
              <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">PROJECTS</span>
            </motion.div>
            
            {/* 3. CONTACT */}
            <motion.div
              initial={{ scale: 0, x: -50 }}
              animate={{ scale: 1, x: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
              className="relative group ml-7"
            >
              <Link href="/contact">
                <div className={getLinkStyle('/contact')}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14v-2H5v2z" />
                  </svg>
                </div>
              </Link>
              <span className="absolute left-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none">CONTACT</span>
            </motion.div>
          </div>

          {/* === RIGHT COLUMN (Blog) === */}
          <div className="flex flex-col space-y-12 py-10">
             
             {/* 4. BLOG (Rata Kanan) */}
             <motion.div
               initial={{ scale: 0, x: 50 }}
               animate={{ scale: 1, x: 0 }}
               transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
               className="relative group mr-7 "
             >
               <Link href="/blog">
                 <div className={getLinkStyle('/blog')}>
                   {/* SVG DOT/TITIK */}
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                     <circle cx="12" cy="12" r="3" />
                   </svg>
                 </div>
               </Link>
               {/* Tooltip Kiri */}
               <span className="absolute right-20 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest pointer-events-none whitespace-nowrap">
                 BLOG
               </span>
             </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================
          MOBILE VIEW (Hidden on Desktop)
          ========================================= */}
      <div className="block md:hidden fixed bottom-0 left-0 w-full z-50 h-24 pointer-events-none">
        <div className="relative w-full h-full flex items-start justify-around px-4 pointer-events-auto">
          
          {/* 1. ABOUT (Mobile) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-1"
          >
            <Link href="/">
              <div className={getLinkStyle('/')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* 2. PROJECTS (Mobile) */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-1"
          >
            <Link href="/projects">
              <div className={getLinkStyle('/projects', true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* 3. CONTACT (Mobile) */}
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

          {/* 4. BLOG (Mobile) - Ditambahkan untuk konsistensi */}
          {/* <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-1"
          >
            <Link href="/blog">
              <div className={getLinkStyle('/blog')}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                   <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </Link>
          </motion.div> */}

        </div>
      </div>
    </>
  );
}