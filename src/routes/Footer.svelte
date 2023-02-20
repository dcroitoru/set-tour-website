<script>
	import Links from '../components/Links.svelte';
	import Newsletter from '../components/Newsletter.svelte';

	import bg from '$lib/images/bg.png';
</script>

<section class="footer">
	<section>
		<div class="container newsletter">
			<Newsletter />
		</div>
	</section>

	<section>
		<div class="container links">
			<Links />
		</div>
	</section>

	<section>
		<p>SET TOUR AND TRIP S.R.L. CUI RO35823042 Nr. Reg. Com. J35/805/2016</p>
		<p>Licenta turism nr. 1534 / 19.03.2019</p>
		<p>Brevet turism nr. 24488 / 07.07.2015 - Raluca Uta</p>
		<p>Polita asigurare nr. 3338 / 27-12-2021 - GERROMA</p>
	</section>
</section>

<style>
	.footer {
		/* background-image: url('bg.png'); */
	}

	section {
		padding: 20px 0;
		background-color: #fafafa;
	}

	p {
		font-size: 12px;
		text-align: center;
	}

	.newsletter {
		border-bottom: 1px solid #0000000d;
		padding: 20px;
	}

	.links {
		border-bottom: 1px solid #0000000d;
	}
</style>
