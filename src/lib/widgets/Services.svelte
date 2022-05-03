<script>
    import CTA from "../widgets/CTA.svelte";
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
    <CTA />
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
