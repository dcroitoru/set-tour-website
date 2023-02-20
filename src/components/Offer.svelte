<script>
	// @ts-nocheck

	const getImage = (name) => `background-image: url(places/${name}.jpg);`;

	export let offer;
</script>

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

<style>
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
