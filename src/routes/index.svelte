<script context="module">
	export const prerender = true;
</script>

<script>
	import Particles from "$lib/particles.svelte";
</script>

<svelte:head>
	<title>Mission Software</title>
</svelte:head>

<section>
	<h1>Mission Software</h1>
	<p>Custom web and mobile apps for nonprofits and qualifying businesses.</p>
	<hr />
</section>

<section>
	<p>Apply to be a client</p>
	<button>Show form</button>
	<p>Pledge to provide financial support</p>
	<button>Show form</button>
</section>
<Particles />

<style>
	section {
		text-align: center;
	}
</style>
