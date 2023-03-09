<script>
	import MarkdownIt from 'markdown-it';

	const md = new MarkdownIt();

	let markdown = `    
    
    

`;

	let result = md.render(markdown);
</script>

<article class="markdown">
	<h1>
		<div class="container">Phuket</div>
	</h1>
	<div class="container">
		{@html result}
	</div>
</article>

<style>
    :global(img) {
		width: 100%;
	}
</style>
