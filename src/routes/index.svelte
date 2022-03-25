<script context="module">
	export const prerender = true;
</script>

<script>
	import Particles from "$lib/Particles.svelte";
	import ApplyForm from "$lib/ApplyForm.svelte";
	import PledgeForm from "$lib/PledgeForm.svelte";
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
	<ApplyForm />
	<PledgeForm />
</section>
<Particles />

<style>
	section {
		text-align: center;
	}
</style>
