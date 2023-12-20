<script lang="ts">
	import polarisLogo from '$lib/assets/images/testimonial_images/polaris_logo.png';
	import review1 from '$lib/assets/images/testimonial_images/review_1.webp';
	import review2 from '$lib/assets/images/testimonial_images/review_2.webp';
	import review3 from '$lib/assets/images/testimonial_images/review_3.webp';

	const featuredTestimonial = {
		body: "webexpressions has been an excellent partner with our business.  The staff is courteous and professional, extremely knowledgeable, and able to assist with a variety of projects.  We've been very happy with both the design and web development work completed for site, and the turnaround time for new work is awesome.  I would strongly recommend this company for web design and development work, especially if you are building something with React or other Javascript libraries.",
		author: {
			name: 'Dave Kush',
			imageUrl: review1,
			logoUrl: polarisLogo
		}
	};
	const testimonials = [
		[
			[
				{
					body: 'Thad did an amazing job with my website. He was very kind and responsive throughout the entire process. I appreciated his ability to work with me and incorporate my ideas into the design. I would highly recommend Thad for any website related work. Cant wait to work with him again in the future!',
					author: {
						name: 'Marco Sanchez',
						imageUrl:
							'https://images.unsplash.com/photo-1508341591423-4347099e1f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80'
					}
				},
				{
					body: 'Excellent job creating website and meeting our immediate needs. Very accommodating and professional and completes in a timely manner. Will use again for future updates.',
					author: {
						name: 'Leigh Capone',
						imageUrl: review2
					}
				}
				// More testimonials...
			],
			[
				{
					body: 'Great job! He even walked me through stuff I was confused about.',
					author: {
						name: 'phenningsen',
						imageUrl:
							'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80'
					}
				}
				// More testimonials...
			]
		],
		[
			[
				{
					body: 'Thad did a wonderful job on my website also got me up and running on Google I highly recommend him for all your advertising and website needs. Great experience!',
					author: {
						name: 'John Dorazio',
						imageUrl:
							'https://images.unsplash.com/photo-1587319497244-99f294bf8474?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80'
					}
				}
				// More testimonials...
			],
			[
				{
					body: 'webexpressions did an exceptional job with our marketing campaigns and exceeded our expectations. Polite, professional, and communicated well throughout the entire process. Will definitely use again!',
					author: {
						name: 'Luke Krugman',
						imageUrl: review3
					}
				},
				{
					body: 'Thad did an amazing job with a very abstract concept. Very strongly recommend working with him for web-development projects!',
					author: {
						name: 'aw06abag',
						imageUrl:
							'https://images.unsplash.com/photo-1524854859347-bd2f42367134?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=80&h=80&q=80'
					}
				}
				// More testimonials...
			]
		]
	];

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<section class="relative isolate bg-white py-24 sm:py-32">
	<div
		class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr to-primary from-primary/20 opacity-0"
			style="
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        "
		/>
	</div>
	<div
		class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
		aria-hidden="true"
	>
		<div
			class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr to-primary from-primary xl:ml-0 xl:mr-[calc(50%-12rem)] opacity-0"
			style="
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        "
		/>
	</div>
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div class="mx-auto max-w-3xl text-center">
			<h2 class="text-lg font-bold leading-8 tracking-tight text-primary">Testimonials</h2>
			<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl balance">
				Hear From My Valued Clients
			</p>
		</div>
		<div
			class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-heading sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"
		>
			<figure
				class="block rounded-2xl bg-white shadow-lg ring-1 ring-slate-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1"
			>
				<blockquote class="p-12 text-xl font-semibold leading-8 tracking-tight text-heading">
					<p>{`“${featuredTestimonial.body}”`}</p>
				</blockquote>
				<figcaption class="flex items-center gap-x-4 border-t border-slate-900/10 px-6 py-4">
					<img
						class="h-10 w-10 flex-none rounded-full bg-slate-50"
						src={featuredTestimonial.author.imageUrl}
						alt="reviewer"
					/>
					<div class="flex-auto">
						<div class="font-semibold">
							{featuredTestimonial.author.name}
						</div>
					</div>
					<img
						class="h-10 w-auto flex-none"
						src={featuredTestimonial.author.logoUrl}
						alt="reviewer"
					/>
				</figcaption>
			</figure>
			{#each testimonials as columnGroup, columnGroupIdx}
				<div class="space-y-8 xl:contents xl:space-y-0">
					{#each columnGroup as column, columnIdx}
						<div
							class={classNames(
								(columnGroupIdx === 0 && columnIdx === 0) ||
									(columnGroupIdx === testimonials.length - 1 &&
										columnIdx === columnGroup.length - 1)
									? 'xl:row-span-2'
									: 'xl:row-start-1',
								'space-y-8'
							)}
						>
							{#each column as testimonial}
								<figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-900/5">
									<blockquote class="text-heading">
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption class="mt-6 flex items-center gap-x-4">
										<img
											class="h-10 w-10 rounded-full bg-slate-50"
											src={testimonial.author.imageUrl}
											alt={testimonial.author.name}
										/>
										<div>
											<div class="font-semibold">
												{testimonial.author.name}
											</div>
										</div>
									</figcaption>
								</figure>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
