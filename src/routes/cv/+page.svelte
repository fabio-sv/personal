<script>
	import H1 from '$lib/components/H1.svelte';
	import H3 from '$lib/components/H3.svelte';
	import PageLayout from '$lib/components/PageLayout.svelte';
	import TimelineElement from '$lib/components/TimelineElement.svelte';
	import Qualification from '$lib/components/Qualification.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconAWS from 'svelte-icons-pack/si/SiAmazonaws';
	import IconBook from 'svelte-icons-pack/fi/FiBookOpen';
	import IconReact from 'svelte-icons-pack/si/SiReact';
	import IconNode from 'svelte-icons-pack/si/SiNodedotjs';
	import IconTypescript from 'svelte-icons-pack/si/SiTypescript';
	import IconDotNet from 'svelte-icons-pack/si/SiDotnet';
	import IconSvelte from 'svelte-icons-pack/si/SiSvelte';
	import IconTerraform from 'svelte-icons-pack/si/SiTerraform';
	import IconPython from 'svelte-icons-pack/si/SiPython';
	import IObs from '$lib/components/IObs.svelte';
</script>

<PageLayout class="gap-y-0 my-8 px-2">
	<IObs once><H1>My CV</H1></IObs>

	<IObs once delay={200}><H3>Primary skill set</H3></IObs>

	<section class="font-semibold flex flex-wrap justify-center gap-2 max-w-sm">
		<IObs once class="!w-fit" delay={300}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-yellow-600/20 text-yellow-600"
			>
				<Icon src={IconAWS} title="AWS" color="#a16207" />
				<p>AWS</p>
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={400}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-red-600/20 text-red-600"
			>
				<Icon src={IconReact} title="React" color="#dc2626" />
				React
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={500}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-pink-600/20 text-pink-600"
			>
				<Icon src={IconTerraform} title="Terraform" color="#db2777" />
				Terraform
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={600}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-gray-600/20 text-gray-600"
			>
				<Icon src={IconPython} title="Python" color="#4b5563" />
				Python
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={700}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-green-600/20 text-green-600"
			>
				<Icon src={IconNode} title="Node.js" color="#16a34a" />
				Node.js
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={800}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-blue-600/20 text-blue-600"
			>
				<Icon src={IconTypescript} title="TypeScript" color="#2563eb" />
				TypeScript
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={900}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-purple-600/20 text-purple-600"
			>
				<Icon src={IconDotNet} title="ASP.NET Core" color="#9333ea" />
				ASP.NET Core
			</div>
		</IObs>

		<IObs once class="!w-fit" delay={1000}>
			<div
				class="flex gap-x-2 justify-start items-center px-2 py-1 rounded-md bg-orange-600/20 text-orange-600"
			>
				<Icon src={IconSvelte} title="Svelte" color="#ea580c" />
				Svelte
			</div>
		</IObs>
	</section>

	<IObs once delay={200}><H3>Experience</H3></IObs>

	<section class="grid grid-cols-timeline w-full max-w-2xl place-items-center">
		<TimelineElement
			option="right"
			title="Platform engineer"
			description="BBD Software and OM Bank"
			dates="08/2023 - current"
			location="Johannesburg, South Africa"
		/>

		<TimelineElement
			option="left"
			title="Software engineer"
			description="BBD Software and Vodacom Financial Services"
			dates="12/2021 - 07/2023"
			location="Johannesburg, South Africa"
		/>

		<TimelineElement
			option="right"
			title="University student"
			description="UNISA - Cum Laude BSc Applied Mathematics and Computer Science."
			dates="01/2019 - 11/2021"
			location="Correspondence"
		/>

		<TimelineElement
			option="left"
			title="High School student"
			description="Physics. EGD. Computers. Math. RCL. Cum Laude."
			dates="01/2014 - 12/2018"
			location="Ekurhuleni, South Africa"
		/>

		<div />
		<div class="w-8 h-8 rounded-full border-2 border-light bg-dark drop-shadow-sm" />
		<div />
	</section>

	<IObs once delay={200}><H3>Qualifications</H3></IObs>

	<section class="max-w-xl mx-auto space-y-4 px-4">
		<IObs once>
			<Qualification
				icon={IconAWS}
				alt="AWS"
				title="Certified AWS Developer Associate"
				subtext="October 2022"
			/>
		</IObs>

		<IObs once>
			<Qualification
				icon={IconBook}
				alt="AWS"
				title="BSc. Applied Mathematics & Computer Science"
				subtext="November 2021"
			/>
		</IObs>
	</section>
</PageLayout>
