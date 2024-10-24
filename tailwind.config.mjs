
import { animation, keyframes } from './src/styles/animation';
import { fontFamily, fontSize } from './src/styles/fonts';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',     './public/index.html'] ,
	theme: {
		extend: {
			screens: {
				'sm': '480px',
				'md': '620px'
			},
			animation,
			keyframes,
		},
		fontFamily,
		fontSize
	},
	plugins: [],
}
