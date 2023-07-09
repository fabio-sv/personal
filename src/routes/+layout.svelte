<script>
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import Footer from '$lib/components/Footer.svelte';
	import ParticleEffect from '$lib/components/ParticleEffect.svelte';
	import '../app.css';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<main
	class="text-dark font-open text-2xs text-center z-10 relative snap-y snap-proximity min-h-screen flex flex-col"
>
	<slot />
	<Footer />
</main>

<ParticleEffect />
