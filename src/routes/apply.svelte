<script context="module">
    export const prerender = true;
</script>

<script>
    import PageTitle from "../lib/layout/PageTitle.svelte";
    import ApplyForm from "../lib/forms/ApplyForm.svelte";
</script>

<svelte:head>
    <title>Apply | Mission Software</title>
</svelte:head>

<PageTitle title="Apply" />
<ApplyForm />

<style>
</style>
