import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["var(--font-dancing-script)"],
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        float: "float var(--float-duration, 15s) linear infinite",
        "bounce-slow": "bounce 0.5s infinite",
        "pulse-slow": "pulse 1.5s infinite",
        "fade-in": "fadeIn 1s ease-in",
        "subtle-hint": "subtleHint 2s infinite alternate",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(100vh) translateX(0)",
            opacity: "0",
          },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": {
            transform:
              "translateY(-100px) translateX(var(--float-distance, 50px))",
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        subtleHint: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
