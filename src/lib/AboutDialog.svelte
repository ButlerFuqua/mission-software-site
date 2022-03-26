<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<button id="learnMore" on:click={() => (visible = true)}>Learn More</button>

{#if visible}
    <div id="moreInfo" in:fly={{ y: 200, duration: 300 }} out:fade>
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
    </div>
{/if}

<style>
    #moreInfo {
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
    #moreInfo #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
    button#learnMore {
        padding: 0;
        background: none;
        color: var(--primary-color);
        box-shadow: none;
        margin: 0;
    }
</style>
