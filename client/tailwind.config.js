module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 3s ease-in-out',
        'fade-in-slide-up': 'fadeInSlideUp 5s ease-in-out',
      },
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 0.7 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 0.5, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}