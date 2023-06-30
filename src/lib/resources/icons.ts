import IconAWS from 'svelte-icons-pack/si/SiAmazonaws';
import IconTypescript from 'svelte-icons-pack/si/SiTypescript';
import IconCpp from 'svelte-icons-pack/si/SiCplusplus';
import IconCSharp from 'svelte-icons-pack/si/SiCsharp';
import IconGit from 'svelte-icons-pack/si/SiGit';
import IconSvelte from 'svelte-icons-pack/si/SiSvelte';
import IconReact from 'svelte-icons-pack/si/SiReact';
import IconRemix from 'svelte-icons-pack/si/SiRemix';
import IconCss from 'svelte-icons-pack/si/SiCss3';
import IconFirebase from 'svelte-icons-pack/si/SiFirebase';
import IconSolid from 'svelte-icons-pack/si/SiSolid';
import IconGithubActions from 'svelte-icons-pack/si/SiGithubactions';
import IconTailwind from 'svelte-icons-pack/si/SiTailwindcss';
import IconRDS from 'svelte-icons-pack/si/SiPostgresql';
import IconDeno from 'svelte-icons-pack/si/SiDeno';
import IconGolang from 'svelte-icons-pack/si/SiGo';
import IconLinux from 'svelte-icons-pack/si/SiLinux';
import IconAstro from 'svelte-icons-pack/si/SiAstro';
import IconFigma from 'svelte-icons-pack/si/SiFigma';
import IconStrapi from 'svelte-icons-pack/si/SiStrapi';

type IconType = {
	icon: unknown;
	name: string;
};

export const icons: IconType[] = [
	{ icon: IconAWS, name: 'AWS' },
	{ icon: IconTypescript, name: 'TypeScript' },
	{ icon: IconCpp, name: 'C++' },
	{ icon: IconCSharp, name: 'C#' },
	{ icon: IconGit, name: 'Git' },
	{ icon: IconSvelte, name: 'Svelte' },
	{ icon: IconReact, name: 'React' },
	{ icon: IconRemix, name: 'Remix' },
	{ icon: IconCss, name: 'CSS' },
	{ icon: IconFirebase, name: 'Firebase' },
	{ icon: IconSolid, name: 'Solid.js' },
	{ icon: IconGithubActions, name: 'Github Actions' },
	{ icon: IconTailwind, name: 'Tailwind CSS' },
	{ icon: IconRDS, name: 'PostGreSQL' },
	{ icon: IconDeno, name: 'Deno' },
	{ icon: IconGolang, name: 'Go' },
	{ icon: IconLinux, name: 'Linux' },
	{ icon: IconAstro, name: 'Astro' },
	{ icon: IconFigma, name: 'Figma' },
	{ icon: IconStrapi, name: 'Strapi.js' }
];
