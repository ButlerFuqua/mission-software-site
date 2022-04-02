<script context="module">
	export const prerender = true;
	import { goto } from "$app/navigation";
	import CTA from "../lib/widgets/CTA.svelte";
</script>

<script>
	import PageTitle from "../lib/layout/PageTitle.svelte";
	import AllServices from "$lib/widgets/AllServices.svelte";
</script>

<svelte:head>
	<title>Services | Mission Software</title>
</svelte:head>

<PageTitle title="Primary Services" />

<div class="container">
	<h2><span class="red-text">Not seeing a service you need</span>?</h2>
	<p>
		No worries. Please fee free to contact us anyway and we'll see what we
		can do.
	</p>
	<CTA />>
	<AllServices />
	<CTA />>
</div>

<style>
</style>
