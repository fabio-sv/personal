<script lang="ts">
	import { type ProjectType } from '$lib/resources/projects';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconArrow from 'svelte-icons-pack/fi/FiArrowRight';

	export let project: ProjectType;

	$: href = `projects/${project.urlName}`;
	$: color = project.backgroundColor || '#252525';
</script>

<section
	class="h-[26rem] w-48 min-w-[12rem] bg-cover bg-center backdrop-blur-lg rounded-2xl border snap-center"
	style={`background-image: url('${project.image}')`}
>
	<a
		{href}
		class="flex justify-center items-center gap-x-2 w-full h-full backdrop-blur-sm rounded-2xl font-agdasima text-center"
	>
		<slot />
		<Icon src={IconArrow} title="Right Arrow" size="1.1rem" color={project.backgroundColor} />
	</a>
</section>
