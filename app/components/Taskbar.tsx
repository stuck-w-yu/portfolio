"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Dribbble, Twitter } from "lucide-react";

export default function Taskbar() {
    const socials = [
        { icon: <Linkedin size={24} />, href: "https://linkedin.com", color: "bg-[#5B9BD5]" },
        { icon: <Github size={24} />, href: "https://github.com", color: "bg-[#2D2D2D]" },
        { icon: <Dribbble size={24} />, href: "https://dribbble.com", color: "bg-[#0056B3]" }, // Behance blueish
        { icon: <Twitter size={24} />, href: "https://twitter.com", color: "bg-[#F49D9D]" }, // Pinkish
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full h-16 bg-[var(--retro-green)] border-t-2 border-[var(--window-border)] flex items-center justify-center gap-6 z-50">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
            w-10 h-10 flex items-center justify-center rounded
            ${social.color} text-white border-2 border-[var(--window-border)]
            shadow-[2px_2px_0px_rgba(0,0,0,0.2)]
            hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,0.2)]
            transition-all active:translate-y-0 active:shadow-none
          `}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
}
