<div class="banner">
    <div id="bannerImage" />
    <div class="container">
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
    }
    .container {
        position: absolute;
        z-index: 1;
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

    @media (min-width: 900px) {
        #bannerImage {
            background: url("./cloud-banner-desktop.png");
            background-size: 70%;
            background-repeat: no-repeat;
            background-position: bottom right;
        }
    }

    @media (max-width: 900px) {
        #bannerImage {
            background: url("./cloud-banner-mobile.png");
            background-size: contain;
            background-repeat: no-repeat;
            background-position: bottom;
        }
    }
</style>
