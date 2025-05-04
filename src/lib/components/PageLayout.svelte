<script lang="ts">
	let className = '';

	export { className as class };
</script>

<article
	class={`w-full flex-grow flex flex-col justify-center items-center gap-y-4 snap-start my-8 ${className}`}
>
	<slot />
</article>
