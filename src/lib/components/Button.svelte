<script lang='ts'>
	export let href: string = '';
</script>

<a
	{href}
	class="font-open text-xs text-dark uppercase py-2 px-4 rounded-lg border-2 border-dark bg-light shadow-button pointer my-4"
	><slot /></a
>
