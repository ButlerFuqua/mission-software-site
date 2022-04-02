<script>
    import { services } from "../../data/services";
</script>

<div class="services">
    {#each services as service}
        <div class="card">
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
        </div>
    {/each}
</div>

<style>
    .services {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .card {
        width: 100%;
    }
</style>
