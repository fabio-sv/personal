<script lang="ts">
	import { onMount } from 'svelte';

	export let once: boolean = false;
	export let delay: number = 0;

	let intersecting = false;
	let container: HTMLDivElement;

	onMount(() => {
		if (typeof IntersectionObserver !== 'undefined') {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						const child = entry.target.children[0];

						if (!child) {
							throw new Error('Malformed IObs');
						}

						if (entry.isIntersecting) {
							child.classList.add('show-animation');
						} else if (!once) {
							child.classList.remove('show-animation');
						}
					});
				},
				{
					threshold: 0.9
				}
			);

			observer.observe(container);
			return () => observer.unobserve(container);
		}
	});
</script>

<div bind:this={container}>
	<div class="transitioning-div hide-animation" style="--delay: {delay}ms">
		<slot {intersecting} />
	</div>
</div>

<style>
	.transitioning-div {
		transition-delay: var(--delay);
	}
</style>
