<script lang="ts">
	export let href: string = '';
</script>

<a
	{href}
	class="font-open font-semibold text-xs text-dark uppercase py-2 px-16 rounded-lg border-2 border-dark bg-light shadow-button pointer my-4 drop-shadow active:translate-y-[1px] active:translate-x-[1px] active:shadow-none"
	><slot /></a
>
