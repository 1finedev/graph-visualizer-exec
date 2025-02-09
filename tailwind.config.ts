import scrollbarHide from "tailwind-scrollbar-hide";
import { type Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["./public/**/*.tsx", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontSize: {
        base: [
          "15px",
          {
            lineHeight: "22px",
          },
        ],
        xs: [
          "12px",
          {
            lineHeight: "21px",
          },
        ],
        xl: [
          "20px",
          {
            lineHeight: "22px",
          },
        ],
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      boxShadow: {
        sidebar: "var-(--sidebar-shadow)",
        "sidebar-collapse": "var(--sidebar-collapse)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        brand: {
          green: "hsl(var(--brand-green))",
          blue: "hsl(var(--brand-blue))",
          "blue-faded": "hsl(var(--brand-blue-faded))",
          red: "hsl(var(--brand-red))",
          pink: "hsl(var(--brand-pink))",
          purple: "hsl(var(--brand-purple))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          faded: "hsl(var(--secondary-faded))",
          muted: "hsl(var(--secondary-muted))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
    },
  },
  safelist: [
    "bg-brand-pink",
    "bg-brand-purple", // Ensure this class is always included
  ],
  plugins: [tailwindAnimate, scrollbarHide],
} satisfies Config;
