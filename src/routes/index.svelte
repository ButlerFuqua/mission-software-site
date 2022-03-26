<script context="module">
	export const prerender = true;
</script>

<script>
	import Particles from "$lib/Particles.svelte";
	import ApplyForm from "$lib/ApplyForm.svelte";
	import PledgeForm from "$lib/PledgeForm.svelte";
	import AboutDialog from "$lib/AboutDialog.svelte";
	import CurrentCount from "$lib/CurrentCount.svelte";
</script>

<svelte:head>
	<title>Mission Software</title>
</svelte:head>
<div class="banner">
	<div class="container">
		<section>
			<img src="./logo.png" alt="SvelteKit" />
			<h1>Mission Software</h1>
			<p>
				Free to low-cost web and mobile apps for nonprofits and
				qualifying businesses.
			</p>
			<AboutDialog />
		</section>
	</div>
</div>

<CurrentCount />

<section id="applySection" class="container">
	<div>
		<ApplyForm />
	</div>
	<div>
		<PledgeForm />
	</div>
</section>
<Particles />

<style>
	img {
		max-width: 100px;
	}
	section {
		text-align: center;
	}
	.banner {
	}
	#applySection {
		background-color: var(--white);
		color: var(--text-color-dark);
	}
	#applySection.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		padding: 0;
	}
	#applySection.container div {
		padding: 0.5rem;
		margin: 0.5rem;
		width: 20rem;
		max-width: 100%;
	}
</style>
