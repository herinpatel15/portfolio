import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--background)",
        fg: "var(--foreground)",
        sc: "var(--stroke)",
        pc: "var(--primary)"
      },
      fontFamily: {
        coolveticaRg: ["CoolveticaRg", "sans-serif"],
      }
    },
  },
  plugins: [],
} satisfies Config;
