<script lang="ts">
    import { squish, removeSquishEffects } from "$lib/effects/click";
    import hideDocument from "$lib/loader";
    import classesStore from "$lib/stores/classes";
    import stylesStore from "$lib/stores/styles";
    import { onMount } from "svelte";

    function handlePricingClicked() {
        hideDocument("pricing");
    }

    onMount(() => {
        classesStore.update((classes) => {
            return { ...classes, heroContentContainer: "shown" };
        });

        setTimeout(() => {
            stylesStore.update((styles) => {
                return { ...styles, line: "z-index: 1;" };
            });
        }, 1500);
    });
</script>

<div id="hero">
    <div id="hero-content-container" class={$classesStore.heroContentContainer}>
        <div id="hero-content">
            <h1>
                The <span class="highlight">Nexus</span> Advantage. Experience the synergy of Sciences!
            </h1>
            <p>
                We teach Math, Physics, Computer for O-level, with programming seperately, in such a
                way, that our students are able to experience the combined power of these subjects
                when used together
            </p>
            <button
                id="pricing"
                on:click={handlePricingClicked}
                on:mousedown={squish}
                on:mouseup={removeSquishEffects}
            >
                Let's Learn
            </button>
        </div>
        <div id="line" style={$stylesStore.line}></div>
    </div>
    <img src="/hero.png" alt="powered brain" />
</div>

<style lang="scss">
    #hero {
        --content-size-fr: 4fr;
        --image-size-fr: 3fr;
        --content-size: 4;
        --image-size: 3;
        --total-size: calc(var(--content-size) + var(--image-size));
        position: relative;
        height: calc(min(100vh, 680px) - 5rem);
        overflow: hidden;
        display: grid;
        grid-template-columns: var(--content-size-fr) var(--image-size-fr);
        align-items: center;

        @media (max-width: 800px) {
            --content-size-fr: 1fr;
            --image-size-fr: 0;
            --content-size: 1;
            --image-size: 0;
        }
    }

    #hero-content-container {
        --starting-height: 300px;
        position: relative;
        box-sizing: border-box;
        height: var(--starting-height);
        width: 10px;
        overflow: hidden;
        align-self: flex-start;
        transition:
            width 0.3s,
            height 0.3s 0.9s;

        @media (max-width: 1110px) {
            --starting-height: 240px;
        }

        @media (max-width: 800px) {
            --starting-height: 170px;
        }

        @media (max-width: 500px) {
            --starting-height: 150px;
        }

        &:global(.shown) {
            width: 100%;
            height: 100%;

            #line {
                transform: rotate(90deg);
                height: calc((100vw * var(--content-size) / var(--total-size)) - 10px);
                top: calc(100% - 5px);

                &::before {
                    opacity: 1;
                    width: 200px;
                }
            }
        }
    }

    #line {
        position: absolute;
        top: 0;
        right: 0;
        background-color: black;
        width: 2px;
        height: 100%;
        z-index: 100;
        transform-origin: center top;
        transition:
            transform 0.3s 0.3s,
            top 0.5s 0.3s;
        overflow: shown;
        &::before {
            content: "";
            position: absolute;
            right: 2px;
            width: 0;
            height: 100%;
            background-image: radial-gradient(100% 70% at right center, #9cfa, #9cf0 70%);
            opacity: 0;
            transition:
                opacity 0.3s 1.2s,
                width 0.3s 1.2s;
        }
    }

    #hero-content {
        position: absolute;
        top: 0;
        left: 0;
        display: flow-root;
        box-sizing: border-box;
        height: 100%;
        padding: 30px 20px 0 var(--left-align);
        font-size: 1rem;
        width: calc(100vw * var(--content-size) / var(--total-size));
        z-index: 2;

        @media (max-width: 1110px) {
            font-size: 0.8rem;
        }

        @media (max-width: 900px) {
            font-size: 0.7rem;
        }

        @media (max-width: 500px) {
            font-size: 0.6rem;
        }

        h1 {
            font-size: 3.3em;
            font-weight: 800;
            letter-spacing: -1px;
            width: 100%;
            --highlight: #359;

            @media (max-width: 400px) {
                font-size: 3em;
            }
            @media (max-width: 340px) {
                font-size: 2.5em;
            }
        }

        p {
            font-size: 1.2em;
            color: #555;
            width: 100%;
            font-weight: 500;
            margin-top: 30px;

            @media (max-width: 500px) {
                font-size: 1.5em;
            }
        }

        button {
            float: right;
            box-sizing: border-box;
            width: 6em;
            height: 2.5em;
            border: none;
            outline: none;
            background-color: #359;
            color: white;
            box-shadow: 2px 3px 3px 2px #0005;
            font-weight: 700;
            font-size: 1.5em;
            letter-spacing: -1px;
            margin: 40px 0 0 0;
            padding: 7px 5px 7px 5px;
            border-radius: 10px;
            cursor: pointer;
            transition: transform 0.3s cubic-bezier(0.3, 5, 0.7, 0.9);

            &:hover {
                transform: rotate(2deg);
            }

            @media (max-width: 800px) {
                float: left;
            }

            @media (max-width: 500px) {
                font-size: 1.8em;
            }
        }
    }

    .highlight {
        color: var(--highlight);
    }

    #hero img {
        width: 100%;
        margin: 0 auto 0 auto;

        @media (max-width: 800px) {
            position: absolute;
            bottom: 10px;
            right: 10px;
            width: 350px;
        }

        @media (max-width: 450px) {
            width: 320px;
            right: calc(-1 * (200px - 40vw));
        }
    }
</style>
