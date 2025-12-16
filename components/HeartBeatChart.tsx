'use client'

import { useEffect, useState, useRef } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'

// 1. Definisikan tipe data untuk item pola
interface HeartbeatData {
  step: number;
  value: number;
  label?: string;
}

// Data pola heartbeat dasar
const basePattern: HeartbeatData[] = [
  { step: 1, value: 0 },
  { step: 2, value: 0 },
  { step: 3, value: 50, label: '3 YEAR EXPERIENCE' },
  { step: 4, value: 0 },
  { step: 5, value: 20 },
  { step: 6, value: 40, label: '5 PROJECT' },
  { step: 7, value: 0 },
  { step: 8, value: 0 },
  { step: 9, value: 60, label: '2 LANGUAGE' },
  { step: 10, value: 0 },
  { step: 11, value: 0 },
]

// Ulangi data untuk animasi loop
const repeatedData = [...basePattern, ...basePattern, ...basePattern].map((item, i) => ({
  ...item,
  step: i + 1,
}))

const VIEWPORT_WIDTH = 11

// 2. Definisikan props untuk CustomDot
// Tanda tanya (?) membuat props bersifat opsional, ini penting untuk menghindari error saat render di <Line />
interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: HeartbeatData;
}

export default function HeartBeatChart() {
  const [offset, setOffset] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setOffset((prev) => (prev + 1) % basePattern.length)
    }, 120)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const visibleData = repeatedData.slice(offset, offset + VIEWPORT_WIDTH)

  // 3. Terapkan interface CustomDotProps di sini
  const CustomDot = ({ cx, cy, payload }: CustomDotProps) => {
    // Pastikan cx dan cy ada sebelum render (safety check)
    if (cx === undefined || cy === undefined || !payload?.label) return null;

    return (
      <g>
        {/* Titik kecil putih */}
        <circle cx={cx} cy={cy} r="3" fill="white" />
        {/* Label di atas titik */}
        <text
          x={cx}
          y={cy - 10}
          textAnchor="middle"
          fill="white"
          fontSize="10"
          className="font-sans tracking-wide font-medium"
        >
          {payload.label}
        </text>
      </g>
    )
  }

  return (
    <div className="w-full h-[200px] bg-[#0f0c1a] rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={visibleData}
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={0.5}
          />
          <XAxis dataKey="step" hide />
          <YAxis domain={[0, 70]} hide />
          <Line
            type="linear"
            dataKey="value"
            stroke="white"
            strokeWidth={1.5}
            // TypeScript sekarang senang karena <CustomDot /> valid (props opsional)
            dot={<CustomDot />}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}