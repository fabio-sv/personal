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
		<IObs once delay={50}>
			<Project href="https://freshcup.vercel.app/" image="/images/freshcup.PNG">
				<p class="text-3xl">Freshcup</p>
			</Project>
		</IObs>

		<IObs once delay={150}>
			<Project href="https://github.com/FabioSVBBD/sockets" image="/images/sockets.PNG">
				<p class="text-3xl">Socketing</p>
			</Project>
		</IObs>

		<IObs once delay={250}>
			<Project href="https://tetris-gold-nu.vercel.app/" image="/images/tetris.PNG">
				<p class="text-3xl">Tetris</p>
			</Project>
		</IObs>

		<IObs once delay={350}>
			<Project href="https://fabiosv.itch.io/glowb" image="/images/glowb.jpeg" color="#FAFAFA">
				<p class="text-3xl text-light">Glowb</p>
			</Project>
		</IObs>

		<IObs once delay={450}>
			<Project href="https://github.com/FabioSVBBD/mono-micro" image="/images/mono-micro.PNG">
				<p class="text-2xl">Microfrontend POC</p>
			</Project>
		</IObs>

		<IObs once delay={550}>
			<Project href="https://github.com/FabioSVBBD/conways-game-of-life" image="/images/life.PNG">
				<p class="text-3xl">Life</p>
			</Project>
		</IObs>
	</div>
</PageLayout>
