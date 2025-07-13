import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'white-raw': '#F2F2F2',
        'primary-accent': '#CFFF00',
        'secondary-accent': '#0047AB',
        primary: {
          400: '#CFFF00',
          500: '#CFFF00',
          600: '#B8E600',
        },
        neutral: {
          100: '#f5f5f5',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'ui-serif', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config