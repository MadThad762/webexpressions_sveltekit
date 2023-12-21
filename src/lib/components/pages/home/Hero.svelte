<script>
	import heroOne from '$lib/assets/images/hero_images/hero_1.webp';
	import heroTwo from '$lib/assets/images/hero_images/hero_2.webp';
	import heroThree from '$lib/assets/images/hero_images/hero_3.webp';
	import heroFour from '$lib/assets/images/hero_images/hero_4.webp';
	import heroFive from '$lib/assets/images/hero_images/hero_5.webp';
</script>

<section class="bg-white">
	<div class="relative isolate">
		<svg
			class="absolute hero inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-primary/50 md:stroke-primary/60 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
					width={200}
					height={200}
					x="50%"
					y={-1}
					patternUnits="userSpaceOnUse"
				>
					<path d="M.5 200V.5H200" fill="none" />
				</pattern>
			</defs>
			<svg x="50%" y={-1} class="overflow-visible fill-slate-50">
				<path
					d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
					stroke-width={0}
				/>
			</svg>
			<rect
				width="100%"
				height="100%"
				stroke-width={0}
				fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
			/>
		</svg>
		<div
			class="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
			aria-hidden="true"
		>
			<div
				class="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-primary to-primary opacity-0"
				style="
              clipPath:
                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
            "
			/>
		</div>
		<div class="overflow-hidden">
			<div class="mx-auto max-w-7xl px-6 pb-20 pt-24 sm:pb-32 sm:pt-60 lg:px-8 lg:pt-32">
				<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
					<div class="w-full max-w-xl xl:max-w-2xl lg:shrink-0">
						<h1 class="text-4xl font-bold tracking-tight text-heading sm:text-6xl">
							Crafting Exceptional Web and App Solutions with Svelte & Flutter
						</h1>
						<p class="relative mt-6 text-lg leading-8 text-body sm:max-w-md lg:max-w-none">
							Discover the perfect blend of innovation and expertise for your web and app
							development needs. Specializing in Svelte and Flutter, I bring your ideas to life with
							solutions that are as unique as your business. Complementing these development
							services, my personalized consulting ensures that your project is not only technically
							sound but also strategically aligned with your specific goals. Your project is unique,
							and it deserves a specialized touch. Let's collaborate to create something truly
							remarkable.
						</p>
						<div class="mt-10 flex items-center gap-x-6">
							<a
								href="/#contact"
								class="rounded-md bg-primary px-3.5 py-2 text-base font-bold leading-7 text-secondary shadow-sm duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-dark"
							>
								Get Started
							</a>
							<a
								href="/#portfolio"
								class="text-base font-bold leading-6 text-heading duration-150 ease-in-out hover:text-body"
							>
								View Portfolio <span aria-hidden="true">→</span>
							</a>
						</div>
					</div>
					<div
						class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
					>
						<div
							class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
						>
							<div class="relative">
								<img
									src={heroOne}
									alt="happy people"
									class="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
									height={264}
									width={176}
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10"
								/>
							</div>
						</div>
						<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
							<div class="relative">
								<img
									src={heroTwo}
									alt="happy people"
									class="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
									height={264}
									width={176}
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10"
								/>
							</div>
							<div class="relative">
								<img
									src={heroThree}
									alt="happy people"
									class="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
									height={264}
									width={176}
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10"
								/>
							</div>
						</div>
						<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
							<div class="relative">
								<img
									src={heroFour}
									alt="happy people"
									class="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
									height={264}
									width={176}
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10"
								/>
							</div>
							<div class="relative">
								<img
									src={heroFive}
									alt="happy people"
									class="aspect-[2/3] w-full rounded-xl bg-slate-900/5 object-cover shadow-lg"
									height={264}
									width={176}
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-slate-900/10"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
