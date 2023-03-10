<script lang="ts">
	import data from '$lib/data/deals.json';
	import Deal from './Deal.svelte';

	// export let data = offers.slice(0, 3);

	export let max: number = 0;
	const deals = max ? data.slice(0, max) : data;
</script>

<section class="container cards">
	<!-- {#each $posts as post}

	{post.title}
	{/each} -->

	{#each deals as deal}
		<Deal {deal} />
	{/each}
</section>

<style>
	.cards {
		display: grid;
		gap: 1rem;
		padding: 80px 20px;
	}
	@media (min-width: 600px) {
		.cards {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 900px) {
		.cards {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
