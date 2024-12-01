import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        typing: 'typing 4s steps(40, end), blink 0.5s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },

        smartforge:{
          "blue": "#172554",
          "red":"#991b1b",
          "jaune":"#d97706"
        }
      },
      fontSize: {
        'l':'1.5rem',
        'xl':'1.8rem',
        'xxl': '2.5rem', // Taille personnalisée
        'huge': '5rem',  // Taille encore plus grande
      },
    },
  },
  plugins: [],
} satisfies Config;
