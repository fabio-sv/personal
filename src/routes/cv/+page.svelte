<script>
	import H1 from '$lib/components/H1.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import TimelineElement from '$lib/components/TimelineElement.svelte';
</script>

<PageLayout class="gap-y-0">
	<H1>RESUME</H1>

	<div class="my-8" />

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
			title="UNISA"
			description="BSc Applied Mathematics and Computer Science - Cum Laude"
			dates="01/2019 - 11/2021"
			location="Correspondence"
		/>

		<TimelineElement
			option="left"
			title="Boksburg High School"
			description="Physics. EGD. Computers. Math. Cum Laude."
			dates="01/2014 - 12/2018"
			location="Boksburg, Ekurhuleni"
		/>

		<div />
		<div class="w-8 h-8 rounded-full border-2 border-light bg-dark drop-shadow-sm" />
		<div />
	</section>
</PageLayout>
