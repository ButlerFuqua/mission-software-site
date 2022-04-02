<script>
    import { goto } from "$app/navigation";
    import { topServices as services } from "../../data/services";
</script>

<div class="container">
    <h2 class="text=center">Services</h2>
    <div class="services">
        {#each services as service}
            <div class="card">
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
            </div>
        {/each}
    </div>
    <br />
    <div class="flex">
        <button class="tertiary" on:click={() => goto("/apply")}>Apply</button>
        <button class="secondary" on:click={() => goto("/support")}
            >Support</button
        >
    </div>
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
    .card {
        text-align: center;
    }
</style>
