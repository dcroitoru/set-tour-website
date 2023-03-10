<script>
	import Blog from '../components/Blog.svelte';
	import Deals from '../components/Deals.svelte';
	import Testimonials from '../components/Testimonials.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1 class="h1">
	<div class="container">Set Tour - Travel with style</div>
</h1>
<Deals max={3} />
<Testimonials />
<Blog />
