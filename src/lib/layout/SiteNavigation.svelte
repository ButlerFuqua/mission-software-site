<script>
    import { onMount } from "svelte";

    import { fly } from "svelte/transition";

    let showNav = false;

    let navLinks = [
        { path: "/", label: "Home" },
        // { path: "/apply", label: "Apply" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        // { path: "/support", label: "Support" },
        // { path: "/mentorship", label: "Mentorship" },
        // { path: "/resources", label: "Resources" },
    ];

    $: pathname = null;
    onMount(() => {
        if (!pathname) pathname = window.location.pathname;
    });
    const toggleNav = (event, path) => {
        path = window.location.pathname;
        if (path) pathname = path;
        showNav = !showNav;
    };
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
                            class={pathname === link.path ? "selected" : ""}
                            sveltekit:prefetch
                            href={link.path}
                            on:click={(event) => toggleNav(event, link.path)}
                            >{link.label}</a
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
        position: fixed;
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
    ul {
        padding: 0;
    }
    li {
        list-style: none;
        padding: 0.5rem 0;
    }
    li a {
        font-size: 3rem;
        text-decoration: none;
        font-weight: bold;
    }
    a:hover {
        text-decoration: none;
        color: var(--neat-red);
        text-decoration-color: var(--neat-red);
    }
    a.selected {
        color: var(--neat-red);
        text-decoration: underline;
        text-decoration-color: var(--neat-red);
    }
</style>
