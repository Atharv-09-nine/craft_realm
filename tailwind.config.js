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
        // Retro Pixel Art Color System
        background: {
          primary: '#0F0F23',
          secondary: '#1A1A2E',
          tertiary: '#16213E'
        },
        foreground: {
          primary: '#EEEEFF',
          secondary: '#CCCCDD',
          muted: '#9999AA'
        },
        accent: {
          gold: '#FFCC00',
          'gold-dark': '#FF9900'
        },
        success: {
          primary: '#00FF41',
          light: '#41FF00'
        },
        semantic: {
          success: '#00FF41',
          warning: '#FFAA00',
          error: '#FF0040',
          info: '#00AAFF'
        },
        pixel: {
          red: '#FF0040',
          green: '#00FF41',
          blue: '#0040FF',
          yellow: '#FFFF00',
          magenta: '#FF00FF',
          cyan: '#00FFFF',
          white: '#FFFFFF',
          black: '#000000',
          gray: '#808080'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
        'pixel': ['Press Start 2P', 'monospace']
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '24px',
        '2xl': '32px',
        '3xl': '48px',
        '4xl': '64px'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'xp-gain': 'xpGain 0.8s ease-out',
        'pixel-blink': 'pixelBlink 1s infinite',
        'pixel-float': 'pixelFloat 3s ease-in-out infinite',
        'retro-bounce': 'retroBounce 0.6s ease-in-out infinite alternate',
        'scanline': 'scanline 2s linear infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)' }
        },
        xpGain: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        pixelBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        pixelFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        retroBounce: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-8px)' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      }
    },
  },
  plugins: [],
}