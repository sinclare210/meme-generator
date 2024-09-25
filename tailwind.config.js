/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:["Poppins","san-seriff"],
        bangers: ["Bangers", "san-seriff"]
      },
      colors:{
        purps:["#672280"],
        purpf:["#A626D3"]
      },
    },
  },
  plugins: [],
}

