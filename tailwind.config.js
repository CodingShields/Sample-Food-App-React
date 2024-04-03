/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			scale: {
				105: "1.05",
				110: "1.1",
				115: "1.15",
				120: "1.2",
				125: "1.25",
			},
			colors: {
				orange: {
					400: "#FFA500",
					500: "#FF8C00",
					600: "#FF4500",
				},
			},
			animation: {
				fadeIn: "fadeIn .3s ease-in forwards",
				fadeOut: "fadeOut .3s ease-out forwards",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut: {
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
