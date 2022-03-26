<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<button id="pledgeBtn" on:click={() => (visible = true)}
    >Pledge to provide financial support</button
>

{#if visible}
    <div id="pledgeForm" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
    </div>
{/if}

<style>
    #pledgeForm {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--secondary-color);
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
