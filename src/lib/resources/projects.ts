import IconSvelte from 'svelte-icons-pack/si/SiSvelte';
import IconGithubActions from 'svelte-icons-pack/si/SiGithubactions';
import IconAPIGateway from 'svelte-icons-pack/si/SiAmazonapigateway';
import IconLambda from 'svelte-icons-pack/si/SiAwslambda';
import IconTerraform from 'svelte-icons-pack/si/SiTerraform';
import IconJavaScript from 'svelte-icons-pack/si/SiJavascript';
import IconSolidJS from 'svelte-icons-pack/si/SiSolid';
import IconCSharp from 'svelte-icons-pack/si/SiCsharp';
import IconUnity from 'svelte-icons-pack/si/SiUnity';
import IconAngular from 'svelte-icons-pack/si/SiAngular';
import IconReact from 'svelte-icons-pack/si/SiReact';
import IconPreact from 'svelte-icons-pack/si/SiPreact';
import IconVue from 'svelte-icons-pack/si/SiVuedotjs';
import IconWebpack from 'svelte-icons-pack/si/SiWebpack';
import IconHtml from 'svelte-icons-pack/si/SiHtml5';

type ProjectType = {
	urlName: string;
	name: string;
	logo: {
		src: string;
	};
	description: string[];
	url?: string;
	repo: string[];
	wiki?: string;
	technologies: {
		color: string;
		backgroundColor: string;
		icon: unknown;
		name: string;
	}[];
};

export const projects: ProjectType[] = [
	{
		urlName: 'freshcup',
		name: 'Freshcup',
		logo: {
			src: '/logos/freshcup.png'
		},
		description: [
			'Freshcup is an up and coming cafe and eatery that serves the best coffee in town, located at 231 Rondebult Road, Boksburg.',
			'I offered to build them a menu website as I felt the modern and stylish approach of the restaurant deserved a menu that matched.'
		],
		url: 'https://freshcup.vercel.app/',
		repo: ['https://github.com/FabioSV-cpp/freshcup'],
		technologies: [
			{
				color: '#ea580c',
				backgroundColor: 'rgb(234 88 12 / 0.2)',
				icon: IconSvelte,
				name: 'Svelte'
			},
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconGithubActions,
				name: 'Github Actions'
			}
		]
	},
	{
		urlName: 'socketing',
		name: 'Socketing',
		logo: {
			src: '/logos/socketing.svg'
		},
		description: [
			'Socketing is a serverless web sockets application, weird right?',
			'built to show how a web sockets application which intuitively requires a server, can be serverless.'
		],
		repo: ['https://github.com/FabioSVBBD/sockets'],
		technologies: [
			{
				color: '#a16207',
				backgroundColor: 'rgb(202 138 4 / 0.2)',
				icon: IconAPIGateway,
				name: 'AWS API Gateway'
			},
			{
				color: '#a16207',
				backgroundColor: 'rgb(202 138 4 / 0.2)',
				icon: IconLambda,
				name: 'AWS Lambda'
			},
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconTerraform,
				name: 'Terraform'
			},
			{
				color: '#eab308',
				backgroundColor: 'rgb(234 179 8 / 0.2)',
				icon: IconJavaScript,
				name: 'JavaScript'
			},
			{
				color: '#ea580c',
				backgroundColor: 'rgb(234 88 12 / 0.2)',
				icon: IconSvelte,
				name: 'Svelte'
			}
		]
	},
	{
		urlName: 'tetris',
		name: 'Tetris',
		logo: {
			src: '/logos/tetris.PNG'
		},
		description: [
			'Tetris is the result of me being bored on leave and wanting to try something new.',
			'I was doing research on the performance bottle necks that come along with React.js and kept hearing about this new frontend framework called Solid.js that has a very small learning curve if you know React.',
			'I decided it was a good idea to test out this performant framework by building a game and let Solid.js handle the DOM updates - it turned out really well.'
		],
		url: 'https://tetris-gold-nu.vercel.app/',
		repo: ['https://github.com/FabioSV-cpp/tetris'],
		technologies: [
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconSolidJS,
				name: 'Solid.js'
			}
		]
	},
	{
		urlName: 'glowb',
		name: 'Glowb',
		logo: {
			src: '/logos/glowb.PNG'
		},
		description: [
			'Glowb is the result of team effort and awesome colleagues in a Game Jam.',
			"The Game Jam constraints were 'only one' and 'lightshow' and we decided we're going to have one light source and that'll be the show. Try it out. it's fun",
			"We didn't win. We came second."
		],
		url: 'https://fabiosv.itch.io/glowb',
		repo: ['https://github.com/FabioSVBBD/LightBulb'],
		technologies: [
			{
				color: '#9333ea',
				backgroundColor: 'rgb(147 51 234 / 0.2)',
				icon: IconCSharp,
				name: 'C#'
			},
			{
				color: '#111827',
				backgroundColor: 'rgb(17 24 39 / 0.2)',
				icon: IconUnity,
				name: 'Unity'
			}
		]
	},
	{
		urlName: 'micromania',
		name: 'Micro Mania',
		logo: {
			src: '/logos/microfrontend.PNG'
		},
		description: [
			'The goal of this project was to figure out how Microfrontends work and if they would be a good fit for a project we were planning.',
			"This POC pushed the microfrontend idea to it's limits by getting different libraries and frameworks - who are not designed to interop - to work together. And they did.",
			'The idea is that you create a host app, and consume client apps using module federation. How this works is you expose a function in your app via a url, for example http://localhost:8081/remoteEntry.js can be consumed by the host, because it exposes a function that takes in a DOM node and attaches the app to that node. So the host calls the function and passes a dom node by reference, and the client attaches itself to the node.',
			"Ultimately, we did not go with this solution since there are all sorts of complexities involved - such as state sharing between the MFE's in this context can be quite challenging, type safety goes out the window, and consistent styling will almost always prove to be a headache."
		],
		repo: ['https://github.com/FabioSVBBD/mono-micro'],
		technologies: [
			{
				color: '#dc2626',
				backgroundColor: 'rgb(220 38 38 / 0.2)',
				icon: IconAngular,
				name: 'Angular'
			},
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconReact,
				name: 'React'
			},
			{
				color: '#ea580c',
				backgroundColor: 'rgb(234 88 12 / 0.2)',
				icon: IconSvelte,
				name: 'Svelte'
			},
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconSolidJS,
				name: 'Solid.js'
			},
			{
				color: '#9333ea',
				backgroundColor: 'rgb(147 51 234 / 0.2)',
				icon: IconPreact,
				name: 'Preact'
			},
			{
				color: '#16a34a',
				backgroundColor: 'rgb(22 163 74 / 0.2)',
				icon: IconVue,
				name: 'Vue'
			},
			{
				color: '#111827',
				backgroundColor: 'rgb(17 24 39 / 0.2)',
				icon: IconWebpack,
				name: 'Webpack'
			}
		]
	},
	{
		urlName: 'life',
		name: 'Life',
		logo: {
			src: '/logos/life.png'
		},
		description: [
			"Conway's Game of life is a zero player game meaning it's evolution is determined by it's initial state.",
			"Each cell is either alive or dead and a cell changes state based on the state of it's neighbours according to certain rules.",
			"What's interesting about Life is that it's Turing complete, meaning that if the game started with the correct initial conditions, the game would be able to compute and hence be able to do anything given an impractical amount of memory."
		],
		repo: ['https://github.com/FabioSVBBD/conways-game-of-life'],
		wiki: 'https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life',
		technologies: [
			{
				color: '#ea580c',
				backgroundColor: 'rgb(234 88 12 / 0.2)',
				icon: IconHtml,
				name: 'HTML'
			},
			{
				color: '#eab308',
				backgroundColor: 'rgb(234 179 8 / 0.2)',
				icon: IconJavaScript,
				name: 'JavaScript'
			}
		]
	},
	{
		urlName: 'cluedo',
		name: 'Cluedo',
		logo: {
			src: '/logos/cluedo.png',
		},
		description: [
			"2 Cluedo problems I wanted to solve.",
			"1. Eventually you run out of paper and so the need for a virtual sheet was needed.",
			"2. What is the most optimal way to ask questions such that you gain the most amount of information and minimize information leak to the other players.",
			"These 2 projects were meant to solve this issue."
		],
		url: 'https://cluedo-sheet-smoky.vercel.app/',
		repo: ['https://github.com/fabio-sv/cluedo', 'https://github.com/fabio-sv/cluedo-sheet'],
		technologies: [
			{
				color: '#ea580c',
				backgroundColor: 'rgb(234 88 12 / 0.2)',
				icon: IconSvelte,
				name: 'Svelte'
			},
			{
				color: '#eab308',
				backgroundColor: 'rgb(234 179 8 / 0.2)',
				icon: IconJavaScript,
				name: 'JavaScript'
			}
		]
	},
	{
		urlName: 'terminal',
		name: 'Termiwebsite',
		logo: {
			src: '/logos/bash.png',
		},
		description: [
			"Ever seen those cool websites people make that look like a shell?",
			"Yea I wanted to make my own"
		],
		url: 'https://termiwebsite.vercel.app/',
		repo: ['https://github.com/fabio-sv/termiwebsite'],
		technologies: [
			{
				color: '#2563eb',
				backgroundColor: 'rgb(37 99 235 / 0.2)',
				icon: IconSolidJS,
				name: 'Solid.js'
			}
		]
	},
	{
		urlName: "sandy",
		name: "Sandy",
		logo: {
			src: '/logos/sandy.png',
		},
		description: [
			"Physics simulations go brr"
		],
		url: 'https://sand-three.vercel.app/',
		repo: ["https://github.com/fabio-sv/sand"],
		technologies: [
			{
				color: '#eab308',
				backgroundColor: 'rgb(234 179 8 / 0.2)',
				icon: IconJavaScript,
				name: 'JavaScript'
			},
		]
	}
];
