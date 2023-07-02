<script>
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import TimelineElement from '$lib/components/TimelineElement.svelte';

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconAWS from 'svelte-icons-pack/si/SiAmazonaws';
	import IconBoook from 'svelte-icons-pack/fi/FiBook';
</script>

<PageLayout class="gap-y-0 my-8">
	<H1>My CV</H1>

	<H3>Experience</H3>

	<section class="grid grid-cols-timeline w-full max-w-xl place-items-center">
		<TimelineElement
			option="left"
			title="BBD Software"
			description="Software engineer at BBD Software and Vodacom Financial Services"
			dates="12/2021 - current"
			location="Johannesburg, South Africa"
		/>

		<TimelineElement
			option="right"
			title="University of South Africa"
			description="BSc Applied Mathematics and Computer Science - Cum Laude"
			dates="01/2019 - 11/2021"
			location="Correspondence"
		/>

		<TimelineElement
			option="left"
			title="Boksburg High School"
			description="Physics. EGD. Computers. Math. RCL. Cum Laude."
			dates="01/2014 - 12/2018"
			location="Ekurhuleni, South Africa"
		/>

		<div />
		<div class="w-8 h-8 rounded-full border-2 border-light bg-dark drop-shadow-sm" />
		<div />
	</section>

	<H3>Qualifications</H3>

	<div class="flex justify-start items-center gap-x-4 w-full pl-8 text-left">
		<Icon src={IconAWS} title="AWS" size="2rem" />
		<p class="text-xs">Certified AWS Developer Associate</p>
	</div>

	<div class="flex justify-start items-center gap-x-4 w-full pl-8 text-left">
		<Icon src={IconBoook} title="Book" size="2rem" />
		<p class="text-xs">BSc. Applied Mathematics & Computer Science</p>
	</div>
</PageLayout>
