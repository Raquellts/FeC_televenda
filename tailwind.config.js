/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{html,js}",
  "./components/**/*.{html,js}",
  "./src/**/*.{tsx, css}",
];
export const theme = {
  extend: {
    colors: {
      dark: { background: "#ffffff" },
      text: "#F3F5FA",
      subtext: "#112a46",
      background: "#1F2937",
      container: "#141c25",

      darkest: "#1F2937",
      accent: "#244aaa",

      primary: "#8ea4dc",
      secondary: "#708dd9",
      tertiary: "#4e6ebf",
    },
    spacing: {
      //porcentagem
      100: "100%",
      95: "95%",
      90: "90%",
      80: "80%",
      70: "70%",
      60: "60%",
      50: "50%",
      40: "40%",
      30: "30%",
      20: "20%",
      10: "10%",
      //viewport W e H
      "10vw": "10vw",
      "10vh": "10vh",
      "20vw": "20vw",
      "20vh": "20vh",
      "30vw": "30vw",
      "30vh": "30vh",
      "40vw": "40vw",
      "40vh": "40vh",
      "50vw": "50vw",
      "50vh": "50vh",
      "60vw": "60vw",
      "60vh": "60vh",
      "70vw": "70vw",
      "70vh": "70vh",
      "80vw": "80vw",
      "80vh": "80vh",
      "90vw": "90vw",
      "90vh": "90vh",
    },
  },
};

// Theme toggle function
let currentTheme = "light";

export const toggleTheme = () => {
  if (currentTheme === "light") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
    currentTheme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    currentTheme = "light";
  }
};
