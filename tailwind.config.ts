import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        armux: {
          black: "#0B0B0C",
          charcoal: "#16161A",
          darkGray: "#222228",
          lightGray: "#F4F4F6",
          gold: "#D4AF37",
          goldLight: "#F5DF88",
          goldDark: "#997A15",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #B38728 100%)',
        'dark-gradient': 'linear-gradient(180deg, #16161A 0%, #0B0B0C 100%)',
      }
    },
  },
  plugins: [],
};
export default config;
