import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Full-dark, cinematic body — used everywhere now, not just the hero
        void: "#05070E",
        panel: "#0C1120",
        panel2: "#121A2E",
        line: "#212C45",

        // Body surfaces now map onto the same dark system
        paper: "#05070E",
        surface: "#0C1120",
        border: "#212C45",

        royal: {
          DEFAULT: "#2451FF",
          dim: "#1533A8",
          bright: "#5B7CFF",
        },
        cyan: {
          DEFAULT: "#0EA5C4",
          bright: "#2FE3FF",
          dim: "#0E7C90",
        },

        // "navy" now drives heading text — bright, on dark
        navy: {
          DEFAULT: "#F5F7FC",
          soft: "#C7D0E3",
        },
        // "slate" now drives body copy on dark
        slate: {
          DEFAULT: "#98A2BC",
          light: "#6C7793",
        },

        ink: {
          DEFAULT: "#F3F6FB",
          muted: "#98A2BC",
          faint: "#5B6885",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent, #05070E 85%), linear-gradient(90deg, rgba(47,227,255,0.07) 1px, transparent 1px), linear-gradient(0deg, rgba(47,227,255,0.07) 1px, transparent 1px)",
        "beam": "linear-gradient(120deg, transparent 30%, rgba(47,227,255,0.5) 48%, rgba(36,81,255,0.6) 52%, transparent 70%)",
        "noise-fade": "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(36,81,255,0.28), transparent)",
      },
      backgroundSize: {
        grid: "100% 100%, 48px 48px, 48px 48px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(34,211,238,0.15), 0 0 40px rgba(36,81,255,0.25)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        slash: {
          "0%": { transform: "translateX(-120%) skewX(-12deg)", opacity: "0" },
          "12%": { opacity: "1" },
          "100%": { transform: "translateX(220%) skewX(-12deg)", opacity: "0" },
        },
        rise: {
          "0%": { transform: "translateY(18px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        drift: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { transform: "translateY(28px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slash: "slash 2.8s ease-in-out infinite",
        rise: "rise 0.7s cubic-bezier(0.16,1,0.3,1) both",
        drift: "drift 6s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
