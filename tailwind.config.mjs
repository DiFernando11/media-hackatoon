
import { animation, keyframes } from './src/styles/animation';
import { fontFamily, fontSize } from './src/styles/fonts';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'sm': '480px',
			},
			animation,
			keyframes,
		},
		fontFamily,
		fontSize
	},
	plugins: [],
}
