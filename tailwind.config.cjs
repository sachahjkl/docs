/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "InterVariable", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				cupcake: {
					...require("daisyui/src/theming/themes")["cupcake"],
					"base-100": "#ECE3CA",
				},
			},
		],
	},
}
