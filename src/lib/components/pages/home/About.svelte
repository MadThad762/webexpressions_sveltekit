<script>
	import companyLogo from '$lib/assets/images/logos/logo_bottom_text_white.svg';

	const features = [
		{
			name: 'Mastery in Bleeding-Edge Web & App Development',
			description:
				'At webexpressions, I harness the power of bleeding-edge technologies such as React, SolidJS, Svelte, Bun, and SwiftUI to push your projects to the forefront of innovation. My focus on these advanced frameworks ensures your web and app developments are not just contemporary, but future-proof. With this deep expertise, I deliver sleek, efficient, and high-performing digital products, crafted for lasting success in the ever-evolving tech landscape.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-slot="icon" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm14.25 6a.75.75 0 0 1-.22.53l-2.25 2.25a.75.75 0 1 1-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 1 1 1.06-1.06l2.25 2.25c.141.14.22.331.22.53Zm-10.28-.53a.75.75 0 0 0 0 1.06l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-2.25 2.25Z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Tailored Strategies for Your Success',
			description:
				'At webexpressions, each project is approached with a bespoke strategy, ensuring that your unique business goals are met with precision. My consulting services go beyond mere development; I delve into understanding your vision, challenges, and objectives to provide solutions that truly align with your aspirations. It’s consultancy that’s as unique as your business.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-slot="icon" class="w-6 h-6">
  <path fill-rule="evenodd" d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Dedicated to Excellence',
			description:
				'Quality is at the heart of everything I do at webexpressions. From initial concepts to final deployment, every stage is handled with utmost care and attention to detail. This commitment to quality means delivering projects that not only meet but exceed your expectations, ensuring that every aspect of your web or app project shines.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-slot="icon" class="w-6 h-6">
  <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Your Partner in Development',
			description:
				'Collaboration and transparency are key in my approach. At webexpressions, you’re not just hiring a service; you’re gaining a partner. I believe in maintaining open lines of communication throughout the development process, ensuring you’re informed and involved every step of the way. It’s a partnership that fosters trust and yields better results.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" data-slot="icon" class="w-6 h-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clip-rule="evenodd" />
</svg>
`
		}
	];
</script>

<section id="about" class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 lg:items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pl-4">
				<div class="lg:max-w-lg">
					<h2 class="text-lg font-bold leading-8 text-primary">About Me</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
						Personalized Web & App Development Expertise
					</p>
					<p class="mt-6 text-lg leading-8 text-body">
						Welcome to webexpressions, where cutting-edge web and app development meets personalized
						service. I specialize in utilizing the latest technologies like React, SolidJS, Svelte,
						Bun, and SwiftUI to deliver high-performance applications tailored to your unique needs.
						My approach is driven by a strong passion for problem-solving and innovation, ensuring
						every project not only meets but exceeds expectations. In a world dominated by
						technology, webexpressions stands out by offering bespoke digital solutions that are
						efficient, effective, and tailored to the modern digital landscape.
					</p>
				</div>
			</div>
			<div class="flex items-start justify-end lg:order-first">
				<img
					src={companyLogo}
					alt="Product screenshot"
					class="w-full max-w-none rounded-2xl object-cover object-center my-5 bg-primary px-10 py-10"
				/>
			</div>
		</div>
		<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-32 lg:max-w-7xl">
			<dl
				class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
			>
				{#each features as feature}
					<div class="relative pl-16">
						<dt class="text-base font-bold leading-7 text-heading">
							<div
								class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary"
							>
								{@html feature.svg}
							</div>
							{feature.name}
						</dt>
						<dd class="mt-2 text-base leading-7 text-body">
							{feature.description}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
