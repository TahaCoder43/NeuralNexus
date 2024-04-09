<script lang="ts">
    import type { PriceText } from "$lib/stores/types";
    export let pricesText: PriceText;
</script>

<div class="prices">
    <h3>Price:</h3>
    <p class="price">
        {@html pricesText.price}
    </p>
    {#if pricesText.discount != null}
        <div class="discount">{@html pricesText.discount}</div>
    {/if}
    {#if pricesText.fainted != null}
        <span class="fainted">{@html pricesText.fainted}</span>
    {/if}
    <p class="description">
        {@html pricesText.description}
    </p>
    <div class="duration">{@html pricesText.duration}</div>
</div>

<style lang="scss">
    @media (min-width: 1200px) {
        .prices {
            height: 150px;

            h3 {
                font-size: 1.8rem;
                left: 20px;
            }

            .price {
                font-size: 1.5rem;
                margin-left: 20px;
                margin-top: 10px;
            }

            .fainted {
                font-size: 0.9rem;
                opacity: 0.7;
            }

            .description {
                font-size: 1rem;
                margin-left: 20px;
            }

            .discount {
                margin-left: 20px;
                font-size: 0.8rem;
            }
        }

        .duration {
            left: 20px;
            font-size: 0.8rem;
        }
    }

    @media (max-width: 1200px) {
        .prices {
            height: 130px;

            h3 {
                font-size: 1.5rem;
                left: 10px;
            }

            .price {
                font-size: 1.3rem;
                margin-left: 10px;
                margin-top: 5px;
            }

            .fainted {
                font-size: 0.8rem;
                opacity: 0.6;
            }

            .description {
                font-size: 0.85rem;
                margin-left: 10px;
            }

            .discount {
                margin-left: 15px;
                font-size: 0.7rem;
            }
        }

        .duration {
            left: 10px;
            font-size: 0.75rem;
        }
    }

    .prices {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #59c;
        z-index: 2;

        h3 {
            position: absolute;
            color: white;
            top: -2.5rem;
            margin: 0;
        }

        .price {
            color: white;
            margin-bottom: 0;
            margin-right: 0;
            font-weight: 500;
            width: 60%;
            display: inline-block;

            :global(.unit) {
                color: #eee;
                font-weight: 700;
                font-size: 0.7em;
            }
        }

        .fainted {
            color: #fff;
            opacity: 0.7;
            padding-bottom: 5px;
        }

        .description {
            color: #fff;
            opacity: 0.9;
            margin-right: 15px;
        }

        .discount {
            display: inline-block;
            background-image: radial-gradient(circle at top right, #8af, #a8f);
            color: white;
            padding: 3px 3px 3px 3px;
            border-radius: 5px;
            transform: rotate(5deg);
            transition: all 0.5s cubic-bezier(0.3, 5, 0.7, 0.9);
        }
    }

    .duration {
        position: absolute;
        bottom: 10px;
        color: #fff;
        opacity: 0.8;
    }
</style>
