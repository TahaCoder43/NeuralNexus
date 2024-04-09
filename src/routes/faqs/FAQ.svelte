<script lang="ts">
    import observeFAQ from "$lib/observers/faq";
    import { onMount } from "svelte";
    import DownArrow from "./DownArrow.svelte";
    export let heading: string, para: string, id: number, updateBodyHeight: () => void;
    let faq: HTMLDetailsElement;
    onMount(() => {
        observeFAQ(faq);
    });
</script>

<details class="faq hidden" id={id.toString()} bind:this={faq}>
    <summary on:click={updateBodyHeight}>{@html heading} <DownArrow /> </summary>
    <p>{@html para}</p>
</details>

<style lang="scss">
    @keyframes slideIn {
        0% {
            top: -200px;
        }
        100% {
            top: 0px;
        }
    }
    .faq {
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 20px;
        overflow: hidden;
        transition:
            transform 0.3s,
            filter 0.3s,
            opacity 0.3s;
        font-size: 1rem;

        @media (max-width: 1000px) {
            font-size: 0.9rem;
        }

        @media (max-width: 800px) {
            font-size: 1rem;
        }

        @media (max-width: 500px) {
            font-size: 0.8rem;
        }

        summary {
            position: relative;
            background-color: #59c;
            font-weight: 600;
            font-size: 1.5em;
            color: white;
            margin: 0;
            padding-bottom: 15px;
            padding-top: 15px;
            padding-right: 50px;
            padding-left: 20px;
            list-style: none;
            box-shadow: 0px 2px 5px 2px #0005;
            transition: filter 0.3s;
            z-index: 2;
            border-radius: 20px 20px 0 0;

            &::-webkit-details-marker {
                display: none;
            }

            &:hover {
                filter: brightness(0.9);
            }
        }

        p {
            position: relative;
            font-weight: 500;
            background-color: white;
            font-size: 1.2em;
            color: #555;
            margin: 0 2px 2px 2px;
            padding-top: 10px;
            padding-left: 20px;
            padding-bottom: 10px;
            min-height: 80px;
            top: -200px;
            outline: 2px solid #59c;
            border-radius: 0 0 20px 20px;
        }

        &[open] {
            summary {
                :global(svg) {
                    transform: rotateX(180deg);
                }
            }
            p {
                animation: slideIn 0.3s forwards;
            }
        }
    }

    .highlight {
        background-color: #ddd;
    }

    .hidden {
        transform: translateY(50px) scale(0.5);
        filter: blur(5px);
        opacity: 0.5;
    }

    .shown {
        transform: translateY(0) scale(1);
        filter: blur(0px);
        opacity: 1;
    }
</style>
