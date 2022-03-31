<script>
    import { fade, fly } from "svelte/transition";
    import axios from "axios";
    import Spinner from "../loaders/Spinner.svelte";

    let visible = false;
    let submittingForm = false;
    let showSuccessMessage = false;
    let showErrorMessage = false;
    let errors = [];
    let orgName = "",
        firstName = "",
        lastName = "",
        email = "",
        aboutOrg = "",
        needs = "";

    const validateForm = () => {
        if (!orgName || orgName.trim() === "")
            errors.push(`Organization Name is a required field.`);
        if (!firstName || firstName.trim() === "")
            errors.push(`First Name is a required field.`);
        if (!lastName || lastName.trim() === "")
            errors.push(`Last Name is a required field.`);
        if (!email || email.trim() === "")
            errors.push(`Email is a required field.`);
        if (!aboutOrg || aboutOrg.trim() === "")
            errors.push(`About Organization is a required field.`);
        if (!needs || needs.trim() === "")
            errors.push(`Please explain what you need build at why.`);
    };

    const showFormErrors = () => {};

    const clearForm = () => {
        orgName = "";
        firstName = "";
        lastName = "";
        email = "";
        aboutOrg = "";
        needs = "";
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
            await axios.post(`/api/add-client`, {
                orgName,
                firstName,
                lastName,
                email,
                aboutOrg,
                needs,
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

<button id="applyBtn" on:click={() => (visible = true)}
    >Apply to be a client</button
>

{#if visible}
    <div
        id="applyForm"
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
                    <label for="firstName">First Name</label>
                    <input
                        required
                        type="text"
                        name="firstName"
                        id="firstName"
                        bind:value={firstName}
                    />
                </div>
                <div class="fullInput">
                    <label for="lastName">Last Name</label>
                    <input
                        required
                        type="text"
                        name="lastName"
                        id="lastName"
                        bind:value={lastName}
                    />
                </div>
                <div class="fullInput">
                    <label for="email">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        bind:value={email}
                    />
                </div>
                <div class="fullInput">
                    <label for="orgName">Name of Organization</label>
                    <input
                        required
                        type="text"
                        name="orgName"
                        id="orgName"
                        bind:value={orgName}
                    />
                </div>
                <div class="fullInput">
                    <label for="aboutOrg">About your organization</label>
                    <textarea
                        required
                        name="aboutOrg"
                        id="aboutOrg"
                        bind:value={aboutOrg}
                    />
                </div>
                <div class="fullInput">
                    <label for="projectneeds"
                        >What do you need built and why?</label
                    >
                    <textarea
                        required
                        name="projectneeds"
                        id="projectneeds"
                        bind:value={needs}
                    />
                </div>
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
                <h2>Applicaiton submitted!</h2>
                <p>Thank you!</p>
                <p>
                    Your application was sent successfully. You will be
                    contacted if we decide to move forward with your project.
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
    #applyForm {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 2;
        overflow: auto;
    }
    #applyForm #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
</style>
