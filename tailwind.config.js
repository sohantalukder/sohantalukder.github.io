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
                bgPrimary: "#18191A",
                gray2: "#f5f5f5",
            },
            boxShadow: {
                shadow1: "4px 0px 10px rgba(47, 122, 249, 0.1)",
            },
            screens: {
                xs: "375px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1152px",
                "2xl": "1280px",
                "3xl": "1360px",
                "4xl": "1366px",
                "5xl": "1400px",
                "6xl": "1440px",
                "7xl": "1600px",
                "8xl": "1680px",
                "9xl": "1920px",
            },
        },
    },
    plugins: [],
};
