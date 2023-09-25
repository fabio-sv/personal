<script lang="ts">
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	import H2 from '$lib/components/H2.svelte';
	import H3 from '$lib/components/H3.svelte';
	import Button from '$lib/components/Button.svelte';
	import BouncingArrow from '$lib/components/BouncingArrow.svelte';
	import Images from '$lib/components/Images.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';

	let atBottom = false;

	onMount(() => {
		const onscroll = () =>
			(atBottom =
				window.innerHeight + Math.round(window.scrollY) >= 0.9 * document.body.offsetHeight);

		onscroll();
		window.addEventListener('scroll', onscroll);
	});
</script>

<PageLayout class="min-h-screen relative px-2">
	<svg fill="#252525" class="h-12 sm:h-auto">
		<text
			x="50%"
			y="50%"
			dy=".35em"
			text-anchor="middle"
			class="text-6xl sm:text-9xl font-light sm:font-medium"
		>
			Fabio Sousa Vieira
		</text>
	</svg>

	<!-- <H1>Fabio Sousa Vieira</H1> -->
	<IObs once delay={5000}>
		<Typewriter
			cursor
			mode="loop"
			interval={20}
			unwriteInterval={20}
			wordInterval={1000}
			--cursor-color="#252525"
		>
			<H2>Software engineer</H2>
			<H2>Web developer</H2>
			<H2>Full stack developer</H2>
			<H2>Cloud engineer</H2>
			<H2>Problem solver</H2>
			<H2>Bug fixer</H2>
			<H2>Tech enthusiast</H2>
		</Typewriter>
	</IObs>

	<IObs once delay={5150}>
		<div class="flex flex-col sm:flex-row-reverse sm:mt-12 gap-x-4">
			<Button href="/cv">View my CV</Button>
			<Button href="/projects" variant="secondary">Side projects</Button>
		</div>
	</IObs>

	<BouncingArrow {atBottom} />
</PageLayout>

<section
	class="flex flex-col pb-8 px-8 border-t bg-light snap-start items-center className='drop-shadow'"
>
	<IObs once>
		<H3>About me</H3>
	</IObs>

	<IObs once>
		<p class="text-xs sm:text-sm">
			I am a 23 year old software engineer and problem solving
			<a
				class="relative underline italic"
				href="https://en.wiktionary.org/wiki/fundi#:~:text=fundi%20(plural%20fundis),a%20particular%20skill%3B%20an%20expert."
				target="_blank"
				rel="noreferrer"
			>
				fundi
			</a>
			from Johannesburg, South Africa. <br />
			I'm really good at what I do.
		</p>
	</IObs>

	<IObs once>
		<H3>Skills</H3>
	</IObs>

	<Images />
</section>

<style>
	svg {
		font-family: Agdasima;
		width: 100vw;
	}
	svg text {
		animation: stroke 5s;
		stroke-width: 0;
		stroke: #252525;
		color: #252525;
	}
	@keyframes stroke {
		0% {
			fill: #25252500;
			stroke: #252525;
			stroke-dashoffset: 25%;
			stroke-dasharray: 0 50%;
			stroke-width: 1;
		}
		70% {
			fill: #25252500;
			stroke: #252525;
		}
		80% {
			fill: #25252500;
			stroke: #252525;
			stroke-width: 1;
		}
		100% {
			fill: #252525;
			stroke: #25252500;
			stroke-dashoffset: -25%;
			stroke-dasharray: 50% 0;
			stroke-width: 1;
		}
	}
</style>
