<script>
	import Blog from '../components/Blog.svelte';
	import Offers from '../components/Offers.svelte';
	import Testimonials from '../components/Testimonials.svelte';

	export let data;

	let items = data.items;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="h1">
	<div class="container">Set Tour - Travel with style</div>
</h1>
<Offers />
<Testimonials />
<Blog />

<!-- <section>

	{#each data.items as item}
		<ul>
			<li>
				<a href="products/{item.id}">{item.title}</a>
			</li>
		</ul>
	{/each}
</section> -->
