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
	<title>webexpressions | Bleeding-Edge Web and App Solutions</title>
	<meta
		name="description"
		content="Unlock premier web and app development at webexpressions, where cutting-edge technologies like React, SolidJS, Svelte, and SwiftUI meet bespoke design and consulting. Specializing in custom, efficient digital solutions, we're dedicated to transforming your ideas into reality. Engage with us for personalized, innovative web and app creations tailored to your unique needs."
	/>
	<meta
		name="keywords"
		content="webexpressions, Svelte Development, SolidJS Development, Bun Development, SwiftUI Development, React Development, iOS App Development, SvelteKit Integration, TailwindCSS Customization, NextJS Implementation, Remix Architecture, SolidStart Integration, Web Development Services, App Development Solutions, Custom Web Consulting, Digital Solution Expertise, Custom App Development, Efficient Web Design, Innovative App Design, Web Developer Expertise, App Developer Services, Svelte Expert, SwiftUI Specialist, React Developer, iOS Developer, NextJS Developer, Remix Developer, SolidStart Developer"
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
