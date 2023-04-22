const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{ts,tsx,jsx,js}"],
    theme: {
        screens: {
            sm: "360px",
            md: "768px",
            lg: "1440px",
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
                grayscale: {
                    white: "#FFFFFF",
                    gainsboro: "#E2E2E2",
                    light: "#BFBFBF",
                    silver: "#686868",
                    dark: "#4A484B",
                    gray: "#3D3B3F",
                    dim: "#363437",
                    iron: "#302E31",
                    black: "#211F21",
                },
            },
            animation: {
                "expand-slow": "expand 5s ease-in-out forwards",
            },
            keyframes: {
                expand: {
                    "0%": { transform: "scale(0)" },
                    "100%": { transform: "scale(1)" },
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                ".h-screen": {
                    height: "100dvh",
                },
            });
        }),
    ],
};
