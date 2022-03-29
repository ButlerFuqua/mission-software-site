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
        <br />
        <br />
        <div class="mt-2">
            <p>Websites | Web apps | Mobile apps</p>
        </div>
    </div>
{/if}

<style>
    #moreInfo {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 2;
        overflow: auto;
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
