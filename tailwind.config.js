/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ativa modo dark via classe .dark no html ou body
  theme: {
    extend: {
      backgroundImage: {
        'bg-auth': "url('/images/bg-auth.webp')",
      },
      fontFamily: {
        title: ['Righteous', 'cursive'],
        body: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],  // 36px
        'h2': ['1.875rem', { lineHeight: '2.25rem' }],  // 30px
        'h3': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        'body': ['1rem', { lineHeight: '1.5rem' }],     // 16px
      },
      colors: {
        // Textos
        textPrimary: {
          light: '#111827', // gray-900
          dark: '#F3F4F6',  // gray-100
        },
        textSecondary: {
          light: '#6B7280', // gray-500
          dark: '#9CA3AF',  // gray-400
        },
        textDisabled: {
          light: '#D1D5DB', // gray-300
          dark: '#4B5563',  // gray-600
        },
        textLink: {
          light: '#2563EB', // blue-600
          dark: '#60A5FA',  // blue-400
        },
        textError: {
          light: '#DC2626', // red-600
          dark: '#F87171',  // red-400
        },
        textSuccess: {
          light: '#16A34A', // green-600
          dark: '#4ADE80',  // green-400
        },
        textWarning: {
          light: '#CA8A04', // yellow-600
          dark: '#FACC15',  // yellow-400
        },

        // Fundos
        backgroundPrimary: {
          light: '#FFFFFF', // white
          dark: '#111827',  // gray-900
        },
        backgroundSecondary: {
          light: '#F9FAFB', // gray-50
          dark: '#1F2937',  // gray-800
        },
        backgroundButtonPrimary: {
          light: '#3B82F6', // blue-500
          dark: '#1D4ED8',  // blue-700
        },
        backgroundButtonPrimaryHover: {
          light: '#2563EB', // blue-600
          dark: '#1E40AF',  // blue-800
        },
        backgroundError: {
          light: '#FEE2E2', // red-100
          dark: '#B91C1C',  // red-700
        },
        backgroundSuccess: {
          light: '#D1FAE5', // green-100
          dark: '#15803D',  // green-700
        },
        backgroundDisabled: {
          light: '#E5E7EB', // gray-200
          dark: '#374151',  // gray-700
        },

        // Bordas
        borderPrimary: {
          light: '#D1D5DB', // gray-300
          dark: '#4B5563',  // gray-600
        },
        borderFocus: {
          light: '#3B82F6', // blue-500
          dark: '#60A5FA',  // blue-400
        },
        borderError: {
          light: '#EF4444', // red-500
          dark: '#F87171',  // red-400
        },

        // Botões
        buttonPrimary: {
          light: '#2563EB', // blue-600
          dark: '#3B82F6',  // blue-500
        },
        buttonPrimaryHover: {
          light: '#3B82F6', // blue-500
          dark: '#60A5FA',  // blue-400
        },
        buttonSecondary: {
          light: '#D1D5DB', // gray-300
          dark: '#4B5563',  // gray-600
        },
        buttonSecondaryHover: {
          light: '#9CA3AF', // gray-400
          dark: '#6B7280',  // gray-500
        },
      },

      boxShadow: {
        cardLight: '0 1px 3px rgba(0, 0, 0, 0.05)',
        cardDark: '0 4px 6px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'hover', 'focus'],
      textColor: ['dark', 'hover', 'focus'],
      borderColor: ['dark', 'focus', 'hover'],
      boxShadow: ['dark'],
    },
  },  
  plugins: [],
}
