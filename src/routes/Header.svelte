<script>
	import logo from '$lib/images/logo-sm.png';

	const getBackground = () => `background-image: url(banner4.jpg);`;
</script>

<section class="top-bar">
	<ul class="top-links container">
		<li>
			<a href="tel:0787 789 296">
				<i class="fas fa-phone" />
				<span class="contact-detail">0787-789-296</span>
			</a>
		</li>

		<li>
			<a href="mailto:contact@set-tour.ro">
				<i class="fas fa-envelope" />
				<span class="contact-detail">contact@set-tour.ro</span>
			</a>
		</li>

		<li>
			<a href={'#'} class="header-schedule">L-V 10:00-18:00</a>
		</li>
	</ul>
</section>

<div class="nav-wrapper" style={getBackground()}>
	<div class="nav-bg">
		<section class="container nav-section">
			<a href="/">
				<img class="logo" src={logo} alt="" />
			</a>

			<nav>
				<ul class="menu">
					<li>
						<a href="/">Acasa</a>
					</li>
					<li>
						<a href="/offers">Oferte</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</section>
	</div>
</div>

<style>
	.nav-wrapper {
		/* background-image: url(banner4.jpg); */
		min-height: 300px;
		background-size: cover;
		background-position-y: 60%;
	}

	@media (min-width: 600px) {
		.nav-wrapper {
			min-height: 400px;
		}
	}

	@media (min-width: 1200px) {
		.nav-wrapper {
			min-height: 500px;
		}
	}

	.nav-bg {
		padding-top: 20px;
		padding-bottom: 60px;
		background-image: linear-gradient(180deg, #ffffffff, #ffffffd8, #ffffff00);
	}
	.nav-section {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	nav {
		display: grid;
		place-items: center;
	}

	.menu {
		display: flex;
		gap: 10px;
	}

	.logo {
		max-height: 100px;
	}

	.top-bar {
		background-color: #fafafa;
		border-bottom: 1px solid #0000000d;
	}

	.top-links {
		display: flex;
		font-size: 12px;
	}

	.top-links > li {
		border-right: 1px solid #0000000d;
		height: 36px;
		display: flex;
		align-items: center;
		padding-right: 16px;
		padding-left: 16px;
	}

	.top-links > li:first-child {
		padding-left: 0px;
	}

	.top-links .contact-detail {
		display: none;
	}

	@media (min-width: 600px) {
		.top-links .contact-detail {
			display: initial;
		}
	}

	/* .top-links > a {
		color: #252525;
		padding: 1rem;
		font-size: 12px;
		display: block;
	} */
</style>
