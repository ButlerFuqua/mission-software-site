<script>
    import { fade, fly } from "svelte/transition";

    let showNav = false;
    const toggleNav = () => (showNav = !showNav);

    let navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
    ];
</script>

<button class="menuButton" on:click={toggleNav}>Menu</button>
{#if showNav}
    <div
        id="siteNavigation"
        in:fly={{ x: 100, duration: 300 }}
        out:fly={{ x: -100, duration: 300 }}
    >
        <br />
        <br />
        <div class="container mt-3">
            <ul>
                {#each navLinks as link}
                    <li>
                        <a
                            sveltekit:prefetch
                            href={link.path}
                            on:click={toggleNav}>{link.label}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<style>
    button {
        bottom: inherit;
        box-shadow: none;
        outline: none;
    }
    button:focus:not(:focus-visible) {
        bottom: inherit;
    }
    .menuButton {
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        z-index: 4;
    }
    #siteNavigation {
        background-color: var(--white);

        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 3;
    }
</style>
