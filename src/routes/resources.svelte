<script context="module">
    export const prerender = true;
</script>

<script>
    import PageTitle from "../lib/layout/PageTitle.svelte";
    import CTA from "../lib/widgets/CTA.svelte";

    const resources = [
        {
            name: "GreenGeeks",
            desc: "Static site hosting. Great for WordPress",
            link: "/",
        },
        {
            name: "Divi WordPress theme",
            desc: "Drag and dro site builder for WordPress",
            link: "/",
        },
        {
            name: "DIY Website tutorial",
            desc: "Tutorial on how to build a website using WordPress",
            link: "/",
        },
    ];
</script>

<svelte:head>
    <title>Resources | Mission Software</title>
</svelte:head>

<PageTitle title="Resources" />

<div class="container">
    <h2>Want to build your own website or app?</h2>
    <h3>Here are some resources for ya.</h3>
    <p>
        <small>
            <em>Some links may be affiliate links.</em>
        </small>
    </p>

    <ul>
        {#each resources as res}
            <li class="card">
                <h4>
                    {res.name}
                </h4>
                <p>
                    {res.desc}
                </p>
                <a href={res.linl} target="_blank">Visit</a>
            </li>
        {/each}
    </ul>

    <h3>Like what we're doing?</h3>
    <p>Please consider supporting us or becoming a client.</p>
    <CTA />
    <br />
</div>

<style>
    ul {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    li {
        list-style: none;
        margin: none;
    }
    li.card {
        width: 100%;
        padding: 1rem;
        height: auto;
    }
</style>
