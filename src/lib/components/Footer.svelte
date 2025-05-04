<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IconWhatsapp from 'svelte-icons-pack/si/SiWhatsapp';
	import IconGithub from 'svelte-icons-pack/si/SiGithub';
	import IconPhone from 'svelte-icons-pack/fi/FiPhone';
	import IconEmail from 'svelte-icons-pack/fi/FiMail';
</script>

<footer
	class="flex justify-center items-center gap-x-4 sm:gap-x-6 w-full py-4 bg-light snap-end relative border-t drop-shadow"
>
	<a href="tel:+27714558340" aria-label="Contact me on my phone number">
		<Icon src={IconPhone} size="1rem" className="drop-shadow" />
	</a>
	<a href="mailto:fabsousa23.fs@gmail.com" aria-label="Contact me on my e-mail">
		<Icon src={IconEmail} size="1rem" className="drop-shadow" />
	</a>
	<a href="https://api.whatsapp.com/send?phone=27714558340" aria-label="Contact me on Whatsapp">
		<Icon src={IconWhatsapp} size="1rem" className="drop-shadow" />
	</a>
	<a href="https://github.com/fabio-sv" aria-label="Look at my Github">
		<Icon src={IconGithub} size="1rem" className="drop-shadow" />
	</a>
</footer>
