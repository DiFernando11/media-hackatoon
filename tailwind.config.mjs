/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
			  'sm': '480px',  // Agrega un nuevo breakpoint personalizado
			},
		  },
	},
	plugins: [],
}
