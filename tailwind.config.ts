import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      perspective: {
        '500': '500px',
        '1000': '1000px',
      },
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        fg1: "var(--foreground1)",
        sc: "var(--stroke)",
        pc: "var(--primary)",
        secBg: "var(--secBg)",
      },
      fontFamily: {
        coolveticaRg: ["CoolveticaRg"],
      }
    },
  },
  plugins: [],
} satisfies Config;
