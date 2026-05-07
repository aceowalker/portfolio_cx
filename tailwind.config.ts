import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#061525",
        ink: "#0b1f35",
        cyanSoft: "#91f5ff",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(68, 205, 255, 0.18)",
        lift: "0 20px 60px rgba(7, 20, 38, 0.28)",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
