<script lang="ts">
	import H2 from './H2.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import Calendar from 'svelte-icons-pack/fi/FiCalendar';
	import Pin from 'svelte-icons-pack/fi/FiMapPin';
	import IObs from './IObs.svelte';

	type Option = 'left' | 'right';

	export let option: Option = 'left';
	export let title: string;
	export let description: string;
	export let dates: string;
	export let location: string;
</script>

{#if option === 'left'}
	<IObs once class="w-full"><H2 class="text-right w-full pr-1">{title}</H2></IObs>
	<div class="w-8 h-8 rounded-full border-2 border-light bg-dark drop-shadow-sm" />
	<div />

	<IObs once>
		<div class="text-xs text-right py-2 w-full">
			<p class="font-medium pl-1">{description}</p>

			<mark
				class="flex items-center justify-end text-left gap-x-1 bg-transparent text-dark/90 text-2xs pt-2"
			>
				{dates}
				<Icon src={Calendar} title="calendar" className="inline" size="0.8rem" />
			</mark>

			<mark
				class="flex items-center justify-end text-left gap-x-1 bg-transparent text-dark/90 text-2xs"
			>
				{location}
				<Icon src={Pin} title="Location" className="inline" size="0.8rem" />
			</mark>
		</div>
	</IObs>
	<div class="w-[2px] h-full bg-dark drop-shadow-sm tranisition-all" />
	<div />
{:else}
	<div />
	<div class="w-8 h-8 rounded-full border-2 border-light bg-dark drop-shadow-sm" />
	<IObs once class="w-full"><H2 class="text-left w-full pl-1">{title}</H2></IObs>

	<div />
	<div class="w-[2px] h-full bg-dark drop-shadow-sm tranisition-all" />
	<IObs once>
		<div class="text-xs text-left py-2 w-full">
			<p class="font-medium pr-1">{description}</p>

			<mark
				class="flex items-center justify-start text-right gap-x-1 bg-transparent text-dark/90 text-2xs pt-2"
			>
				<Icon src={Calendar} title="calendar" className="inline" size="0.8rem" />
				{dates}
			</mark>

			<mark
				class="flex items-center justify-start text-right gap-x-1 bg-transparent text-dark/90 text-2xs"
			>
				<Icon src={Pin} title="Location" className="inline" size="0.8rem" />
				{location}
			</mark>
		</div>
	</IObs>
{/if}
