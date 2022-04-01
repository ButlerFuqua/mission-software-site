<script>
    import { goto } from "$app/navigation";
    const services = [
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
    <h2 class="text=center">Services</h2>
    <div class="services">
        {#each services as service}
            <div class="serviceCard">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
            </div>
        {/each}
    </div>
    <br />
    <button on:click={() => goto("/services")}>More</button>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .services {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .serviceCard {
        padding: 0.5rem 1rem;
        width: 18rem;
        height: 10rem;
        max-width: 100%;
        text-align: center;
        background-color: var(--pure-white);
        border-radius: 0.5rem;
        margin: 0.5rem;
        box-shadow: 0px 0px 21px rgb(0 0 0 / 18%);
    }
</style>
