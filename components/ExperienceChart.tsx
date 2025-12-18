'use client'

import React from 'react';
import { AreaChart, Area, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Pola Detak Jantung: Baseline -> Puncak -> Lembah -> Baseline
const data = [
  { time: 1, level: 30 }, { time: 2, level: 30 }, // Baseline
  { time: 3, level: 35 }, { time: 4, level: 25 }, // Getaran awal (P wave)
  { time: 5, level: 30 }, // Kembali ke baseline
  { time: 6, level: 90 }, // Lonjakan tajam (R peak)
  { time: 7, level: 5 },  // Penurunan tajam (S wave)
  { time: 8, level: 30 }, // Kembali ke baseline
  { time: 9, level: 45 }, { time: 10, level: 30 }, // Gelombang akhir (T wave)
  { time: 11, level: 30 }, { time: 12, level: 30 }, // Baseline panjang
  { time: 13, level: 90 }, { time: 14, level: 5 },  // Detak kedua
  { time: 15, level: 30 }, { time: 16, level: 30 },
];

export default function ExperienceChart() {
  return (
    <div className="w-full h-[300px] p-4 bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* Tag <defs> harus dibuka agar gradasi terbaca */}
          {/* <defs> */}
            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
            </linearGradient>
          {/* </defs> */}
          
          <YAxis hide domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ borderRadius: '1px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            labelClassName="hidden" // Sembunyikan label tooltip agar lebih bersih
          />
          
          <Area 
            type="linear" 
            dataKey="level" 
            stroke="#16a34a" 
            strokeWidth={2}
            fillOpacity={1} 
            fill="url(#colorLevel)" 
            isAnimationActive={false}
            strokeDasharray="1000 5000" // "Ular" yang panjang
            className="snake-animation"
          />
        </AreaChart>
      </ResponsiveContainer>

      <style jsx global>{`
        .snake-animation {
          /* Nilai offset disesuaikan dengan panjang dasharray */
          stroke-dashoffset: 1000;
          animation: snake-run 4s linear infinite;
        }

        @keyframes snake-run {
          0% {
            stroke-dashoffset: 1000;
          }
          /* Garis merayap masuk sampai habis, lalu mulai lagi dari awal */
          100% {
            stroke-dashoffset: -5000;
          }
        }
      `}</style>
    </div>
  );
}