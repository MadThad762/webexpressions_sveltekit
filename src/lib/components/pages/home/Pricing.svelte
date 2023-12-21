<script lang="ts">
	const tiers = [
		{
			name: 'Starter',
			id: 'starter',
			href: '#contact',
			price: '$1999',
			description:
				'The perfect option for businesses on a budget or anyone looking to get started quickly.',
			features: [
				'Custom landing page',
				'Custom and personalized design',
				'Fully responsive layout',
				'Advanced animations',
				'Contact form and email sign up',
				'Delivery in 2 weeks or less'
			],
			featured: true
		},
		{
			name: 'Scale',
			id: 'scale',
			href: '#contact',
			price: 'Contact',
			description:
				'Ideal for companies who need multiple pages, content management, or more advanced functionality.',
			features: ['Everything in Starter', 'Multiple pages', 'E-commerce', 'Content management'],
			featured: false
		}
	];

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}
</script>

<section id="pricing" class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
	<div
		class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
		aria-hidden="true"
	>
		<div
			class="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr to-primary from-primary/80 opacity-0"
			style="
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          "
		/>
	</div>
	<div class="mx-auto max-w-2xl text-center lg:max-w-4xl">
		<h2 class="text-lg font-bold leading-8 tracking-tight text-primary">Pricing</h2>
		<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl balance">
			Transparent, Value-Driven Pricing
		</p>
	</div>
	<p class="mx-auto mt-6 max-w-3xl text-center text-lg leading-8 text-body balance">
		Choose a plan that best fits your project's needs. My pricing is designed to be clear and
		straightforward, ensuring you get exceptional value at every step. The Starter Plan is perfect
		for smaller projects or businesses taking their first step into the digital world. For larger or
		more complex endeavors, the Scale Plan is tailored to match the size and intricacy of your
		project, guaranteeing a solution that's as unique as your vision. Let's discuss your project to
		find the best plan for you.
	</p>
	<div
		class="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
	>
		{#each tiers as tier, tierIdx}
			<div
				class={classNames(
					tier.featured
						? 'relative bg-white shadow-xl shadow-gray-300/60'
						: 'bg-white/60 sm:mx-8 lg:mx-0',
					tier.featured
						? ''
						: tierIdx === 0
							? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
							: 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
					'rounded-3xl p-8 ring-1 ring-slate-900/10 sm:p-10'
				)}
			>
				<h3 class="text-lg font-bold leading-7 text-primary">
					{tier.name}
				</h3>
				<p class="mt-4 flex items-baseline gap-x-2">
					<span class="text-5xl font-bold tracking-tight text-heading">
						{tier.price}
					</span>
				</p>
				<p class="mt-6 text-base leading-7 text-body">
					{tier.description}
				</p>
				<ul class="mt-8 space-y-3 text-sm leading-6 text-body sm:mt-10">
					{#each tier.features as feature}
						<li class="flex gap-x-3">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="3"
								stroke="currentColor"
								class="h-6 w-6 flex-none text-primary"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
							</svg>

							{feature}
						</li>
					{/each}
				</ul>
				<a
					href={tier.href}
					class={classNames(
						tier.featured
							? 'bg-primary text-secondary shadow hover:bg-primary-dark'
							: 'text-primary ring-1 ring-inset ring-primary hover:bg-primary-dark hover:ring-primary-dark hover:text-white',
						'mt-8 block rounded-md py-2.5 px-3.5 text-center text-sm font-bold duration-150 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:mt-10'
					)}
				>
					Get started today
				</a>
			</div>
		{/each}
	</div>
</section>
