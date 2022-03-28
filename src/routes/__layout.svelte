<script>
	import "../app.css";
	import DisclaimerDialog from "../lib/DisclaimerDialog.svelte";
</script>

<main>
	<slot />
</main>

<footer>
	<div class="container">
		<p>
			<!-- <a href="/">Terms</a> -->
			<!-- <a href="/">Consent</a> -->
			<!-- <a href="/">Disclaimer</a> -->
			<DisclaimerDialog />
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

	/* @media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	} */
</style>
