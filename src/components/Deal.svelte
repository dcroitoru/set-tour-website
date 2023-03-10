<script>
	// @ts-nocheck

	import DealImage from './DealImage.svelte';
	export let deal;
</script>

<a href={'deals/' + deal.name}>
	<div class="deal">
		<DealImage {deal} />
		<div class="details">
			<div class="country">
				{deal.country}
			</div>

			<span class="price">
				{deal.price} €
			</span>
		</div>
	</div>
</a>

<style>
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
