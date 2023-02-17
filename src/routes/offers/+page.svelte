<script>
	import offers from '$lib/data/offer.json';

	// @ts-ignore
	const getImage = (name) => `background-image: url(places/${name}.jpg);`;
</script>

<h1 class="h1">
	<div class="container">Oferte</div>
</h1>

<section class="cards">
	{#each offers as offer}
		<div class="offer">
			<div class="image" style={getImage(offer.name)} />
			<div class="details">
				<div class="country">
					{offer.country}
				</div>

				<span class="price">
					{offer.price} €
				</span>
			</div>
		</div>
	{/each}
</section>

<style>
	.cards {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		gap: 1rem;
		padding: 10px;
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

	.image {
		background-size: cover;
		background-position: 50%;
		height: 250px;
		position: relative;
	}

	.details {
		font-size: 16px;
		margin-bottom: 40px;
		display: flex;
	}

	.country {
		font-size: 1.25rem;
		font-weight: 500;
		flex-grow: 1;
	}

	.price {
		font-size: 1.5rem;
		font-weight: 500;
		color: #ee4d34;
	}
</style>
