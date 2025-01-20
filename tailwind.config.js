import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    safelist: ["resize-none", "sr-only"],

    theme: {
        extend: {
            colors: {
                primary: {
                    25: "#f8fafd",
                    50: "#f2f6fc",
                    100: "#e2eaf7",
                    200: "#ccdbf1",
                    300: "#a8c4e8",
                    400: "#7fa5db",
                    500: "#6087d1",
                    600: "#4c6ec4",
                    700: "#4059ad",
                    800: "#3b4c92",
                    900: "#334275",
                    950: "#232b48",
                },
                accent: {
                    50: "#fef9ec",
                    100: "#fcedc9",
                    200: "#f8d98f",
                    300: "#f4b942",
                    400: "#f2a82d",
                    500: "#ec8714",
                    600: "#d1630e",
                    700: "#ad4510",
                    800: "#8d3513",
                    900: "#742d13",
                    950: "#421506",
                },
                secondary: {
                    50: "#effaf6",
                    100: "#d8f3e7",
                    200: "#b5e5d3",
                    300: "#97d8c4",
                    400: "#51b69a",
                    500: "#2f9a81",
                    600: "#1f7c67",
                    700: "#196355",
                    800: "#164f44",
                    900: "#134139",
                    950: "#0a2420",
                },
            },
            fontFamily: {
                sans: ["Fira Sans", ...defaultTheme.fontFamily.sans],
            },
            boxShadow: {
                px: "inset 0 1px 0 #b8dcff",
                "inset-px": "inset 0 1px 0 rgba(255,255,255,0.6)",
                highlight: "inset 0 1px 0 rgba(255,255,255,0.4)",
                highlighter: "inset 0 1px 0 rgba(255,255,255,0.2)",
                inset: "inset 0 2px 0 rgba(0,0,0,0.1)",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        maxWidth: null,
                        pre: {
                            background: "transparent",
                            padding: 0,
                            borderWidth: "1px",
                            borderColor: "var(--tw-prose-quote-borders)",
                        },
                    },
                },
            }),
            keyframes: {
                shake: {
                    "0%": {
                        transform: "translateX(0rem) rotate(0deg)",
                    },
                    "25%": {
                        transform: "translateX(-0.25rem) rotate(-20deg)",
                    },
                    "75%": {
                        transform: "translateX(0.25rem)  rotate(20deg)",
                    },
                    "100%": {
                        transform: "translateX(0rem)  rotate(0deg)",
                    },
                },
            },
            animation: {
                shake: "shake .3s both",
            },
        },
    },

    plugins: [forms, require("@tailwindcss/typography")],
};
