/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rio: {
          green: {
            DEFAULT: '#16A34A',
            light: '#22C55E',
            dark: '#15803D',
            soft: '#F0FDF4',
          },
          navy: {
            DEFAULT: '#003B73',
            deep: '#002855',
            dark: '#001D3D',
            light: '#0A4E8C',
            soft: '#F0F4F8',
          },
          orange: {
            DEFAULT: '#F37021',
            light: '#FB923C',
            dark: '#EA580C',
            soft: '#FFF7ED',
          },
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      backgroundImage: {
        'brand-tri': 'linear-gradient(135deg, #16A34A 0%, #003B73 50%, #F37021 100%)',
        'brand-navy-green': 'linear-gradient(135deg, #003B73 0%, #16A34A 100%)',
        'brand-navy-orange': 'linear-gradient(135deg, #003B73 0%, #F37021 100%)',
        'brand-green-orange': 'linear-gradient(135deg, #16A34A 0%, #F37021 100%)',
      },
      boxShadow: {
        'clean': '0 2px 10px -2px rgba(0, 59, 115, 0.05), 0 8px 30px -4px rgba(0, 59, 115, 0.07)',
        'clean-hover': '0 10px 40px -8px rgba(0, 59, 115, 0.12), 0 20px 40px -12px rgba(22, 163, 74, 0.1)',
        'btn-navy': '0 8px 24px -4px rgba(0, 59, 115, 0.35)',
        'btn-green': '0 8px 24px -4px rgba(22, 163, 74, 0.35)',
        'btn-orange': '0 8px 24px -4px rgba(243, 112, 33, 0.35)',
      }
    },
  },
  plugins: [],
}
