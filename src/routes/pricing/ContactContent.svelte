<script lang="ts">
    import classesStore from "$lib/stores/classes";
    import SolarSystem from "./SolarSystem.svelte";
</script>

<div id="contact-content" class={$classesStore.contactContent}>
    <SolarSystem />
</div>

<style lang="scss">
    #contact-content {
        background-image: radial-gradient(hsl(250, 5%, 5%) 10%, hsl(250, 40%, 10%));
        display: flex;
        align-items: center;
        height: 100%;
        width: 50%;
        float: right;
        transition: filter 0.5s;

        &:global(.hidden) {
            filter: brightness(0);
            transition: filter 0.5s;
        }

        @media (max-width: 800px) {
            float: none;
            height: 50%;
            width: 100%;
        }
    }
</style>
