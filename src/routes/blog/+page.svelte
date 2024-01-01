<script lang="ts">
	import PostPreview from '$lib/components/pages/blog/PostPreview.svelte';

	const previewPosts = [
		{
			title: 'Flutter: The Cost-Effective Solution for Cross-Platform App Development',
			preview:
				"In the fast-paced world of technology, businesses and startups are constantly seeking efficient ways to develop mobile applications. Flutter, Google's open-source UI software development kit, has emerged as a game-changer in this arena. This blog post is dedicated to business owners and startup founders who are considering Flutter for their app development needs. We'll explore the key advantages of Flutter and how it can significantly reduce costs by enabling cross-platform app development.",
			tags: ['Flutter', 'Business Strategy'],
			url: 'flutter-the-cost-effective-solution-for-cross-platform-app-development',
			date: 'Dec 31, 2023'
		},
		{
			title: 'Understanding the MVP: Its Purpose and How It Differs from the Final Product',
			preview:
				"In the realm of startups and product development, the term 'Minimum Viable Product' (MVP) is often mentioned. But what exactly is an MVP, and how does it differ from the final product? This blog post aims to demystify the MVP, explaining its purpose and distinguishing it from a fully developed product.",
			tags: ['Business Strategy'],
			url: 'understanding-the-mvp-its-purpose-and-how-it-differs-from-the-final-product',
			date: 'Dec 21, 2023'
		},
		{
			title: 'Svelte vs React: Which One Should You Choose?',
			preview:
				"In the ever-evolving landscape of web development, choosing the right framework for your project can be a pivotal decision. Two of the most talked-about contenders in recent years are Svelte and React. Both have their unique strengths and cater to different needs and preferences. Let's dive into a comprehensive comparison to help you make an informed choice.",
			tags: ['Svelte', 'React'],
			url: 'svelte-vs-react-which-one-should-you-choose',
			date: 'Dec 19, 2023'
		}
	];
</script>

<svelte:head>
	<title>Svelte & Flutter Insights - Leading Edge Web and App Development Blog</title>
	<meta
		name="description"
		content="Discover expert tips, latest trends, and comprehensive tutorials in Svelte and Flutter.
		Uncover how leveraging these technologies can transform your business, enhancing efficiency
		and fostering innovation in today's competitive market."
	/>
	<meta
		name="keywords"
		content="Svelte development, Flutter development, app development blog, web development insights, Svelte tutorials, Flutter tips, modern app design, web development trends, UI/UX best practices, Svelte case studies, Flutter performance optimization, cross-platform development, JavaScript frameworks, Dart programming"
	/>
</svelte:head>

<section class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
				Svelte & Flutter Insights
			</h2>
			<p class="mt-2 text-lg leading-8 text-body">
				Discover expert tips, latest trends, and comprehensive tutorials in Svelte and Flutter.
				Uncover how leveraging these technologies can transform your business, enhancing efficiency
				and fostering innovation in today's competitive market.
			</p>
			<div class="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
				{#each previewPosts as post}
					<PostPreview {post} />
				{/each}
			</div>
		</div>
	</div>
</section>
