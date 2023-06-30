<script>
	import Button from '$lib/components/Button.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import Input from '$lib/components/Input.svelte';
</script>

<main class="text-dark font-open text-2xs text-center z-10 relative snap-y snap-proximity">
	<article
		class="w-full min-h-screen flex flex-col justify-center items-center px-8 gap-y-4 snap-start"
	>
		<IObs>
			<h1 class="text-2xl font-bold">Get in touch!</h1>
		</IObs>

		<IObs delay={200}>
			<Input placeholder="name" />
		</IObs>

		<IObs delay={200}><Input placeholder="email" /></IObs>

		<div class="mt-4" />

		<IObs delay={400}>
			<Button href="/thank-you">Submit</Button>
		</IObs>
	</article>
</main>
