import type { Config } from 'tailwindcss';
import { BlingColors } from './src/tokens/colors';
const plugin = require('tailwindcss/plugin');
const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      containers: {
        'xs': '150px',
        'small': '200px',
        'md': '350px',
        'base': '500px',
        'lg': '648px',
        'xl': '860px',
        'xxl': '900px',
        'xxxl': '1100px'
      },
           
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -2px) rotate(-1deg)' },
          '20%': { transform: 'translate(-3px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(3px, 2px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 2px) rotate(-1deg)' },
          '60%': { transform: 'translate(-3px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(3px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 2px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -2px) rotate(-1deg)' }
        },
        tabsBorderFadeIn: {
          '0%': { borderColor: 'rgba(22,22,22,.2)' },
          '100%': { borderColor: 'rgba(22,22,22,1)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee2': 'marquee2 25s linear infinite',
        'shake': 'shake 1s linear infinite',
        'tabsBorderFadeIn': 'tabsBorderFadeIn 500ms linear',
        'fadeIn': 'fadeIn 1s ease'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        ...BlingColors
      },
      boxShadow: {
        'bling': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      },
      borderRadius: {
        brand: '10px'
      },
      saturate: {
        '20': '0.2' // Agrega la clase saturate-20
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'hover'],
      textColor: ['dark', 'hover'],
      boxShadow: ['dark', 'hover'],
      cursor: ['hover']
    }
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  daisyui: {
    themes: ['bumblebee']
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/container-queries')
   
  ],
  ...(process.env.NODE_ENV === 'production' ? {
    cssnano: {}
  } : {})
};

export default config;
