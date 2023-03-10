<script>
// @ts-nocheck

	export let deal;

	const getImage = (deal) => {
		const name = deal.image || deal.name;
		return `background-image: url(/places/${name}.jpg);`;
	};
</script>

<div class="image" style={getImage(deal)} />

<style>
	.image {
		background-size: cover;
		background-position: 50%;
		height: 250px;
		position: relative;
	}
</style>
