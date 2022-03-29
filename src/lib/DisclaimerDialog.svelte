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
        <div class="container">
            <h1>Disclaimer</h1>
            <p>By visiting this website, you consent to these terms.</p>
            <p>
                This disclaimer may update at any time with or without notice.
            </p>
            <!-- <p>
                Personal pronouns such as "we", "I", or "our" refer to Mission
                Software.
            </p>
            <p>
                "You" or "your" referes to anyone visiting this webiste and/or
                you, the reader.
            </p> -->
            <h2>Pledge to donate</h2>
            <p>
                Filling out the form to provide financial support is only to
                give us an idea of when we'll will have the funding to launch.
            </p>
            <p>
                Please do not make a pledge unless you intend on fulfilling your
                pledge to support us financially.
            </p>
            <p>
                Your email is collected to notify you when Mission Software is
                accepting donations.
            </p>
            <h3>Apply to be a client</h3>
            <p>
                The main goal of Mission Software is provide, build, or
                recommend software to Christian Ministries. However, other
                organizations may be considered.
            </p>
            <p>
                It is at the sole discretion of Mission Software whether or not
                an organization is accepted as a client.
            </p>
            <p>You will only be notified if your application is accepted.</p>
            <p>
                Your email is collected to notify you of you application status,
                and/or begin a discussion about your request.
            </p>
            <button on:click={() => (visible = false)}>Close</button>
        </div>
    </div>
{/if}

<style>
    #disclaimerInfo {
        position: fixed;
        /* display: flex; */
        flex-direction: column;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: var(--white);
        z-index: 1;
        overflow: auto;
    }
    #disclaimerInfo #closeBtnContainer {
        position: absolute;
        top: 1rem;
        right: 1rem;
        height: auto;
    }
</style>
