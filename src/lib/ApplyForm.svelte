<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;

    const submitForm = (event) => {
        event.preventDefault();
        console.log("submit form");
    };
</script>

<button id="applyBtn" on:click={() => (visible = true)}
    >Apply to be a client</button
>

{#if visible}
    <div id="applyForm" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
        <form on:submit={submitForm}>
            <div class="fullInput">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" />
            </div>
            <div class="fullInput">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" />
            </div>
            <div class="fullInput">
                <label for="orgName">Name of Organization</label>
                <input type="text" name="orgName" id="orgName" />
            </div>
            <div class="fullInput">
                <label for="aboutOrg">About your organization</label>
                <textarea name="aboutOrg" id="aboutOrg" />
            </div>
            <div class="fullInput">
                <label for="projectNeeds">What do you need built and why?</label
                >
                <textarea name="projectNeeds" id="projectNeeds" />
            </div>
            <button id="submitBtn">Submit</button>
        </form>
    </div>
{/if}

<style>
    #applyForm {
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
    #applyForm #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
</style>
