<script>
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconEye from 'svelte-icons-pack/fi/FiEye';
</script>

<PageLayout>
	<IObs><H1>Looking for something?</H1></IObs>
	<IObs delay={100}><H2>You've stumbled into a forbidden area.</H2></IObs>
	<IObs delay={200}><Icon src={IconEye} title="Eye" size="4rem" /></IObs>

	<IObs delay={2000}><Button href="/">Go home</Button></IObs>
</PageLayout>
