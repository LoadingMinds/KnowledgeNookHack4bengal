import { DM_Sans, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#161515",
        red: "#E41B3F",
        lightred: "#E41B3F",
        text: "#EEEEEE",
        offwhite: "#C0C0C0",
        white: "#F8F8F8",
        charcoal: "#303030",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        DM_Sans: ["DM Sans", "sans-serif"],
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        flip: 'flip 0.6s infinite alternate',
        grow: "grow 2s ease-in-out forwards",
      },
      keyframes: {
        flip: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.1)' },
        },
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        grow: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress-width)' }, 
        },
      },
    },
  },
  plugins: [],
};

export default config;
