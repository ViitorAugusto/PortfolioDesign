import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#FF9C1A",
        primaryTransparent: "#FF9C1A30",
        secondary: "#EC1B09",
        tertiary: "#F2F5F9",
        whitemoon: "#EBF2FA",
        whiteicon: "#F2F7FC",
        black: "#000000",
        resume: "#FFE3BF",
        resume2: "#FFEED9"
        
      }, spacing: {
        '0.5': '0.125rem', 
      },
    },
  },
  plugins: [],
}
export default config
