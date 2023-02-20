<script>
	import facebook from '$lib/images/facebook_icon.png';
	import instagram from '$lib/images/instagram_icon.png';
	import youtube from '$lib/images/youtube_icon.png';

	const links = [
		{
			text: 'Oferte',
			url: '/offers'
		},
		{
			text: 'Blog',
			url: '/blog'
		},
		{
			text: 'Documente',
			url: '/docs'
		},
		{
			text: 'Contact',
			url: '/contact'
		}
	];

	const social = [
		{
			text: 'Facebook',
			icon: facebook,
			url: 'https://www.facebook.com/SetTourTM'
		},
		{
			text: 'Instagram',
			icon: instagram,
			url: 'https://www.instagram.com/set_tour/'
		},
		{
			text: 'Youtube',
			icon: youtube,
			url: 'https://www.youtube.com/@settourromania5407'
		}
	];
</script>

<h2>Link-uri utile</h2>

<section class="links-container">
	<ul class="column links-column">
		{#each links as l}
			<li>
				<a href={l.url} class="link">▸ {l.text}</a>
			</li>
		{/each}

		<li />
	</ul>

	<ul class="social-links-column">
		{#each social as l}
			<li>
				<a href={l.url} target="_blank" rel="noreferrer" class="social-link">
					<img src={l.icon} alt={l.text} />
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	@media (min-width: 600px) {
		.links-container {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
	}

	.column {
		border-right: 1px solid #0000000d;
		margin-left: 40px;
	}

	.links-column {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.link {
		font-size: 14px;
	}

	.social-links-column {
		display: flex;
		gap: 20px;
		justify-content: center;
		padding: 20px;
	}

	.social-link {
	}

	.social-link > img {
		max-width: 32px;
		max-height: 32px;

		border-radius: 25%;
		padding: 10px;
	}

	.social-link > img:hover {
		box-shadow: 0px 0px 0px 3px rgba(0, 144, 237, 0.4);
	}
</style>
