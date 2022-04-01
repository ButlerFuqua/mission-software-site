<script>
    import { fly } from "svelte/transition";
    $: services = [
        {
            name: "Web site",
            desc: "Build or redesign a website for your church or ministry.",
        },
        {
            name: "Web App",
            desc: "A custom web app with login, content managment, and more.",
        },
        {
            name: "Mobile App",
            desc: "A custom mobile app to meet the needs of your organization.",
        },
    ];
</script>

<div class="container">
    {#each services as service}
        <div class="serviceCard" in:fly={{ y: 100, duration: 200 }}>
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
        </div>
    {/each}
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .serviceCard {
        padding: 0.5rem 1rem;
        width: 100%;
        height: 10rem;
        max-width: 100%;
        text-align: left;
        background-color: var(--pure-white);
        border-radius: 0.5rem;
        margin: 1rem;
        box-shadow: 0px 0px 21px rgb(0 0 0 / 18%);
    }
</style>
