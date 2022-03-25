<script>
    import { tsParticles } from "tsparticles";
    import { onMount } from "svelte";

    onMount(() => {
        tsParticles
            .loadJSON("tsparticles", "particles.json")
            .then((container) => {
                const containerEl = document.getElementById(container.id);
                containerEl.style.pointerEvents = "none";
            })
            .catch((error) => {
                console.error(error);
            });
    });
</script>
