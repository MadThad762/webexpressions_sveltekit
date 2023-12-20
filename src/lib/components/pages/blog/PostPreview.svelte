<script lang="ts">
	import authorImage from '$lib/assets/images/blog_images/author_image_small.jpg';

	interface Post {
		title: string;
		preview: string;
		tags: string[];
		url: string;
		date: string;
	}

	export let post: Post;
</script>

<article class="flex max-w-xl flex-col items-start justify-between">
	<div class="flex items-center gap-x-4 text-xs">
		<span class="text-body">{post?.date}</span>
		{#each post?.tags as tag}
			<span class="relative z-10 rounded-full bg-primary px-3 py-1.5 font-semibold text-white"
				>{tag}</span
			>
		{/each}
	</div>
	<div>
		<a href={`/blog/posts/${post?.url}`}>
			<h3
				class="mt-3 text-lg font-semibold leading-6 text-heading hover:scale-105 ease-in-out duration-300"
			>
				{post?.title}
			</h3>
		</a>
		<p class="mt-5 line-clamp-3 text-sm leading-6 text-body">
			{post?.preview}
		</p>
	</div>
	<div class="relative mt-8 flex items-center gap-x-4">
		<img src={authorImage} alt="Thad Krugman" class="h-10 w-10 rounded-full bg-gray-50" />
		<div class="text-sm leading-6">
			<p class="font-semibold text-heading">
				<span class="absolute inset-0"></span>
				Thad Krugman
			</p>
			<p class="text-body">Owner / Software Engineer</p>
		</div>
	</div>
</article>
