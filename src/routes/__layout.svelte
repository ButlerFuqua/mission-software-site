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
			<a href="/disclaimer">Disclaimer</a>
		</p>
	</div>
</footer>

<style>
	main {
		min-height: 90vh;
		padding: 0;
		margin: 0 auto;
	}

	footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: var(--dark-color);
		min-height: 10vh;
	}

	footer a {
		font-weight: bold;
	}
</style>
