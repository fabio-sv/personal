<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Project from '$lib/components/Project.svelte';
	import { projects } from '$lib/resources/projects';

	let carousel: HTMLDivElement | undefined;
</script>

<PageLayout class="px-0">
	<IObs once><H1>Projects</H1></IObs>

	<div
		bind:this={carousel}
		class="flex overflow-x-auto w-full gap-x-2 mt-12 [&>:first-child]:ml-auto [&>:last-child]:mr-auto snap-x snap-mandatory px-2"
	>
		{#each projects as project, i (i)}
			<Project {project}>
				<p class="text-3xl" style="color: {project.backgroundColor};">
					{project.name}
				</p>
			</Project>
		{/each}
	</div>
</PageLayout>
