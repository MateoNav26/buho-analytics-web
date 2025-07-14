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
        // Brand colors
        black: '#000000',
        'white-raw': '#F2F2F2',
        'primary-accent': '#CFFF00', // lime
        'secondary-accent': '#0047AB', // cobalt
        
        // Semantic color palette
        primary: {
          50: '#f7ffe6',
          100: '#edffcc',
          200: '#dbff99',
          300: '#c9ff66',
          400: '#b7ff33',
          500: '#CFFF00', // lime - main brand color
          600: '#b8e600',
          700: '#a1cc00',
          800: '#8ab300',
          900: '#739900',
        },
        secondary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#0047AB', // cobalt - main secondary color
          600: '#003f9a',
          700: '#003789',
          800: '#002f78',
          900: '#002767',
        },
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
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair-display)', 'ui-serif', 'Georgia', 'serif'],
        'dm-sans': ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'playfair': ['var(--font-playfair-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      // Additional brand-specific utilities
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #CFFF00 0%, #b8e600 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #0047AB 0%, #003f9a 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'brand': '0 4px 14px 0 rgba(207, 255, 0, 0.25)',
        'brand-lg': '0 10px 25px 0 rgba(207, 255, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config