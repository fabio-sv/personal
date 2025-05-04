<script lang="ts">
	import { fade } from 'svelte/transition';

	export let atBottom: boolean;

	const scrollDown = () => {
		window.scroll({ top: window.innerHeight, behavior: 'smooth' });
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions a11y-no-static-element-interactions -->
{#if !atBottom}
	<svg
		transition:fade={{ duration: 200 }}
		on:click={scrollDown}
		on:keyup={scrollDown}
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6 absolute bottom-4 drop-shadow animate-bounce cursor-pointer"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
		/>
	</svg>
{/if}
