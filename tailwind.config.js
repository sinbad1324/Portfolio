/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "d-blue-1": " #1a212d",
        "d-blue-2": " #1b2533",
        "d-blue-3": " #1a3256",
        "d-blue-4": " #193b6e",
        "d-blue-5": " #1e457f",
        "d-blue-6": " #254f8e",
        "d-blue-7": " #2c5ba0",
        "d-blue-8": " #3168ba",
        "d-blue-9": " #106ae0",
        "d-blue-10": " #2b61b2",
        "d-blue-11": " #83b8ff",
        "d-blue-12": " #d0e3ff",

        "d-vert-1": " #002921",
        "d-vert-2": " #002f27",
        "d-vert-3": " #00392f",
        "d-vert-4": " #004035",
        "d-vert-5": " #00483b",
        "d-vert-6": " #005243",
        "d-vert-7": " #00614f",
        "d-vert-8": " #007b66",
        "d-vert-9": " #008971",
        "d-vert-10": " #00967d",
        "d-vert-11": " #00d3b4",
        "d-vert-12": " #d4f6ed",

        "l-blue-1": " #eeeff1",
        "l-blue-2": " #e6eaf1",
        "l-blue-3": " #dae3ef",
        "l-blue-4": " #cadaf3",
        "l-blue-5": " #b8d0f3",
        "l-blue-6": " #a3c1ef",
        "l-blue-7": " #89afe8",
        "l-blue-8": " #6496e1",
        "l-blue-9": " #106ae0",
        "l-blue-10": " #005bd0",
        "l-blue-11": " #0055c9",
        "l-blue-12": " #0d3164",

        "l-vert-1": " #daf6ee",
        "l-vert-2": " #b9faea",
        "l-vert-3": " #a9f2e0",
        "l-vert-4": " #96ebd7",
        "l-vert-5": " #87e4ce",
        "l-vert-6": " #65dfc6",
        "l-vert-7": " #56d4ba",
        "l-vert-8": " #00c5a6",
        "l-vert-9": " #009178",
        "l-vert-10": " #00856e",
        "l-vert-11": " #006452",
        "l-vert-12": " #00291f",
      },
      fontSize: {
        clamp: "clamp(1rem, 5vw, 3rem)",
        "clamp-1": "clamp(.75rem, 2.5vw, 1.75rem)",
        "clamp-5": "clamp(1rem, 5vw, 4rem)",
        "clamp-2": "clamp(.2rem, 2vw, 1.2rem)",
      },

      backgroundImage: {
        "d-color":
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(1,10,28,1) 71%, rgba(1,22,64,1) 91%, rgba(0,32,96,1) 100%)",
      },
      animation: {
        click: "click 0.2s ease-in-out forwards",
        YApear: "YApear 0.4s ease-in-out forwards",
        Ydispear: "YdisApear 0.4s ease-in-out forwards",
      },
      keyframes: {
        click: {
          "0%, 100%": { transform: "scale(1.2)" },
          "50%": { transform: "scale(1.3)" },
        },

        YApear: {
          "0%, 40%": { transform: "translateY(200px)" },
          "100%": { transform: "translateY(0)" },
        },
        YdisApear: {
          "0%, 40%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200px)" },
        },
      },
    },
  },
  plugins: [],
};
