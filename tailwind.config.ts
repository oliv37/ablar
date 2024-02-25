import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        foreground: "rgb(var(--foreground-rgb))",
        background: "rgb(var(--background-rgb))",
        "background-subtle-1": "rgb(var(--background-subtle-1-rgb))",
      },
    },
  },
  plugins: [],
};
export default config;
