import nextui from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: "#3A83A1",
				black: "#1e1e1e",
				black90: "#383838",
				black80: "#5B5B5B",
				grey: "#969696",
        lightgrey:"#b5b5b5"
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
