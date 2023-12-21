/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#86efac',
				'primary-dark': '#4ade80',
				secondary: '#ffffff',
				body: '#64748b',
				heading: '#020617'
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
