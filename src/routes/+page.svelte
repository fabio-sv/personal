<script lang="ts">
	import { onMount } from 'svelte';

	import H1 from '$lib/components/H1.svelte';
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
			(atBottom = window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight);

		onscroll();
		window.addEventListener('scroll', onscroll);
	});
</script>

<PageLayout class="min-h-screen relative">
	<IObs once>
		<H1>Fabio Sousa Vieira.</H1>
		<H2>Professional Software engineer</H2>

		<Button href="/contact">Contact</Button>
	</IObs>
	<BouncingArrow {atBottom} />
</PageLayout>

<section class="flex flex-col pb-8 px-8 border-t bg-light snap-start items-center">
	<IObs once>
		<H3>About me</H3>
	</IObs>

	<IObs once>
		<p>
			I am a 23 year old software engineer and problem solving fundi from Johannesburg, South
			Africa. <br />
			I'm really good at what I do.
		</p>
	</IObs>

	<IObs once>
		<H3>Skills</H3>
	</IObs>

	<Images />
</section>
