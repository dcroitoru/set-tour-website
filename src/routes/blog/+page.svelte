<script>
	import blogData from '$lib/data/blog.json';

	console.log(blogData);
</script>

<h1>
	<div class="container">Blog</div>
</h1>

<div class="container videos-container">
	{#each blogData as video}
		<article>
			<h3>{video.title}</h3>
			<div class="iframe-container">
				<iframe frameborder="0" class="responsive-iframe" title={video.title} src={video.url} />
			</div>
		</article>
	{/each}
</div>

<style>
	.videos-container {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin-bottom: 80px;
	}
</style>
