<script>
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/H1.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import Input from '$lib/components/Input.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout>
	<IObs>
		<H1>Get in touch!</H1>
	</IObs>

	<IObs delay={200}>
		<Input placeholder="name" />
	</IObs>

	<IObs delay={200}><Input placeholder="email" /></IObs>

	<IObs delay={400}>
		<Button href="/thank-you">Submit</Button>
	</IObs>
</PageLayout>
