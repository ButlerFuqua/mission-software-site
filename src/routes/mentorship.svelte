<script context="module">
    export const prerender = true;
</script>

<script>
    import PageTitle from "../lib/layout/PageTitle.svelte";
    import CTA from "../lib/widgets/CTA.svelte";
</script>

<svelte:head>
    <title>Mentorship | Mission Software</title>
</svelte:head>

<PageTitle title="Mentorship" />
<div class="container">
    <h2>Want to get into the tech industry?</h2>
    <h3>You're in the right place</h3>
    <p>
        Mission Software provides mentoring if/when we have the resources to do
        so.
    </p>
    <CTA />
</div>

<style>
</style>
