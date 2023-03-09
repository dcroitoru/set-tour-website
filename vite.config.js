import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { string } from 'rollup-plugin-string';

export default defineConfig({
	plugins: [
		sveltekit(),
		string({
			// Required to be specified
			include: '**/*.md'
		})
	],
	server: {
		port: 5174,
		strictPort: false
	},
	preview: {
		port: 4174,
		strictPort: false
	}
});
