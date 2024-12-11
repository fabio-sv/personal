<script lang="ts">
	import { icons } from '$lib/resources/icons';
	import IObs from './IObs.svelte';
	import ImageText from './ImageText.svelte';
</script>

<section class="grid grid-cols-4 sm:grid-cols-5 gap-y-4 gap-x-5 sm:max-w-lg">
	{#each icons as icon, i (i)}
		<IObs delay={i * 25 + (i % 5) * 100} once>
			<ImageText {...icon} />
		</IObs>
	{/each}
</section>
