<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import Goal from "./Goal.svelte";
    import Spinner from "./Spinner.svelte";

    let loadingGoals = true;
    let goals;

    let monthlyAmount;
    let oneTimeAmount;

    const getSubmissions = async () => {
        try {
            const response = await axios.get(`/api/list-submissions`);
            monthlyAmount = response.data.pledges.monthly
                .map((item) => item.Amount)
                .reduce((a, b) => a + b);
            oneTimeAmount = response.data.pledges.oneTime
                .map((item) => item.Amount)
                .reduce((a, b) => a + b);
            console.log(monthlyAmount, oneTimeAmount);
        } catch (error) {
            console.error(error);
        }
    };
    onMount(async () => {
        await getSubmissions();

        goals = [
            {
                name: "Initial Funds",
                raised: oneTimeAmount,
                total: 1000,
            },
            {
                name: "Monthly Funds",
                raised: monthlyAmount,
                total: 1000,
            },
            {
                name: "Approved Clients",
                raised: 0,
                total: 3,
            },
        ];
        loadingGoals = false;
    });
</script>

<div class="container">
    <p>
        <span>Mission software will launch</span> once we reach our
        <span>goals</span>.
    </p>
    {#if !loadingGoals}
        <div id="goalContainer">
            {#each goals as goal}
                <Goal {goal} />
            {/each}
        </div>
    {:else}
        <div style="display: flex; justify-content: center;">
            <Spinner />
        </div>
    {/if}
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
