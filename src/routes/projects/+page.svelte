<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Project from '$lib/components/Project.svelte';

	let carousel: HTMLDivElement | undefined;
	let distanceScrolled: number = 0;

	type ProjectType = {
		href: string;
		image: string;
		title: {
			smaller?: boolean;
			text: string;
		};
		color?: string;
	};

	const projects: ProjectType[] = [
		{
			href: '/projects/freshcup',
			image: '/images/freshcup.PNG',
			title: {
				text: 'Freshcup'
			}
		},
		{
			href: '/projects/socketing',
			image: '/images/sockets.PNG',
			title: {
				text: 'Socketing'
			}
		},
		{
			href: '/projects/tetris',
			image: '/images/tetris.PNG',
			title: {
				text: 'Tetris'
			}
		},
		{
			href: '/projects/glowb',
			image: '/images/glowb.jpeg',
			title: {
				text: 'Glowb'
			},
			color: '#FAFAFA'
		},
		{
			href: '/projects/micromania',
			image: '/images/mono-micro.PNG',
			title: {
				smaller: true,
				text: 'Micro Mania'
			}
		},
		{
			href: '/projects/life',
			image: '/images/life.PNG',
			title: {
				text: 'Life'
			}
		},
		{
			href: '/projects/cluedo',
			image: '/images/cluedo.png',
			title: {
				text: 'Cluedo'
			}
		},
		{
			href: '/projects/terminal',
			image: '/images/terminal.png',
			title: {
				text: 'Termiwebsite'
			},
			color: '#FAFAFA'
		}
	];

	$: console.log({
		distanceScrolled,
		scrollWidth: carousel?.scrollWidth,
		perc: (distanceScrolled / (carousel?.scrollWidth || 1)) * 100,
		percEnd: ((distanceScrolled + window.innerWidth) / (carousel?.scrollWidth || 1)) * 100
	});
</script>

<PageLayout class="px-0">
	<IObs once><H1>Projects</H1></IObs>

	<div
		bind:this={carousel}
		on:scroll={() => (distanceScrolled = carousel?.scrollLeft || 0)}
		class="flex overflow-x-auto w-full gap-x-2 mt-12 [&>:first-child]:ml-auto [&>:last-child]:mr-auto snap-x snap-mandatory px-2"
	>
		{#each projects as project, i (i)}
			<Project href={project.href} image={project.image} color={project.color}>
				<p class={project.title.smaller ? 'text-2xl' : 'text-3xl'} style="color: {project.color};">
					{project.title.text}
				</p>
			</Project>
		{/each}
	</div>

	<!-- <div class="indicator h-1 w-8" /> -->
</PageLayout>

<style>
	/* .indicator {
		background: linear-gradient(to right, #ff0000 50%, blue 50%);
	} */
</style>
