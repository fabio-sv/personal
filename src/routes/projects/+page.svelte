<script lang="ts">
	import H1 from '$lib/components/H1.svelte';
	import IObs from '$lib/components/IObs.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import Project from '$lib/components/Project.svelte';
</script>

<PageLayout class="px-0">
	<IObs once><H1>Projects</H1></IObs>

	<div
		class="flex overflow-x-auto w-full gap-x-2 mt-12 [&>:first-child]:ml-auto [&>:last-child]:mr-auto snap-x snap-mandatory px-2"
	>
		<IObs once>
			<Project href="/projects/freshcup" image="/images/freshcup.PNG">
				<p class="text-3xl">Freshcup</p>
			</Project>
		</IObs>

		<IObs once>
			<Project href="/projects/socketing" image="/images/sockets.PNG">
				<p class="text-3xl">Socketing</p>
			</Project>
		</IObs>

		<IObs once>
			<Project href="projects/tetris" image="/images/tetris.PNG">
				<p class="text-3xl">Tetris</p>
			</Project>
		</IObs>

		<IObs once>
			<Project href="/projects/glowb" image="/images/glowb.jpeg" color="#FAFAFA">
				<p class="text-3xl text-light">Glowb</p>
			</Project>
		</IObs>

		<IObs once>
			<Project href="/projects/microfrontend-poc" image="/images/mono-micro.PNG">
				<p class="text-2xl">Microfrontend POC</p>
			</Project>
		</IObs>

		<IObs once>
			<Project href="/projects/life" image="/images/life.PNG">
				<p class="text-3xl">Life</p>
			</Project>
		</IObs>
	</div>
</PageLayout>
