import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import flowbite from "flowbite-react/tailwind";
import { nextui } from "@nextui-org/react";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
    "../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      xs: "375px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        times: ["Times New Roman", "Times", "serif"],
      },
      screens: {
        print: {
          raw: "print",
        },
        dark: {
          raw: "(prefers-color-scheme: dark)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    flowbite.plugin(),
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
