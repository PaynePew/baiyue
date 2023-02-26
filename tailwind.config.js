/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx,js}"],
    theme: {
        screens: {
            sm: "360px",
            md: "768px",
            large: "1440px",
        },
        fontFamily: {
            sans: ["Noto Sans TC", "sans-serif"],
            ga: ["Gafata", "serif"],
        },
        extend: {
            colors: {
                primary: "#E5AE00",
                secondary: {
                    spotlight: "#FFCA6D",
                    light: "#FFE8BE",
                },
            },
        },
    },
    plugins: [],
};
