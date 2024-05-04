import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { nextui } from "@nextui-org/react";

const config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: "375px",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            danger: {
              DEFAULT: "#991b1b",
            },
          },
        },
        dark: {
          colors: {
            danger: {
              DEFAULT: "#fca5a5",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;

export default config;
