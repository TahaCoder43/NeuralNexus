<script lang="ts">
    import stylesStore from "$lib/stores/styles";
    import AboutContent from "./AboutContent.svelte";
    let aboutHeight: number;
    let windowWidth: number;
    $: shouldUpdateImage = windowWidth > 800;
    // $: console.log("shouldUpdateImage: ", shouldUpdateImage);
    // $: console.log("aboutHeight: ", aboutHeight);
    $: stylesStore.update((styles) => {
        return {
            ...styles,
            myPicture: `--image-height: ${aboutHeight}px`,
        };
    });
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if shouldUpdateImage}
    <div id="about" bind:clientHeight={aboutHeight}>
        <AboutContent />
    </div>
{:else}
    <div id="about">
        <AboutContent />
    </div>
{/if}

<style lang="scss">
    #about {
        width: 100%;
        font-size: 1rem;
        padding: 10px 30px 10px 20px;
        box-sizing: border-box;
        background-image: radial-gradient(circle at top left, #0005 20%, #0000);

        @media (max-width: 900px) {
            font-size: 0.8rem;
        }

        @media (max-width: 800px) {
            font-size: 1rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }

        @media (max-width: 400px) {
            padding: 10px 15px 10px 15px;
        }

        @media (max-width: 340px) {
            font-size: 0.7rem;
        }
    }
</style>
