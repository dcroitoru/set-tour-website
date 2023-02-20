<script>
	import offers from '$lib/data/offer.json';
	import Offer from './Offer.svelte';

	export let data = offers.slice(0, 3);
</script>

<section class="container cards">
	{#each data as offer}
		<Offer {offer} />
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
