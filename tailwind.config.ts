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
				open: ['Open Sans', 'sans-serif'],
				agdasima: ['Agdasima', 'sans-serif'],
				orbitron: ['Orbitron', 'sans-serif']
			},
			gridTemplateColumns: {
				timeline: '1fr 2rem 1fr'
			},
			colors: {
				light: '#FAFAFA',
				dark: '#252525',
				grey: '#666'
			},
			boxShadow: {
				button: '3px 3px #252525',
				input: '4px 4px #252525'
			},
			width: {
				input: 'min(100%,30rem)'
			}
		}
	},
	plugins: []
} satisfies Config;
