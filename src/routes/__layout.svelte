<script>
	import "../app.css";
	import DisclaimerDialog from "../lib/DisclaimerDialog.svelte";
</script>

<div id="wrapper">
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
</div>

<style>
	#wrapper {
		height: 100vh;
	}
	main {
		padding: 0;
		padding-bottom: 60px;
		margin: 0 auto;
		height: 100%;
	}

	footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: fixed;
		height: 60;
		bottom: 0;
		z-index: 1;
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
