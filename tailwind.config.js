/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        surfaceHighlight: '#1E1E1E',
        primary: '#CCFF00', // Acid Lime
        secondary: '#7000FF', // Electric Violet
        accent: '#FF003C', // Cyber Red
        text: {
          main: '#FFFFFF',
          muted: '#888888',
          inverse: '#000000',
        },
        border: '#333333',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'], // Assuming system font or import later
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        'grid-pattern': "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
      },
      boxShadow: {
        'neon': '0 0 20px rgba(204, 255, 0, 0.5)',
        'neon-purple': '0 0 20px rgba(112, 0, 255, 0.5)',
        'hard': '4px 4px 0px 0px #CCFF00',
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
}
