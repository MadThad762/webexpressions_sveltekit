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
	<title>webexpressions | crafting digital experiences</title>
	<meta
		name="description"
		content="webexpressions: Your local partner in digital innovation. Specializing in cutting-edge web and app design, development, and e-commerce solutions. Transparent pricing, satisfaction guaranteed. Contact us at 440-222-5817 to start your project today."
	/>
	<meta
		name="keywords"
		content="web development, app development, digital design solutions, e-commerce solutions, web design, mobile app design, responsive web design, UI/UX design, local web development agency, Cleveland web design, custom web development, SEO optimization, website maintenance, digital marketing, content management systems, front-end development, back-end development, cutting-edge technology, straightforward pricing, customer satisfaction guarantee, innovative web solutions, business web applications, WordPress development, eCommerce website design, tailor-made web services, copywriting, digital marketing, social media management, web hosting, web maintenance, web support, web development services, web design services, web design company, web development company, web design agency, web development agency, web design near me, web development near me, web design company near me, web development company near me, web design agency near me, web development agency near me, web design Cleveland, web development Cleveland"
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
