<script lang="ts">
    import observeWebsite from "$lib/observers/websites";
    import { onMount } from "svelte";

    let websiteContainer: HTMLDivElement;
    onMount(() => {
        observeWebsite(websiteContainer);
    });
</script>

<div id="image-container" bind:this={websiteContainer}>
    <img alt="photo of website" src="/make-website/home.png" />
    <img alt="photo of website" src="/make-website/pricing.png" />
    <img alt="photo of website" src="/make-website/faq.png" />
</div>

<style lang="scss">
    #image-container {
        --container-height: 650px;
        position: relative;
        grid-area: image;
        margin: 0;
        height: var(--container-height);
        --height: calc(682px / 3);
        --width: calc(1365px / 3);
        --vertical-gap: 0.75;
        --horizontal-gap: 70px;
        --position-x: 50%;
        --position-y: 50%;

        @media (max-width: 1250px) {
            --horizontal-gap: 50px;
            --position-x: 55%;
            --height: calc(682px * 0.3);
            --width: calc(1365px * 0.3);
            height: calc(var(--container-height) * (0.3 / (1 / 3)));
        }

        @media (max-width: 1000px) {
            --height: calc(682px * 0.25);
            --width: calc(1365px * 0.25);
            height: calc(
                var(--container-height) * (0.25 / (1 / 3))
            ); // height of parent should be updated accordingly
        }

        @media (max-width: 800px) {
            --position-x: 50%;
        }

        @media (max-width: 600px) {
            --height: calc(682px * 0.18);
            --width: calc(1365px * 0.18);
            height: calc(var(--container-height) * (0.18 / (1 / 3)));
        }

        @media (max-width: 350px) {
            --height: calc(682px * 0.15);
            --width: calc(1365px * 0.15);
            height: calc(var(--container-height) * (0.18 / (1 / 3)));
        }

        &:global(.shown) {
            img {
                transform: skewY(-10deg);
                box-shadow:
                    -1px 2px 3px 1px #0006,
                    -3px 5px 5px 2px #0003;

                &:nth-child(1) {
                    top: calc(var(--position-y) - (var(--height) * (0.5 + var(--vertical-gap))));
                    left: calc(var(--position-x) - (var(--width) * 0.5) - var(--horizontal-gap));
                }

                &:nth-child(2) {
                    top: calc(var(--position-y) - (var(--height) * 0.5));
                    left: calc(var(--position-x) - (var(--width) * 0.5));
                }

                &:nth-child(3) {
                    top: calc(var(--position-y) - (var(--height) * (0.5 - var(--vertical-gap))));
                    left: calc(var(--position-x) - (var(--width) * 0.5) + var(--horizontal-gap));

                    @media (max-width: 1250px) {
                        left: calc(
                            var(--position-x) - (var(--width) * 0.5) - var(--horizontal-gap)
                        );
                    }

                    @media (max-width: 800px) {
                        left: calc(
                            var(--position-x) - (var(--width) * 0.5) + var(--horizontal-gap)
                        );
                    }
                }
            }
        }

        img {
            position: absolute;
            height: var(--height);
            width: var(--width);
            box-shadow:
                -1px 2px 3px 1px #0002,
                -3px 5px 5px 2px #0001;
            border-radius: 10px;
            top: calc(50% - (var(--height) * 0.5));
            left: calc(50% - (var(--width) * 0.5));
            //transform: rotateX(10deg) rotateY(-30deg);
            transition:
                top 0.5s 0.3s,
                left 0.5s 0.3s,
                box-shadow 0.5s 0.3s,
                transform 0.5s 0.3s;

            &:nth-child(1) {
                z-index: 3;
            }

            &:nth-child(2) {
                z-index: 2;
            }

            &:nth-child(3) {
                z-index: 1;
            }
        }
    }
</style>
