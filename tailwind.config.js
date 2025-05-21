/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
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
        'h1': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],  
        'h2': ['1.875rem', { lineHeight: '2.25rem' }],  
        'h3': ['1.5rem', { lineHeight: '2rem' }],      
        'body': ['1rem', { lineHeight: '1.5rem' }],   
      },
      colors: {
        textPrimary: {
          light: '#111827', 
        },
        textSecondary: {
          light: '#6B7280', 
        },
        textDisabled: {
          light: '#D1D5DB', 
        },
        textLink: {
          light: '#2563EB',
        },
        textError: {
          light: '#DC2626',
        },
        textSuccess: {
          light: '#16A34A', 
        },
        textWarning: {
          light: '#CA8A04', 
        },

        backgroundPrimary: {
          light: '#FFFFFF', 
        },
        backgroundSecondary: {
          light: '#F9FAFB', 
        },
        backgroundButtonPrimary: {
          light: '#3B82F6', 
        },
        backgroundButtonPrimaryHover: {
          light: '#2563EB', 
        },
        backgroundError: {
          light: '#FEE2E2', 
        },
        backgroundSuccess: {
          light: '#D1FAE5',
        },
        backgroundDisabled: {
          light: '#E5E7EB',
        },

        borderPrimary: {
          light: '#D1D5DB',
        },
        borderFocus: {
          light: '#3B82F6',
        },
        borderError: {
          light: '#EF4444',
        },

        buttonPrimary: {
          light: '#2563EB',
        },
        buttonPrimaryHover: {
          light: '#3B82F6', 
        },
        buttonSecondary: {
          light: '#D1D5DB', 
        },
        buttonSecondaryHover: {
          light: '#9CA3AF',
        },
      },

      boxShadow: {
        cardLight: '0 1px 3px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
      borderColor: ['focus', 'hover'],
    },
  },  
  plugins: [],
}
