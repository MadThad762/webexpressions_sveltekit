<script>
	import Footer from '$lib/components/elements/Footer.svelte';
	import Header from '$lib/components/elements/Header.svelte';
	import '../app.css';
</script>

<div class="min-h-screen flex flex-col h-full w-full mx-auto justify-between">
	<div class="flex flex-col w-full h-full mx-auto">
		<Header />
		<slot />
	</div>
	<Footer />
</div>
