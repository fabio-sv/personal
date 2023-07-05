<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconLink from 'svelte-icons-pack/fi/FiExternalLink';

	export let href: string;
	export let image: string;
	export let color = '#252525';
</script>

<section
	class="h-[26rem] w-48 min-w-[12rem] bg-cover bg-center backdrop-blur-lg rounded-2xl border snap-center"
	style={`background-image: url('${image}')`}
>
	<div
		class="flex justify-center items-center gap-x-2 w-full h-full backdrop-blur-sm rounded-2xl font-agdasima text-center"
	>
		<slot />
		<a {href}><Icon src={IconLink} title="Link" size="1.1rem" {color} /></a>
	</div>
</section>
