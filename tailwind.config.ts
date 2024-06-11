import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                "purple-0": "rgb(233, 213, 255)",
                "purple-1": "rgb(216, 180, 254)",
                "purple-2": "rgb(196, 181, 253)",
                "purple-3": "rgb(192, 132, 252)",
                "purple-4": "rgb(168, 85, 247)",
                "gray-0": "rgb(228, 228, 231)",
                "gray-1": "rgb(156, 163, 175)"
            }
        }
    },
    plugins: []
};
export default config;
