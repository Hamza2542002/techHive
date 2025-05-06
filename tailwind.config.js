/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        accent: "#3B82F6",
        background: "#F3F4F6",
        textPrimary: "#1F2937",
        textSecondary: "#6B7280",
        borderColor: "#D1D5DB",
        success: "#10B981",
        danger: "#EF4444",
        warning: "#FACC15",
        dark: "#111827"
      },
      container :{
        center : true,
        padding : {
          DEFAULT  :"1rem",
          sm : "3rem",
          lg : "4rem",
          xl : "5rem",
          '2xl' : "6rem",
        },
        
      },
      active:{
        textColor : "#FFF",
      }
    },
  },
  plugins: [],
}

