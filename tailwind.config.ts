import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "from-violet-500", "to-blue-500",
    "from-pink-500",   "to-rose-500",
    "from-orange-500", "to-amber-500",
    "from-teal-500",   "to-cyan-500",
    "from-green-500",  "to-emerald-500",
    "from-red-500",    "to-pink-500",
    "from-purple-500", "to-violet-500",
    "from-slate-500",  "to-gray-500",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07070f",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #7c3aed, #db2777, #ea580c)",
        "brand-gradient-subtle": "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(219,39,119,0.15))",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;