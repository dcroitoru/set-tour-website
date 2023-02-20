<script>
// @ts-nocheck

	import articles from '$lib/data/blog.json';

	const getUrl = (id) => `https://www.youtube.com/video/${id}`;
</script>

<section class="root">
	<h2>
		<div class="container">Blog</div>
	</h2>

	<div class="container articles">

		{#each articles as article}
			<a href={getUrl(article.id)}>{article.title}</a>
		{/each}
	</div>

</section>

<style>
	.root {
		padding: 40px 0;
	}

	.articles {
		display: flex;
		flex-direction: column;
		gap: 20px;
		text-decoration: underline;
	}
</style>
