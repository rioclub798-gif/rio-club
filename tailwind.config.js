/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        rio: {
          green: {
            light: '#34d399',
            DEFAULT: '#10b981',
            dark: '#059669',
            glow: 'rgba(16, 185, 129, 0.25)',
          },
          blue: {
            light: '#1e3a8a',
            DEFAULT: '#0f2744',
            dark: '#0a192f',
            deep: '#060d17',
          },
          orange: {
            light: '#fb923c',
            DEFAULT: '#f97316',
            dark: '#ea580c',
            glow: 'rgba(249, 115, 22, 0.25)',
          },
          gold: '#eab308',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.15), transparent 70%), radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.1), transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
