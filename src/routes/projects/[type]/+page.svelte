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

<PageLayout>
	<H3>{config.name}</H3>

	<img src={config.logo.src} alt={config.name} class="max-h-32 mt-auto" />

	<p class="text-xs px-4 max-w-xl">
		{#each [...config.description] as desc, i (i)}
			{desc} <br />
		{/each}
	</p>

	{#if config.url}
		<a href={config.url} class="flex items-center gap-x-1 text-xs underline">
			{config.name}
			<Icon src={IconLink} title="Link" />
		</a>
	{/if}

	{#if config.repo}
		<a href={config.repo} class="flex items-center gap-x-1 text-xs underline">
			Repo
			<Icon src={IconLink} title="Link" />
		</a>
	{/if}

	{#if config.wiki}
		<a href={config.wiki} class="flex items-center gap-x-1 text-xs underline">
			Wiki
			<Icon src={IconLink} title="Link" />
		</a>
	{/if}

	<p class="text-gray-600">Technologies used:</p>
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
