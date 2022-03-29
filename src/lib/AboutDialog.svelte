<script>
    import { fade, fly } from "svelte/transition";
    let visible = false;
</script>

<button id="learnMore" on:click={() => (visible = true)}>Learn More</button>

{#if visible}
    <div
        id="moreInfo"
        class="container"
        in:fly={{ y: 200, duration: 300 }}
        out:fade
    >
        <div id="closeBtnContainer">
            <button on:click={() => (visible = false)}>Close</button>
        </div>
        <br />
        <br />
        <div class="mt-2">
            <h2>What is <span class="red-text">Mission Software</span>?</h2>
            <p>
                <strong>The main goal of Mission Software</strong> is to
                <strong class="red-text"
                    >build free websites, web apps, and/or mobile apps for
                    Christian ministries</strong
                >.
            </p>
            <p>
                While not all projects will be 100% free, Mission Software aims
                to never charge for labor. For example, we may build a web app
                for free, but charge the cost of hosting.
            </p>
            <h3>In House software</h3>
            <p>
                Mission Software may also build projects of our own to <span
                    class="red-text">further the Gospel of Jesus Christ</span
                >, raise funds, or more.
            </p>
            <h3>Other qualifying organizations</h3>
            <p>
                Although Mission Software focuses on Christian ministries, other
                organizations may be considered as well.
            </p>
            <p>
                It is at the sole discretion of Mission Software whether or not
                an organization is accepted as a client.
            </p>
            <button on:click={() => (visible = false)}>Close</button>
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
        text-align: left;
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
