'use client'

import React from 'react';
import { AreaChart, Area, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { year: '2020', level: 30 },
  { year: '2022', level: 30 },
  { year: '2023', level: 80 },
  { year: '2024', level: 10 },
  { year: '2025', level: 70 },
  { year: '2025', level: 20 },
  { year: '2025', level: 60 },
  { year: '2025', level: 10 },
  { year: '2025', level: 70 },
  { year: '2025', level: 30 },
  { year: '2025', level: 30},
];

export default function ExperienceChart() {
  return (
    <div className="w-full h-[300px] p-4 bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {/* <defs> */}
            <linearGradient id="colorLevel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#16a34a" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
            </linearGradient>
          {/* </defs> */}
          <YAxis hide domain={[0, 100]} />
          <Tooltip 
            contentStyle={{ borderRadius: '1px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Area 
            type="linear" 
            dataKey="level" 
            stroke="#16a34a" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorLevel)" 
            isAnimationActive={false} // Matikan animasi default Recharts
            // Properti CSS untuk efek Snake
            strokeDasharray="1000 1000"
            className="snake-animation"
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* CSS In-JS untuk menganimasikan stroke-dashoffset */}
      <style jsx global>{`
        .snake-animation {
          stroke-dashoffset: 1000;
          animation: snake-run 5s linear infinite;
        }

        @keyframes snake-run {
          0% {
            stroke-dashoffset: 1000;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
}