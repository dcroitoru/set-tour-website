<script lang="ts">
	export let data: {
		slug: string;
		post: string;
		title: string;
		image: string;
	};

	const getImage = (deal) => {
		const name = deal.image || deal.name;
		return `background-image: url(/places/${name}.jpg);`;
	};
</script>

<h1>
	<p class="container">
		{data.title}
	</p>
</h1>

{#if data?.image}
	<div class="container image" style={getImage(data)} />
	<!-- <div class="container">
		<img src={getImage(data)} alt="" />
	</div> -->
{/if}
<article class="container article">
	{@html data.post}
</article>

<style>
	/* :global(img) {
		width: 100%;
	} */

	.image {
		background-size: cover;
		background-position: 50%;
		max-width: 600px;
		height: 400px;
		position: relative;
	}

	:global(th) {
		background-color: #de002e;
		color: white;
		font-size: 12px;
		padding: 8px 20px;
	}

	:global(tr:nth-child(even)) {
		background-color: #eaf6ff;
	}

	:global(td) {
		padding: 4px 8px;
	}

	.article {
		overflow: overlay;
		margin-bottom: 80px;
	}

	@media (min-width: 1200px) {
		.article {
			display: grid;
			place-items: center;
		}
	}
</style>
