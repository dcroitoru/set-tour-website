<script>
	import reviews from '$lib/data/reviews.json';

	let index = 0;
	let maxIndex = reviews.length - 1;
	$: review = reviews[index];

	const next = () => (index < maxIndex ? index++ : (index = 0));
	// @ts-ignore
	const setIndex = (i) => (index = i);
</script>

<section class="root">
	<section class="container">
		<div class="quot">❝</div>

		<div class="review-text">{@html review.text}</div>
		<div class="review-name">- {review.name}</div>

		<div class="buttons">
			{#each reviews as r, i}
				<label for="">
					<input
						type="radio"
						name="review"
						value={i}
						on:click={() => setIndex(i)}
						checked={i === index}
					/>
				</label>
			{/each}
		</div>
	</section>
</section>

<style>
	.root {
		background-color: #f5f4f2;
	}

	.quot {
		font-size: 120px;
		color: #37c2ee;
		margin: -45px 0;
		text-align: center;
	}

	.review-text {
		text-align: center;
		color: #999;
		padding: 20px 0;
	}

	@media (min-width: 600px) {
		.review-text {
			padding: 20px 80px;
		}
	}

	.review-name {
		text-align: center;
		color: #333;
		font-weight: 700;
	}

	.buttons {
		display: flex;
		justify-content: center;
		padding: 40px 0;
	}
</style>
