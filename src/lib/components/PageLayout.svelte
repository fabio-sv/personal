<script lang="ts">
	let className = '';

	export { className as class };
</script>

<article
	class={`w-full flex-grow flex flex-col justify-center items-center px-2 gap-y-4 snap-start ${className}`}
>
	<slot />
</article>
