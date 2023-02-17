<script>
	import logo from '$lib/images/logo-sm.png';
</script>

<section class="top-bar">
	<ul class="top-links container">
		<li>
			<a href="tel:0787 789 296">
				<i class="fas fa-phone" />
				<span>0787 789 296</span>
			</a>
		</li>

		<li>
			<a href="mailto:contact@set-tour.ro">
				<i class="fas fa-envelope" />
				<span>contact@set-tour.ro</span>
			</a>
		</li>

		<li>
			<a href={'#'} class="header-schedule">L-V 09:00-17:00</a>
		</li>
	</ul>
</section>

<div class="nav-wrapper">
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

<style>
	.nav-wrapper {
		padding-top: 20px;
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
		padding-right: 8px;
		padding-left: 8px;
	}
	/* .top-links > a {
		color: #252525;
		padding: 1rem;
		font-size: 12px;
		display: block;
	} */
</style>
