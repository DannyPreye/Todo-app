/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "primary-blue": "#3556AB",
                "secondary-blue": "#071D55",
                "primary-red": "#720D0D",
                "secondary-red": "#AB3535",
                "primary-green": "#9EB031",
                "secondary-green": "#49C25D",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
