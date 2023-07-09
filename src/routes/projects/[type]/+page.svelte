<script>
	import { page } from '$app/stores';
	import H3 from '$lib/components/H3.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconLink from 'svelte-icons-pack/fi/FiExternalLink';
	import { projects } from '$lib/resources/projects';

	$: type = $page.params.type;

	$: config = (() => {
		const matched = projects.find((project) => project.urlName === type);

		if (!matched) {
			throw new Error('Someone is messing with the url');
		}

		return matched;
	})();
</script>

<PageLayout class="px-2">
	<IObs once class="mt-8"><H3>{config.name}</H3></IObs>

	<IObs once delay={50} class="mt-auto">
		<img src={config.logo.src} alt={config.name} class="max-h-32" />
	</IObs>

	<p class="text-xs sm:text-sm px-4 max-w-xl my-4">
		{#each [...config.description] as desc, i (i)}
			<IObs once delay={50 * i * 2 + 50}>
				{desc} <br />
			</IObs>
		{/each}
	</p>

	{#if config.url}
		<IObs once delay={200}>
			<a href={config.url} class="flex items-center gap-x-1 text-xs sm:text-sm underline">
				{config.name}
				<Icon src={IconLink} title="Link" />
			</a>
		</IObs>
	{/if}

	{#if config.repo}
		<IObs once delay={200}>
			<a href={config.repo} class="flex items-center gap-x-1 text-xs sm:text-sm underline">
				Repo
				<Icon src={IconLink} title="Link" />
			</a>
		</IObs>
	{/if}

	{#if config.wiki}
		<IObs once delay={200}>
			<a href={config.wiki} class="flex items-center gap-x-1 text-xs sm:text-sm underline">
				Wiki
				<Icon src={IconLink} title="Link" />
			</a>
		</IObs>
	{/if}

	<IObs><p class="text-gray-600 sm:text-xs mt-4">Technologies used:</p></IObs>
	<section class="font-semibold flex flex-wrap justify-center gap-2 max-w-sm mb-auto">
		{#each [...config.technologies] as tech, i (i)}
			<IObs once class="!w-fit">
				<div
					class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md"
					style={`color: ${tech.color}; background-color: ${tech.backgroundColor};`}
				>
					<Icon src={tech.icon} title={tech.name} color={tech.color} />
					{tech.name}
				</div>
			</IObs>
		{/each}
	</section>
</PageLayout>
