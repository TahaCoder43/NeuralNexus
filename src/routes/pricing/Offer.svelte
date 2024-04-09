<script lang="ts">
    import Details from "./Details.svelte";
    import DetailsOpener from "./DetailsOpener.svelte";
    import Prices from "./Prices.svelte";
    import type { OffersTextStore } from "$lib/stores/types";

    export let offerText: OffersTextStore, index: number;
</script>

<div class="offer">
    {#if offerText.premium != null}
        <div class="premium">{offerText.premium}</div>
    {/if}
    <header>
        <h3>
            {@html offerText.heading}
        </h3>
    </header>
    <Prices pricesText={offerText.pricing} />
    <div class="circle"></div>
    <DetailsOpener {index} />
    <Details detailsText={offerText.details} {index} />
</div>

<style lang="scss">
    @media (min-width: 1200px) {
        .offer {
            height: 450px;
            width: 300px;
            background-size: 300px 300px;

            header {
                height: 70px;
            }

            h3 {
                font-size: 1.5rem;
                padding-top: 10px;
                line-height: 25px;
            }

            .premium {
                top: 20px;
                left: 10px;
                font-size: 0.9rem;
            }
        }

        .circle {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 1200px) {
        .offer {
            height: 400px;
            width: 250px;
            background-size: 270px 270px;

            header {
                height: 55px;

                h3 {
                    font-size: 1.3rem;
                    padding-top: 5px;
                    line-height: 20px;
                }
            }

            .premium {
                top: 15px;
                left: 7px;
                font-size: 0.75rem;
            }
        }

        .circle {
            width: 170px;
            height: 170px;
        }
    }

    .offer {
        position: relative;
        background-color: #fafafa;
        box-shadow: 2px 3px 5px 1px #0005;
        border-radius: 20px;
        overflow: hidden;
        background-repeat: no-repeat;
        transition: 0.5s all;

        &:nth-child(2) {
            background-image: url("/offers/o-level.jpg");
        }

        &:nth-child(3) {
            background-image: url("/offers/full-stack-developer.jpg");
        }

        &:nth-child(4) {
            background-image: url("/offers/mastery.jpg");
        }

        &:hover {
            transform: scale(1.1);
            box-shadow: 2px 3px 7px 3px #0005;

            :global(.discount) {
                transform: rotate(-10deg);
            }

            .premium {
                transform: rotate(-30deg);
            }
        }

        header {
            width: 100%;
            box-shadow: 0px 2px 5px 2px #0004;
            backdrop-filter: blur(5px);
            background-color: #fff6;

            h3 {
                text-align: center;
                width: 65%;
                margin: auto;
                color: #333;
            }
        }

        .premium {
            position: absolute;
            transform: rotate(-25deg);
            background-image: radial-gradient(circle at top left, #9af, #a9f);
            z-index: 3;
            color: white;
            backdrop-filter: blur(5px);
            border-radius: 5px;
            padding: 2px 5px 2px 5px;
            transition: all 0.5s cubic-bezier(0.3, 5, 0.7, 0.9);
        }
    }

    .circle {
        position: absolute;
        bottom: 20px;
        left: -60px;
        border-radius: 100%;
        background-color: #59c;
    }
</style>
