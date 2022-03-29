<script>
    import { onMount } from "svelte";
    import axios from "axios";
    import Goal from "./Goal.svelte";
    import Spinner from "./Spinner.svelte";

    let loadingGoals = true;
    let goals;

    let monthlyAmount;
    let oneTimeAmount;

    const setAmounts = (monthly, oneTime) => {
        if (monthly.length) {
            monthlyAmount = monthly
                .map((item) => item.Amount)
                .reduce((a, b) => a + b);
        } else {
            monthlyAmount = 0;
        }
        if (oneTime.length) {
            oneTimeAmount = oneTime
                .map((item) => item.Amount)
                .reduce((a, b) => a + b);
        } else {
            oneTimeAmount = 0;
        }
    };

    const getSubmissions = async () => {
        try {
            const response = await axios.get(`/api/list-submissions`);
            setAmounts(
                response.data.pledges.monthly,
                response.data.pledges.oneTime
            );
        } catch (error) {
            console.error(error);
        }
    };
    onMount(async () => {
        await getSubmissions();

        goals = [
            {
                name: "Initial Funds",
                raised: oneTimeAmount || 0,
                total: 1000,
            },
            {
                name: "Monthly Funds",
                raised: monthlyAmount || 0,
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
