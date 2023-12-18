<script>
	import companyLogo from '$lib/assets/images/logos/logo_bottom_text_white.svg';

	const features = [
		{
			name: 'Locally owned',
			description:
				'Rooted in our community just 35 minutes west of Cleveland, Ohio, webexpressions takes pride in understanding the local business landscape. Our close-knit team connects with clients on a personal level, offering friendly and accessible service.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Cutting edge',
			description:
				'Innovation drives us at webexpressions. We harness the latest technologies and creative thinking to provide solutions that are not only state-of-the-art but also future-ready. Stay ahead of the curve with our forward-thinking approach.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M16.5 7.5h-9v9h9v-9z" />
  <path fill-rule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3a.75.75 0 010-1.5h.75v-.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A.75.75 0 016.75 6h10.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75V6.75z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Straightforward pricing',
			description:
				'Transparency is our mantra. At webexpressions, we offer clear and competitive pricing without hidden fees or surprises. We work closely with you to ensure our services align with your budget and goals, making excellence affordable.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clip-rule="evenodd" />
</svg>
`
		},
		{
			name: 'Satisfaction guarantee',
			description:
				'Your success is our passion. We stand behind our work with unwavering commitment to quality, performance, and client satisfaction. With webexpressions, you can rest assured that our team will exceed your expectations every step of the way.',
			svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
</svg>
`
		}
	];
</script>

<div id="about" class="overflow-hidden bg-white py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 lg:px-8">
		<div
			class="mx-auto grid max-w-2xl grid-cols-1 lg:items-center gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
		>
			<div class="lg:ml-auto lg:pl-4">
				<div class="lg:max-w-lg">
					<h2 class="text-lg font-bold leading-8 text-primary">About us</h2>
					<p class="mt-2 text-3xl font-bold tracking-tight text-heading sm:text-4xl">
						A premier creative agency, fueled by passion
					</p>
					<p class="mt-6 text-lg leading-8 text-body">
						At webexpressions, we're more than just developers; we're architects of digital success.
						With deep-rooted expertise in web and app design, we offer cutting-edge services
						meticulously tailored to align with our clients' unique business goals. Our unwavering
						commitment to quality and customer satisfaction keeps us at the forefront of the
						ever-evolving digital landscape. By crafting innovative and forward-thinking solutions,
						we don't just meet expectations—we exceed them, empowering our clients to drive tangible
						and impactful results. Join us on this journey, and let's redefine what's possible
						together.
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
</div>
