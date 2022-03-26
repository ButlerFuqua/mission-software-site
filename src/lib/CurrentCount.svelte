<script>
    import Goal from "./Goal.svelte";
    let goals = [
        {
            name: "Initial Funds",
            raised: 70,
            total: 1000,
        },
        {
            name: "Monthly Funds",
            raised: 300,
            total: 1000,
        },
        {
            name: "Approved Clients",
            raised: 1,
            total: 3,
        },
    ];
</script>

<div class="container">
    <p>
        <span>Mission software will launch</span> once we reach our
        <span>goals</span>.
    </p>
    <div id="goalContainer">
        {#each goals as goal}
            <Goal {goal} />
        {/each}
    </div>
</div>

<style>
    .container {
        text-align: center;
        padding: 0 inherit;
    }
    p {
        margin: 0;
    }
    .container p span {
        color: var(--neat-red);
        font-weight: bold;
    }
    #goalContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>
