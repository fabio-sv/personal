<script lang="ts">
	import Images from '../lib/components/Images.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';

	import IconWhatsapp from 'svelte-icons-pack/si/SiWhatsapp';
	import IconGithub from 'svelte-icons-pack/si/SiGithub';
	// import Particles from '$lib/components/Particles.svelte';
	// import Particles from '$lib/components/Particles.svelte';
</script>

<!-- <Particles /> -->

<main class="text-dark font-open text-2xs text-center z-10 relative snap-y snap-proximity">
	<article class="w-full min-h-screen flex flex-col justify-center items-center px-8 snap-start">
		<h1 class="text-2xl font-bold">Fabio Sousa Vieira.</h1>
		<h2 class="text-lg font-medium">Software engineer</h2>

		<a
			href="/contact"
			class="font-open text-xs text-dark uppercase py-2 px-4 rounded-lg border-2 border-dark bg-light shadow-button pointer my-4"
			>Contact</a
		>
	</article>

	<section class="flex flex-col pb-8 px-8 border-y bg-light snap-start">
		<div class="flex justify-center items-center space-x-4 w-full">
			<hr class="h-0 w-16 border-b-slate-300 border-t-0 border" />
			<h2 class="text-lg my-6 font-semibold">About me</h2>
			<hr class="h-0 w-16 border-b-slate-300 border-t-0 border" />
		</div>

		<p>
			I am a 23 year old software engineer and problem solving fundi from Johannesburg, South
			Africa. <br />
			I'm really fucking good at what I do.
		</p>

		<div class="flex justify-center items-center space-x-4 w-full">
			<hr class="h-0 w-16 border-b-slate-300 border-t-0 border" />
			<h2 class="text-lg my-6 font-semibold">Skills</h2>
			<hr class="h-0 w-16 border-b-slate-300 border-t-0 border" />
		</div>

		<Images />
	</section>

	<footer class="flex justify-center items-center gap-x-4 w-full py-4 bg-light snap-end">
		<Icon src={IconWhatsapp} size="1rem" />
		<Icon src={IconGithub} size="1rem" />
	</footer>
</main>
