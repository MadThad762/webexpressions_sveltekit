<script>
	import polarisImage from '$lib/assets/images/portfolio_images/polaris_education.webp';
	import msImage from '$lib/assets/images/portfolio_images/ms_auto_detailing.webp';
	import spectreImage from '$lib/assets/images/portfolio_images/spectre_corp.webp';
	import almImage from '$lib/assets/images/portfolio_images/alm_junk_removal.webp';
</script>

<section id="portfolio" class="overflow-hidden bg-white py-24 :py-32">
	<div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
		>
			<div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
				<h2 class="mb-2 text-lg font-bold leading-8 tracking-tight text-primary">Portfolio</h2>
				<p class="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
					Web Creations at a Click
				</p>
				<p class="mt-6 text-lg leading-7 text-body">
					Dive into a showcase of my web development expertise, where each image is more than just a
					snapshot – it's an invitation to experience the live websites I've crafted. My portfolio
					is a display of diverse projects, highlighting my skill in building engaging, user-centric
					online experiences. Click on the screenshots to explore these sites in real-time and
					witness the functionality and design finesse firsthand.
				</p>
				<div class="mt-10 flex">
					<a
						href="#contact"
						class="rounded-md bg-primary px-3.5 py-2 text-base font-bold leading-7 text-secondary shadow-sm duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-dark"
					>
						Get Started on Your Project
					</a>
				</div>
			</div>
			<div
				class="flex flex-col-reverse sm:flex-wrap sm:flex-row items-start justify-end gap-6 sm:gap-8 lg:contents"
			>
				<div class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
					<a rel="noReferrer" target={'_blank'} href="https://alm-junk-removal.vercel.app">
						<img
							src={almImage}
							alt="ALM Junk Removal"
							class="w-[37rem] max-w-none rounded-xl border border-slate-100 bg-slate-50 object-cover object-left shadow-lg"
						/>
					</a>
				</div>
				<div
					class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
				>
					<div class="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
						<a rel="noReferrer" target={'_blank'} href="https://spectrecorp.com">
							<img
								src={spectreImage}
								alt="Spectre Corp"
								class="aspect-[16/13] w-[38rem] sm:w-[24rem] max-w-none flex-none rounded-xl border border-slate-100 bg-slate-50 object-cover shadow-lg"
							/>
						</a>
					</div>
					<div class="flex w-96 flex-auto self-end sm:self-auto justify-end lg:w-auto lg:flex-none">
						<a rel="noReferrer" target={'_blank'} href="https://ms-auto-detailing.vercel.app">
							<img
								src={msImage}
								alt="MS Auto Detailing"
								class="w-[38rem] sm:w-[37rem] max-w-none flex-none rounded-xl border border-slate-100 bg-slate-50 object-cover shadow-lg"
							/>
						</a>
					</div>
					<div class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
						<a rel="noReferrer" target={'_blank'} href="https://www.polaris-edu.com">
							<img
								src={polarisImage}
								alt="Polaris Education"
								class="w-[24rem] max-w-none rounded-lg border border-slate-100 bg-slate-50 object-cover shadow-lg"
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
