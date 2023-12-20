<script>
	import About from '$lib/components/pages/home/About.svelte';
	import Contact from '$lib/components/pages/home/Contact.svelte';
	import Hero from '$lib/components/pages/home/Hero.svelte';
	import Portfolio from '$lib/components/pages/home/Portfolio.svelte';
	import Pricing from '$lib/components/pages/home/Pricing.svelte';
	import Services from '$lib/components/pages/home/Services.svelte';
	import Testimonials from '$lib/components/pages/home/Testimonials.svelte';
</script>

<svelte:head>
	<title>webexpressions - Expert Svelte & Flutter Developer | Web & App Solutions</title>
	<meta
		name="description"
		content="Discover top-notch web and app development with webexpressions. Specializing in Svelte and Flutter, I offer tailored web design, app creation, consulting, and more to bring your digital visions to life. Connect for innovative, efficient solutions designed just for you."
	/>
	<meta
		name="keywords"
		content="webexpressions, Svelte development, Flutter development, SvelteKit, TailwindCSS, Tailwind, web design, app creation, web solutions, app development services, personalized web consulting, digital solutions, custom app development, efficient web development, innovative app design, web developer, app developer, Svelte expert, Flutter expert"
	/>
</svelte:head>

<div>
	<Hero />
	<About />
	<Services />
	<Portfolio />
	<Testimonials />
	<Pricing />
	<Contact />
</div>
