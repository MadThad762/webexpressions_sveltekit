<script>
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import '../app.css';
</script>

<svelte:head>
	<meta name="theme-color" content="#ffffff" />
	<meta name="twitter:image" content="webexpressions.io/og.png" />
	<meta name="og:image" content="webexpressions.io/og" />
</svelte:head>

<div class="min-h-screen flex flex-col h-full w-full mx-auto justify-between">
	<div class="flex flex-col w-full h-full mx-auto">
		<Header />
		<main class="flex flex-col h-full w-full mx-auto">
			<slot />
		</main>
	</div>
	<Footer />
</div>
