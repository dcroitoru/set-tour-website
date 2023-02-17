<script>
	import Footer from './Footer.svelte';
	import Header from './Header.svelte';	
	import './styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	.app {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex-grow: 1;
	}
</style>
