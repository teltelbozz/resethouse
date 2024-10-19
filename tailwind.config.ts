import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
      },
      keyframes: {
        "tracking-in-expand": {
            "0%": {
                "letter-spacing": "-.5em",
                opacity: "0"
            },
            "40%": {
                opacity: ".6"
            },
            to: {
                opacity: "1"
            }
        }
      }
    },
  },
  plugins: [],
};


export default config;
