<script>
	export let data;

	let items = data.items;
	

</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<h1>Set tour</h1>

	{#each data.items as item}
		<ul>
			<li>
				<a href="products/{item.id}">{item.title}</a>
			</li>
		</ul>
	{/each}
</section>
