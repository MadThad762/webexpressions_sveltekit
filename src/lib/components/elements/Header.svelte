<script>
	import logo from '$lib/assets/images/logos/logo.svg';

	let showMobileMenu = false;

	const navigation = [
		{ name: 'About', href: '/#about' },
		{ name: 'Services', href: '/#services' },
		{ name: 'Portfolio', href: '/#portfolio' },
		{ name: 'Pricing', href: '/#pricing' },
		{ name: 'Contact', href: '/#contact' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

<header class="bg-white sticky top-0 z-40 flex w-full flex-col duration-200 ease-in-out">
	<nav class="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img class="h-8 w-auto" src={logo} alt="webexpressions logo" />
			</a>
		</div>
		<div class="flex">
			<button
				type="button"
				on:click={() => (showMobileMenu = !showMobileMenu)}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.1"
					stroke="currentColor"
					class="w-10 h-10"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>
		</div>
	</nav>
	<!-- Mobile menu, show/hide based on menu open state. -->
	{#if showMobileMenu}
		<div class="" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src={logo} alt="webexpressions logo" />
					</a>
					<button
						type="button"
						on:click={() => (showMobileMenu = !showMobileMenu)}
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-10 w-10 text-heading"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2.1"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 flex flex-col divide-y divide-slate-500/10 pt-6">
						<div class="mt-8 flex flex-col items-end space-y-8">
							{#each navigation as item}
								<a
									href={item.href}
									on:click={() => (showMobileMenu = false)}
									class="-mx-3 block rounded-lg py-3 px-5 text-3xl font-bold leading-7 text-heading sm:hover:scale-110 sm:ease-in-out sm:duration-300"
								>
									{item.name}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
