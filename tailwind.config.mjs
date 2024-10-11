/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
			  'sm': '480px',
			},
			animation: {
				spin: 'spin 5s linear infinite',
			  },
			  keyframes: {
				spin: {
				  '0%': { transform: 'rotate(0deg)' },
				  '100%': { transform: 'rotate(360deg)' },
				},
			  },
	},
	},
	plugins: [],
}
