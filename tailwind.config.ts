import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-10px) rotate(0deg)', opacity: "1" },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: "0" },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      width: {
        '1/8': '25%',  // This adds the w-1/8 class
      },
      animation: {
        fall: 'fall linear forwards',
        'spin-slow': 'spin-slow 3s linear infinite',
        'spin-slow-reverse': 'spin-slow-reverse 3s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
