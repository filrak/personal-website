/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#02C652',
				'primary': '#0e0e33',
				'primary-lighter': '#121243',
				'primary-lightest': '#1b1b59'
			}
		}
	},
	plugins: [],
}
