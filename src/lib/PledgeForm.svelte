<script>
    import { fade, fly } from "svelte/transition";
    import axios from "axios";
    import Spinner from "./Spinner.svelte";

    let visible = false;
    let submittingForm = false;
    let showSuccessMessage = false;
    let showErrorMessage = false;
    let errors = [];
    let email = "",
        amount = 0.0,
        oneTime = false,
        monthly = false;

    const validateForm = () => {
        if (!email || email.trim() === "")
            errors.push(`Email is a required field.`);
        if (amount < 1) errors.push(`Please enter an amount.`);
        if (!oneTime && !monthly)
            errors.push(`Please enter at one time and/or monthly.`);
    };

    const showFormErrors = () => {
        submittingForm = false;
        alert(errors.join(","));
    };

    const clearForm = () => {
        (amount = 0), (oneTime = false), (monthly = false);
        email = "";
        submittingForm = false;
        showSuccessMessage = false;
    };

    const closeForm = () => {
        clearForm();
        visible = false;
    };

    const handleSuccess = () => {
        clearForm();
        showSuccessMessage = true;
    };

    const handleError = (error) => {
        showErrorMessage = true;
        console.error(error);
    };

    const clearMessages = () => {
        submittingForm = false;
        showSuccessMessage = false;
        showErrorMessage = false;
    };

    const submitForm = async (event) => {
        event.preventDefault();
        submittingForm = true;
        errors = [];

        validateForm();

        if (errors.length) return showFormErrors();

        try {
            await axios.post(`/api/add-pledge`, {
                email,
                amount,
                oneTime,
                monthly,
            });
            handleSuccess();
        } catch (error) {
            console.error("error", error);
            handleError(error);
        } finally {
            submittingForm = false;
        }
    };
</script>

<button id="pledgeBtn" on:click={() => (visible = true)}
    >Pledge to provide financial support</button
>

{#if visible}
    <div
        id="pledgeForm"
        class={submittingForm || showSuccessMessage || showErrorMessage
            ? "center-form"
            : ""}
        in:fly={{ y: 200, duration: 300 }}
        out:fade
    >
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
        {#if !submittingForm && !showSuccessMessage && !showErrorMessage}
            <form on:submit={submitForm} class="mt-2">
                <div class="fullInput">
                    <label for="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        bind:value={email}
                    />
                </div>

                <div class="fullInput">
                    <label for="donationAmount">Donation amount $ (USD)</label>
                    <input
                        type="number"
                        name="donationAmount"
                        id="donationAmount"
                        min="0.00"
                        step="1.00"
                        required
                        bind:value={amount}
                    />
                </div>

                <div class="fullInput">
                    <div class="checkboxContainer">
                        <label for="oneTime">One time donation</label>
                        <input
                            type="checkbox"
                            name="oneTime"
                            id="oneTime"
                            bind:checked={oneTime}
                        />
                    </div>
                    <div class="checkboxContainer">
                        <label for="monthly">Monthly donation</label>
                        <input
                            type="checkbox"
                            name="monthly"
                            id="monthly"
                            bind:checked={monthly}
                        />
                    </div>
                </div>

                <p>
                    <small>
                        You will be emailed when we start accepting donations.
                    </small>
                </p>

                <button id="submitBtn">Submit</button>
            </form>
        {:else if !showSuccessMessage && !showErrorMessage}
            <Spinner />
        {:else if showErrorMessage}
            <div class="pa-1">
                <h2>Ooops... :(</h2>
                <p>Looks like there was an error</p>
                <p>
                    <button on:click={clearMessages}>Try Again</button>
                </p>
            </div>
        {:else if showSuccessMessage}
            <div class="pa-1">
                <h2>Pledge submitted!</h2>
                <p>Thank you!</p>
                <p>
                    A message will be sent to the email you provided when
                    Mission Software begins accepting donations.
                </p>
                <p>
                    You have contributed to helping Mission Software move the
                    Gospel and build disciples of jesus.
                </p>
                <p>
                    <button on:click={closeForm}>Close form</button>
                </p>
            </div>
        {/if}
    </div>
{/if}

<style>
    #pledgeForm {
        position: fixed;

        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 2;
        overflow: auto;
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
