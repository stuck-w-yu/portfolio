'use client'

import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

// Konfigurasi Warna
const chartConfig = {
  desktop: {
    label: 'Activity',
    color: 'rgb(20, 184, 166)', // Warna Teal (sesuai tema Anda)
  },
} satisfies ChartConfig

// Data Pola Detak Jantung
// value: 50 (datar), 100 (puncak atas), 0 (puncak bawah)
// label: Teks yang akan muncul di titik tersebut
const chartData = [
  { step: 1, value: 50 },
  { step: 2, value: 50 },
  { step: 3, value: 50 },
  { step: 4, value: 80, label: "1 YEAR EXP" }, // Puncak 1
  { step: 5, value: 50 },
  { step: 6, value: 20 }, // Lembah
  { step: 7, value: 90, label: "5 PROJECTS", isMain: true }, // Puncak Utama
  { step: 8, value: 30 },
  { step: 9, value: 50 },
  { step: 10, value: 70, label: "5 LANGUAGES" }, // Puncak 3
  { step: 11, value: 50 },
  { step: 12, value: 50 },
]

// Komponen Custom untuk Render Titik & Label
const CustomizedDot = (props: any) => {
  const { cx, cy, payload } = props;

  // Hanya render jika ada label di data
  if (payload.label) {
    return (
      <g>
        {/* Lingkaran Putih dengan efek Glow */}
        <circle 
          cx={cx} 
          cy={cy} 
          r={payload.isMain ? 8 : 6} 
          fill="white" 
          stroke="rgba(20, 184, 166, 0.5)" 
          strokeWidth={4}
        />
        {/* Teks Label di atas titik */}
        <text 
          x={cx} 
          y={cy - 20} 
          textAnchor="middle" 
          fill="white" 
          fontSize={payload.isMain ? 14 : 12} 
          className="font-sans tracking-wider font-bold"
        >
          {payload.label}
        </text>
      </g>
    );
  }
  return null;
};

export default function HeartbeatChart() {
  return (
    <div className="w-full h-full min-h-[200px]">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <LineChart
          data={chartData}
          margin={{
            left: 20,
            right: 20,
            top: 40, // Margin atas diperbesar agar teks label tidak terpotong
            bottom: 20,
          }}
        >
          {/* Grid Tipis Transparan */}
          <CartesianGrid vertical={false} stroke="rgba(255,255,255,0.05)" />
          
          {/* Sembunyikan Axis X dan Y agar bersih */}
          <XAxis dataKey="step" hide />
          <YAxis domain={[0, 120]} hide />

          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          
          <Line
            dataKey="value"
            type="monotone" // Membuat garis melengkung halus
            stroke="rgb(20, 184, 166)" // Warna Teal Hardcoded
            strokeWidth={2}
            dot={<CustomizedDot />} // Gunakan dot custom kita
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}