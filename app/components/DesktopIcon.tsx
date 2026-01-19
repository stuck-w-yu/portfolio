"use client";

import React from "react";

interface DesktopIconProps {
  label: string;
  onClick: () => void;
  icon?: React.ReactNode;
}

export default function DesktopIcon({ label, onClick, icon }: DesktopIconProps) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col items-center gap-2 w-24 cursor-pointer p-2 rounded hover:bg-black/5 active:bg-black/10 transition-colors"
    >
      <div className="relative w-16 h-16 flex items-center justify-center transition-all group-hover:-translate-y-1">
        {icon ? (
          icon
        ) : (
          //  Default Folder Icon (Retro SVG)
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-[#F4E06D]" // Retro Yellow
          >
            <path
              d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"
              stroke="#2D2D2D"
              strokeWidth="1.5"
            />
          </svg>
        )}
      </div>
      <span className="text-center font-[family-name:var(--font-vt323)] text-lg font-bold bg-white/90 px-2 py-0.5 rounded border border-[var(--window-border)] shadow-[2px_2px_0px_rgba(0,0,0,0.1)] group-hover:shadow-[3px_3px_0px_rgba(0,0,0,0.1)] select-none">
        {label}
      </span>
    </div>
  );
}
