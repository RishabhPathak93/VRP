module.exports = {
  darkMode: 'class', // Ensure dark mode is set to 'class'
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '7.5xl': '90rem', // You can adjust the value to your preference
      },
      colors: {
        customPurple: ' #0E003F', // Define your custom color here
      },
    },
    
  },
  plugins: [],
};
