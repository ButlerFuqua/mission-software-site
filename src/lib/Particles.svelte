<script>
    import { tsParticles } from "tsparticles";
    import { onMount, onDestroy } from "svelte";

    let particleContainer;

    onMount(() => {
        tsParticles
            .loadJSON("tsparticles", "particles.json")
            .then((container) => {
                particleContainer = document.getElementById(container.id);
                particleContainer.style.pointerEvents = "none";
            })
            .catch((error) => {
                console.error(error);
            });
    });

    onDestroy(() => {
        const particles = tsParticles.domItem(0);
        if (particles) particles.stop();
    });
</script>
