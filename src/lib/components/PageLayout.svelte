<script lang="ts">
	let className: string = '';

	export { className as class };
</script>

<article
	class={`w-full flex-grow flex flex-col justify-center items-center px-8 gap-y-4 snap-start ${className}`}
>
	<slot />
</article>
