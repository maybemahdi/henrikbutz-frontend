import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "core-gradient":
          "linear-gradient(90deg, #032159 0%, #1EA4EA 50%, #66EFFF 100%)",
        "sec-gradient":
          "linear-gradient(90deg, #FF6903 0%, #FFB305 50%, #FFDFA3 100%)",
      },
      keyframes: {
        fireFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        fire: "fireFlow 8s ease-in-out infinite",
        float: "float 4s ease-in-out infinite",
      },
      backgroundSize: {
        "300%": "300% 300%",
      },
      colors: {
        "blue-primary": "#102C54",
        "green-primary": "#1BB68A",
        "green-light": "#E8F8F3",
        "gray-light": "#4B5563",
        primary: "#1E6A92",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
      },
      container: {
        screens: {
          DEFAULT: "1290px",
        },
        center: true,
        padding: "1.2rem",
      },
      screens: {
        xs: "540px",
      },
    },
  },

  plugins: [],
} satisfies Config;
