<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<p>Apply to be a client</p>
<button on:click={() => (visible = true)}>Show Apply Form</button>

{#if visible}
    <div id="applyForm" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
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
        background-color: var(--primary-color);
        z-index: 1;
    }
    #applyForm #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
</style>
