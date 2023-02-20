<script>
	import data from '$lib/data/offer.json';
	import Offers from '../../components/Offers.svelte';
</script>

<h1 class="h1">
	<div class="container">Oferte</div>
</h1>

<Offers {data} />
