<script lang="ts">
	import { getRandomNiceColor, getRandomRGBAHexColor } from '$lib/resources/utils';
	import Particles from 'svelte-particles';
	import type { ISourceOptions, Engine } from 'tsparticles-engine';
	import { loadTrianglesPreset } from 'tsparticles-preset-triangles';

	const randomColor = getRandomNiceColor();

	const particleConfig: ISourceOptions = {
		preset: 'triangles',
		autoPlay: true,
		fullScreen: {
			enable: true,
			zIndex: 0
		},
		detectRetina: true,
		duration: 0,
		fpsLimit: 120,
		interactivity: {
			detectsOn: 'window',
			events: {
				onHover: {
					enable: true,
					parallax: {
						enable: true,
						force: 12,
						smooth: 30
					}
				},
				resize: {
					delay: 0,
					enable: true
				}
			}
		},
		background: {
			color: {
				value: '#FAFAFA'
			}
		},
		particles: {
			color: {
				value: '#252525'
			},
			move: {
				center: {
					x: 20,
					y: 20,
					mode: 'percent',
					radius: 0
				},
				enable: true,
				speed: 0.5,
				straight: false,
				warp: false
			},
			number: {
				density: {
					enable: true,
					width: 1920,
					height: 1080
				},
				limit: 0,
				value: 400
			},
			opacity: {
				value: 0.2
			},
			reduceDuplicates: false,
			shape: {
				type: ''
			},
			size: {
				random: true
			},
			life: {
				count: 0,
				delay: {
					value: 0,
					sync: false
				},
				duration: {
					value: 0,
					sync: false
				}
			},
			line_linked: {
				enable: true,
				distance: 100,
				color: randomColor,
				opacity: 0.05,
				frequency: 2,
				width: 1
			},
			destroy: {
				split: {
					count: 1,
					factor: {
						value: 3
					},
					rate: {
						value: {
							min: 8,
							max: 15
						}
					},
					sizeOffset: true
				}
			}
		},
		pauseOnBlur: false,
		pauseOnOutsideViewport: false,
		smooth: true,
		zLayers: 1
	};

	let particlesInit = async (engine: Engine) => {
		await loadTrianglesPreset(engine);
	};
</script>

<Particles options={particleConfig} {particlesInit} id="huge" />
