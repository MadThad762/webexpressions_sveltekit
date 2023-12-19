<script>
	const features = [
		{
			name: 'Web Design',
			description: 'Crafting visually stunning, user-friendly web experiences.'
		},
		{
			name: 'App Design',
			description: 'Creating engaging, intuitive mobile app interfaces.'
		},
		{
			name: 'Web Development',
			description: 'Developing robust, scalable, and high-performance websites.'
		},
		{
			name: 'App Development',
			description: 'Building efficient, seamless, and feature-rich mobile applications.'
		},
		{
			name: 'UI/UX Design',
			description: 'Ensuring user-centric designs for memorable digital interactions.'
		},
		{
			name: 'Web Hosting',
			description: 'Offering reliable, secure, and high-speed web hosting solutions.'
		},
		{
			name: 'E-commerce Solutions',
			description: 'Designing and implementing tailored, innovative e-commerce platforms.'
		},
		{
			name: 'Digital Marketing',
			description: 'Maximizing online presence with strategic digital marketing campaigns.'
		},
		{
			name: 'Social Media Management',
			description:
				'Enhancing brand visibility through tailored social media strategies and consistent engagement.'
		},
		{
			name: 'Copywriting',
			description:
				"Crafting compelling content to convey your brand's message and engage your audience."
		}
	];
</script>

<section id="services" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<h2 class="text-lg font-bold leading-8 tracking-tight text-primary">
					Tailored Digital Solutions
				</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
					Our Array of Services
				</p>
				<p class="mt-6 text-lg leading-7 text-body">
					Explore the world of webexpressions, where we craft a rich spectrum of digital services
					meticulously tailored to elevate your business. From designing visually stunning websites
					and developing powerful applications to innovating cutting-edge e-commerce solutions,
					digital marketing strategies, social media management, and professional copywriting, we
					cover every facet of your digital presence. Our mission transcends mere online existence;
					we create platforms that perform and engage, setting your business apart in the
					competitive digital landscape. Partner with us, and let's shape digital expressions that
					resonate with your brand, propelling your business to new heights.
				</p>
			</div>
			<dl
				class="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-body sm:grid-cols-2 lg:gap-y-16"
			>
				{#each features as feature}
					<div class="relative pl-9">
						<dt class="font-bold text-heading">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="absolute left-0 top-1 h-5 w-5 text-primary"
								stroke-width="3"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>

							{feature.name}
						</dt>
						<dd class="mt-2">{feature.description}</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
