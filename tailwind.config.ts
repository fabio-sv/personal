import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontSize: {
				'2xs': '10px',
				'3xs': '8px'
			},
			fontFamily: {
				open: ['"Open Sans"', 'sans-serif'],
				agdasima: ['"Agdasima"', 'sans-serif']
			},
			colors: {
				light: '#FAFAFA',
				dark: '#252525'
			},
			boxShadow: {
				button: '3px 3px #252525'
			}
		}
	},
	plugins: []
} satisfies Config;
