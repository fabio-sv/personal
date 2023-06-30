<script>
	import Footer from '$lib/components/Footer.svelte';
	import ParticleEffect from '$lib/components/ParticleEffect.svelte';
	import '../app.css';
</script>

<ParticleEffect />

<main class="text-dark font-open text-2xs text-center z-10 relative snap-y snap-proximity min-h-screen flex flex-col">
	<slot />
	<Footer />
</main>
