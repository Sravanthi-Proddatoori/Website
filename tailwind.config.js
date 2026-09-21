/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0E17',
        raised: '#0F1420',
        ink: '#EDEFF7',
        muted: '#9AA3B8',
        amber: {
          DEFAULT: '#FF9F5A',
          soft: '#FFB98A',
        },
        cyan: {
          DEFAULT: '#5EEAD4',
          soft: '#8FF3E3',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
