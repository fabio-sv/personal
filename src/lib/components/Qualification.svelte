<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconLink from 'svelte-icons-pack/fi/FiExternalLink';

	export let icon: any;
	export let alt: string;
	export let title: string;
	export let subtext: string;
	export let href: string;
</script>

<div class="flex justify-between items-center gap-x-4 w-full text-left">
	<Icon src={icon} title={alt} size="2rem" />
	<aside class="w-[90%]">
		<p class="text-xs">{title}</p>
		<p class="flex items-center justify-start text-right gap-x-1 text-dark/90 text-2xs">
			{subtext}
		</p>
	</aside>
	<a {href} target="blank" rel="noreferrer"><Icon src={IconLink} title="link" size="1rem" /></a>
</div>
