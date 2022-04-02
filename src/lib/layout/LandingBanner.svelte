<script>
    import CTA from "../widgets/CTA.svelte";
    import { onMount } from "svelte";

    const resizeBanner = () => {
        const banner = document.getElementById("banner");
        const bannerContent = document.getElementById("bannerContent");
        if (banner.offsetHeight < bannerContent.offsetHeight) {
            banner.style.height = `${bannerContent.offsetHeight}px`;
        }
    };
    onMount(() => {
        resizeBanner();
        window.addEventListener("resize", resizeBanner);
    });
</script>

<div id="banner" class="banner">
    <img
        id="bannerImage-mobile"
        src="./cloud-banner-mobile.png"
        alt="mission software banner mobile"
    />
    <img
        id="bannerImage-desktop"
        src="./cloud-banner-desktop.png"
        alt="mission software banner desktop"
    />
    <div id="bannerContent" class="content">
        <h1>
            <span class="secondary-text">Mission</span>
            <span class="red-text">Software</span>
        </h1>
        <p>
            A mission to build <em class="red-text">free</em> software for
            <span class="secondary-text">Christian</span> ministries.
        </p>
        <CTA />
    </div>
</div>

<style>
    img {
        width: 100%;
        position: absolute;
        bottom: 0;
        right: 0;
    }
    img#bannerImage-desktop {
        width: 50%;
    }
    h1 {
        margin-bottom: 0;
    }
    p {
        margin-top: 0;
    }
    .banner {
        display: flex;
        justify-content: center;
        background-color: var(--dark-color);
        color: var(--white);
        height: 50vh;
        position: relative;
        z-index: 1;
        transition: all 0.2s;
    }
    .content {
        position: absolute;
        z-index: 1;
        padding: 1rem;
    }
    h1 {
        font-size: 4rem;
    }

    @media (min-width: 1850px) {
        h1 {
            font-size: 7rem !important;
        }
    }

    @media (min-width: 840px) {
        h1 {
            font-size: 6rem !important;
        }
    }
    @media (min-width: 800px) {
        #bannerImage-mobile {
            display: none;
        }
        #bannerImage-desktop {
            display: inherit;
        }
    }

    @media (max-width: 800px) {
        #bannerImage-desktop {
            display: none;
        }

        .content {
            /* text-align: center; */
            width: 100%;
        }
    }
</style>
