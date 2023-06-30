<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';

	export let icon: unknown;
	export let name = '';
</script>

<div class="image-box flex flex-col justify-center items-center">
	<Icon src={icon} size="0.75rem" className="inline drop-shadow" />
	<p class="text-3xs text-dark font-semibold w-fit text-center">{name}</p>
</div>
