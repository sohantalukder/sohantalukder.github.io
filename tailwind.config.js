/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                yellow1: "#FFB400",
                yellow2: "#FFB80D",
                black: "#2B2B2B",
                dark_background: "#2B2B2B",
                dark2: "#3A3B3C",
                dark1: "#242526",
                text: "#767676",
                light_background: "#F0F0F6",
                gray: "#FAFAFA",
            },
            boxShadow: {
                shadow1: "4px 0px 10px rgba(47, 122, 249, 0.1)",
            },
        },
    },
    plugins: [],
};
