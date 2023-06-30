<script>
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
</script>

<PageLayout>
	<IObs>
		<H1>Thank you!</H1>
	</IObs>
	<IObs delay={200}>
		<H2>I will be in touch with you shortly.</H2>
	</IObs>
</PageLayout>
