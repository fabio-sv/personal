import IconAWS from 'svelte-icons-pack/si/SiAmazonaws';
import IconTypescript from 'svelte-icons-pack/si/SiTypescript';
import IconCpp from 'svelte-icons-pack/si/SiCplusplus';
import IconCSharp from 'svelte-icons-pack/si/SiCsharp';
import IconGit from 'svelte-icons-pack/si/SiGit';
import IconSvelte from 'svelte-icons-pack/si/SiSvelte';
import IconReact from 'svelte-icons-pack/si/SiReact';
import IconRemix from 'svelte-icons-pack/si/SiRemix';
import IconSolid from 'svelte-icons-pack/si/SiSolid';
import IconGithubActions from 'svelte-icons-pack/si/SiGithubactions';
import IconTailwind from 'svelte-icons-pack/si/SiTailwindcss';
import IconRDS from 'svelte-icons-pack/si/SiPostgresql';
import IconDeno from 'svelte-icons-pack/si/SiDeno';
import IconJavascript from 'svelte-icons-pack/si/SiJavascript';
import IconSpring from 'svelte-icons-pack/si/SiSpringboot';
import IconQt from 'svelte-icons-pack/si/SiQt';
import IconDotNet from 'svelte-icons-pack/si/SiDotnet';
import IconNext from 'svelte-icons-pack/si/SiNextdotjs';
import IconAngular from 'svelte-icons-pack/si/SiAngular';
import IconTerraform from 'svelte-icons-pack/si/SiTerraform';
import IconSentry from 'svelte-icons-pack/si/SiSentry';
import IconBash from 'svelte-icons-pack/si/SiGnubash';
import IconNode from 'svelte-icons-pack/si/SiNodedotjs';
import IconDocker from 'svelte-icons-pack/si/SiDocker';

type IconType = {
	icon: unknown;
	name: string;
};

export const icons: IconType[] = [
	{ icon: IconAWS, name: 'AWS' },
	{ icon: IconTerraform, name: 'Terraform' },
	{ icon: IconRDS, name: 'PostGreSQL' },
	{ icon: IconGithubActions, name: 'GH Actions' },
	{ icon: IconDocker, name: 'Docker' },
	{ icon: IconSentry, name: 'Sentry' },
	{ icon: IconCSharp, name: 'C#' },
	{ icon: IconDotNet, name: '.NET Core' },
	{ icon: IconSpring, name: 'Spring Boot' },
	{ icon: IconCpp, name: 'C++' },
	{ icon: IconQt, name: 'Qt' },
	{ icon: IconTypescript, name: 'TypeScript' },
	{ icon: IconJavascript, name: 'JavaScript' },
	{ icon: IconNode, name: 'Node.js' },
	{ icon: IconDeno, name: 'Deno' },
	{ icon: IconReact, name: 'React' },
	{ icon: IconNext, name: 'Next.js' },
	{ icon: IconRemix, name: 'Remix' },
	{ icon: IconSvelte, name: 'Svelte' },
	{ icon: IconSolid, name: 'Solid.js' },
	{ icon: IconAngular, name: 'Angular' },
	{ icon: IconTailwind, name: 'Tailwind' },
	{ icon: IconGit, name: 'Git' },
	{ icon: IconBash, name: 'Bash' }
];
