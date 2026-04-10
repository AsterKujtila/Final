import type { Config } from "tailwindcss";

const config: Config = {
  content:[
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#f0ede8", dark: "#e8e4de" },
        brown: { DEFAULT: "#2a1a14", mid: "#5a3a2e", light: "#8a7a74" },
        terracotta: { DEFAULT: "#c4724a", light: "#e8956d", subtle: "#f5e8e0" },
        border: "#e0d8d0",
        footer: "#1a0a08",
        hero: "#2d3a45",
      },
      fontFamily: {
        sans: ['var(--font-figtree)', 'system-ui', 'sans-serif'],
        serif:['var(--font-fraunces)', 'Georgia', 'serif'],
        mono:['var(--font-jetbrains)', 'monospace'],
      },
      boxShadow: {
        'sm-custom': '0 2px 8px rgba(42,26,20,0.06)',
        'md-custom': '0 8px 32px rgba(42,26,20,0.10)',
        'lg-custom': '0 24px 64px rgba(42,26,20,0.14)',
        'xl-custom': '0 40px 80px rgba(42,26,20,0.18)',
        'glow-terra': '0 0 40px rgba(196,114,74,0.20)',
      },
    },
  },
  plugins:[],
};
export default config;