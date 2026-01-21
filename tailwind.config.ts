import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F59E0B',
          50: '#FEF9EC',
          100: '#FEF3D6',
          200: '#FDE7AD',
          300: '#FBDA83',
          400: '#F9C84A',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        secondary: {
          DEFAULT: '#F97316',
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        navy: {
          DEFAULT: '#091929',
          50: '#E8EEF4',
          100: '#C5D4E3',
          200: '#9EB8CF',
          300: '#779CBB',
          400: '#5986AC',
          500: '#3B719D',
          600: '#2F5A7E',
          700: '#23445F',
          800: '#172D40',
          900: '#091929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
