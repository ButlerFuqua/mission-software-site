<script>
	import "../css/app.css";
	import SiteNavigation from "../lib/layout/SiteNavigation.svelte";
</script>

<SiteNavigation />

<main>
	<slot />
</main>

<footer>
	<div class="container">
		<p>
			<a href="/">Terms</a>
			<a href="/">Consent</a>
			<a href="/">Disclaimer</a>
		</p>
	</div>
</footer>

<style>
	main {
		padding: 0;
		margin: 0 auto;
	}

	footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	footer a {
		font-weight: bold;
	}
</style>
