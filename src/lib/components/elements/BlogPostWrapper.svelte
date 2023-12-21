<script lang="ts">
	import authorImage from '$lib/assets/images/blog_images/author_image_small.jpg';
	import BlogCta from './BlogCTA.svelte';

	export let title: string;
	export let date: string;
</script>

<div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-3xl text-base leading-7 text-body">
		<h1 class="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
			{title}
		</h1>
		<div class="relative mt-8 flex items-center gap-x-4">
			<img src={authorImage} alt="Thad Krugman" class="h-10 w-10 rounded-full bg-gray-50" />
			<div class="text-sm leading-6">
				<p class="font-semibold text-heading">
					<span class="absolute inset-0"></span>
					Thad Krugman
				</p>
				<p class="text-body">{date}</p>
			</div>
		</div>
		<slot />
		<BlogCta />
	</div>
</div>
