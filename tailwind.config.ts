import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.2)' },
          '20%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.2)' },
          '40%': { transform: 'scale(1)' },
        },
      },
      animation: {
        heartbeat: 'heartbeat 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;