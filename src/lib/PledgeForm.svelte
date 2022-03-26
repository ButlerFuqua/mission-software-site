<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;

    const submitForm = (event) => {
        event.preventDefault();
        console.log("submit form");
    };
</script>

<button id="pledgeBtn" on:click={() => (visible = true)}
    >Pledge to provide financial support</button
>

{#if visible}
    <div id="pledgeForm" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
        <form on:submit={submitForm}>
            <div class="fullInput">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            
            <div class="fullInput">
                <label for="donationAmount">Donation amount $ (USD)</label>
                <input
                    type="number"
                    name="donationAmount"
                    id="donationAmount"
                />
            </div>

            <div class="fullInput">
                <div class="checkboxContainer">
                    <label for="oneTime">One time donation</label>
                    <input type="checkbox" name="oneTime" id="oneTime" />
                </div>
                <div class="checkboxContainer">
                    <label for="monthly">Monthly donation</label>
                    <input type="checkbox" name="monthly" id="monthly" />
                </div>
            </div>

<p>

<small>
You will be emailed when we start accepting donations.
</small>

</p>

            <button id="submitBtn">Submit</button>
        </form>
    </div>
{/if}

<style>
    #pledgeForm {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 2;
    }
    #pledgeForm #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
    button#pledgeBtn {
        padding: 0;
        background: none;
        color: var(--primary-color);
        box-shadow: none;
        margin: 0;
    }
</style>
