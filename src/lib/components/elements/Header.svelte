<script>
	import logo from '$lib/assets/images/logos/logo.svg';

	let showMenu = false;

	const toggleMenu = () => {
		showMenu = !showMenu;
	};

	const navigation = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/#about' },
		{ name: 'Services', href: '/#services' },
		{ name: 'Portfolio', href: '/#portfolio' },
		{ name: 'Pricing', href: '/#pricing' },
		{ name: 'Contact', href: '/#contact' },
		{ name: 'Blog', href: '/blog' }
	];
</script>

<header class="bg-white sticky top-0 z-50 flex w-full flex-col duration-200 ease-in-out">
	<div class="flex items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img class="h-8 w-auto" src={logo} alt="webexpressions logo" />
			</a>
		</div>
		<div class="flex">
			<button
				type="button"
				on:click={() => toggleMenu()}
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-text"
			>
				<span class="sr-only">Open main menu</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
					class="w-8 h-8"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
					/>
				</svg>
			</button>
		</div>
	</div>
	<!-- Menu, show/hide based on menu open state. -->
	{#if showMenu}
		<div class="" role="dialog" aria-modal="true">
			<!-- Background backdrop, show/hide based on slide-over state. -->
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" on:click={() => toggleMenu()} class="-m-1.5 px-1.5">
						<span class="sr-only">Your Company</span>
						<img class="h-8 w-auto" src={logo} alt="webexpressions logo" />
					</a>
					<button
						type="button"
						on:click={() => toggleMenu()}
						class="-m-2.5 rounded-md p-1.5 lg:px-2.5"
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
						<nav class="mt-8 flex flex-col items-end space-y-4 lg:space-y-6">
							{#each navigation as item}
								<a
									href={item.href}
									on:click={() => toggleMenu()}
									class="-mx-3 block rounded-lg py-3 px-5 text-2xl lg:text-3xl font-bold leading-7 text-heading hover:text-body ease-in-out duration-150"
								>
									{item.name}
								</a>
							{/each}
						</nav>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
