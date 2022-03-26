<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<a id="learnMore" on:click={() => (visible = true)}>Disclaimer</a>

{#if visible}
    <div id="disclaimerInfo" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
    </div>
{/if}

<style>
    #disclaimerInfo {
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
        z-index: 1;
    }
    #disclaimerInfo #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
</style>
