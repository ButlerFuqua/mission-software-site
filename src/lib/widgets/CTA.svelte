<script>
    import { goto } from "$app/navigation";
</script>

<div class="flex">
    <button class="tertiary" on:click={() => goto("/apply")}>Apply</button>
    <button class="secondary" on:click={() => goto("/support")}>Support</button>
</div>
