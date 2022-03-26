<script>
	import "../app.css";
</script>

<main>
	<slot />
</main>

<footer>
	<!-- <p>
		visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
	</p> -->
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		margin: 0 auto;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
		position: fixed;
		bottom: 0;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
