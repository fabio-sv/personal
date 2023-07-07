<script lang="ts">
	import cn from 'classnames';

	export let href = '';
	export let variant: 'primary' | 'secondary' = 'primary';

	const className = cn(
		'font-open font-semibold text-xs sm:text-lg py-2 px-16 rounded-lg border-2 bg-light border-dark pointer mt-4 drop-shadow active:translate-y-[1px] active:translate-x-[1px] active:shadow-none',
		{
			'text-dark shadow-button': variant === 'primary',
			'hover:shadow-lg border-none hover:bg-light sm:bg-transparent': variant === 'secondary'
		}
	);
</script>

<a {href} class={className}><slot /></a>
