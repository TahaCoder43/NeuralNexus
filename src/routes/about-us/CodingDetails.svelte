<script lang="ts">
    import Computer from "./Computer.svelte";
    import stylesStore from "$lib/stores/styles";
    let headingHeight = 0;
    const headingMargin = 20;

    let codingHeight: number;
    let windowWidth: number;
    $: shouldUpdateImage = windowWidth <= 800;
    $: console.log("windowWidth: ", windowWidth);
    $: console.log("shouldUpdateImage: ", shouldUpdateImage);
    $: console.log("codingHeight: ", codingHeight);
    $: stylesStore.update((styles) => {
        return {
            ...styles,
            myPicture: `--image-height: ${codingHeight}px`,
        };
    });
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if shouldUpdateImage}
    <div id="coding" bind:clientHeight={codingHeight}>
        <h3 bind:clientHeight={headingHeight}>Coding 🖥️</h3>
        <Computer {headingHeight} {headingMargin} />
        <div id="keyboard">⌨️</div>
        <div id="mouse">🖱️</div>
    </div>
{:else}
    <div id="coding">
        <h3 bind:clientHeight={headingHeight}>Coding 🖥️</h3>
        <Computer {headingHeight} {headingMargin} />
        <div id="keyboard">⌨️</div>
        <div id="mouse">🖱️</div>
    </div>
{/if}

<style lang="scss">
    @keyframes code-up-down {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 0 200000%;
        }
    }

    @keyframes mouse-move {
        from {
            transform: translate(0, 0) rotate(-10deg);
        }
        to {
            transform: translate(70px, 10px) rotate(10deg);
        }
    }

    #coding {
        width: 100%;
        position: relative;
        margin: 0;
        display: flow-root;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 0 70px 0;
        background-image: radial-gradient(circle at center right, #0005 20%, #0000);
        z-index: 2;

        @media (max-width: 800px) {
            padding: 0 0 20px 0;
        }

        #keyboard {
            opacity: 1;
            position: absolute;
            font-size: 10rem;
            left: 40px;
            bottom: -60px;
            filter: grayscale(100) saturate(200);
            transform: rotate(10deg);

            @media (max-width: 800px) {
                display: none;
            }
        }

        #mouse {
            opacity: 1;
            position: absolute;
            font-size: 5rem;
            right: 70px;
            bottom: -10px;
            filter: grayscale(100) saturate(200);
            transform: rotate(-10deg);
            animation: mouse-move 2s ease-in-out alternate-reverse infinite;

            @media (max-width: 800px) {
                display: none;
            }
        }
    }

    h3 {
        color: #0000;
        font-size: 5rem;
        margin: 10px 0 10px 0;
        padding-right: 10px;
        font-weight: 900;
        letter-spacing: -7px;
        background-image: url("/about-me/code.png");
        background-size: 180% auto;
        background-clip: text;
        text-shadow: 2px 3px 5px #0009;
        text-align: center;
        animation: code-up-down 1000s linear alternate-reverse infinite;

        @media (max-width: 900px) {
            font-size: 4.4rem;
        }

        @media (max-width: 800px) {
            font-size: 5rem;
        }

        @media (max-width: 700px) {
            font-size: 4.5rem;
        }

        @media (max-width: 600px) {
            font-size: 5rem;
        }

        @media (max-width: 400px) {
            font-size: 4.5rem;
        }

        @media (max-width: 350px) {
            font-size: 4rem;
        }
    }
</style>
