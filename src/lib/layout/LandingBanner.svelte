<div class="banner">
    <div id="bannerImage" />
    <div class="content">
        <section>
            <!-- <img src="./logo.png" alt="mission software logo" /> -->
            <h1>
                <span class="secondary-text">Mission</span>
                <span class="red-text">Software</span>
            </h1>
            <p>
                A mission to build <span class="red-text">free</span> software
                for
                <span class="secondary-text">Christian</span> ministries.
            </p>
            <button class="tertiary">Apply</button>
            <button class="secondary">Support</button>
        </section>
    </div>
</div>

<style>
    img {
        max-width: 100px;
    }
    .banner {
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
    #bannerImage {
        height: 100%;
        width: 100%;
        /* background: url("./cloud-banner.png"); */
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
    }
    h1 {
        font-size: 4rem;
    }

    @media (min-width: 2000px) {
        .banner {
            height: 70vh !important;
        }
    }

    @media (min-width: 1850px) {
        .banner {
            height: 60vh;
        }
        h1 {
            font-size: 7rem !important;
        }
    }

    @media (min-width: 800px) {
        #bannerImage {
            background: url("./cloud-banner-desktop.png");
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: bottom right;
        }
        h1 {
            font-size: 6rem !important;
        }
    }

    @media (max-width: 800px) {
        #bannerImage {
            background: url("./cloud-banner-mobile.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;
        }
        .content {
            /* text-align: center; */
            width: 100%;
        }
    }
</style>
