<script>
	const features = [
		{
			name: 'Web Design',
			description:
				'Crafting visually stunning and intuitive web designs that resonate with your audience. Combining aesthetics with functionality for a compelling online presence.'
		},
		{
			name: 'Web Development',
			description:
				'Building robust and scalable websites that deliver seamless user experiences. Using the latest technologies to create solutions that not only look great but perform excellently.'
		},
		{
			name: 'App Design',
			description:
				'Creating user-focused app designs that blend innovation with usability. Elevate your mobile app with designs that engage and retain your audience.'
		},
		{
			name: 'App Development',
			description:
				'Developing high-performance, feature-rich mobile applications tailored for iOS and Android platforms. Turning your app ideas into reality with seamless functionality and user-centric design.'
		},
		{
			name: 'UI/UX Design',
			description:
				'Ensuring a seamless and engaging user experience with top-notch UI/UX design services. Create intuitive and user-friendly interfaces that make your digital products stand out.'
		},
		{
			name: 'Web Hosting',
			description:
				"Offering reliable and secure web hosting solutions. Ensure your website's performance with fast loading times and maximum uptime."
		},
		{
			name: 'E-commerce Solutions',
			description:
				'Building comprehensive e-commerce platforms that drive sales. From shopping cart integration to payment processing, get a fully functional online store.'
		},
		{
			name: 'Consulting',
			description:
				"Providing expert consulting to navigate the digital landscape. Get insights and strategies tailored to your business's specific needs and objectives."
		},
		{
			name: 'Digital Marketing',
			description:
				'Expand your digital footprint with strategic marketing solutions. From SEO to social media marketing, harness the power of digital channels to grow your brand.'
		},
		{
			name: 'Maintenance & Support',
			description:
				'Offer continuous support and maintenance services to keep your web and app solutions running smoothly. Regular updates, bug fixes, and performance optimization to ensure long-term success.'
		}
	];
</script>

<section id="services" class="bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
		>
			<div>
				<h2 class="text-lg font-bold leading-8 tracking-tight text-primary">Expertise Unveiled</h2>
				<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
					Comprehensive Web & App Services
				</p>
				<p class="mt-6 text-lg leading-7 text-body">
					Discover a suite of services meticulously crafted to bring your digital aspirations to
					life. At webexpressions, I specialize in delivering top-tier web and app solutions, each
					tailored to fit your unique requirements. From initial design to final deployment and
					beyond, I ensure a seamless and impactful digital journey.
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
