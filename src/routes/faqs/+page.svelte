<script lang="ts">
    import faqStore from "$lib/stores/faqs";
    import { onMount } from "svelte";
    import Curve from "./Curve.svelte";
    import Faq from "./FAQ.svelte";
    let bodyHeight: number;
    let windowHeight: number;
    let windowWidth: number;
    let drawn = "";
    $: console.log("body height:", bodyHeight);
    $: numCurves = Math.floor(bodyHeight / windowHeight) + 1;
    $: console.log("num Curves:", numCurves);
    $: ids = Array.from({ length: numCurves }, (_, i) => i + 1);
    function updateBodyHeight() {
        bodyHeight = document.body.clientHeight;
    }
    onMount(() => {
        updateBodyHeight();
        drawn = "background-shown";
    });
</script>

<svelte:window bind:innerHeight={windowHeight} bind:innerWidth={windowWidth} />
{#if numCurves !== undefined}
    {#if windowWidth > 800}
        <div id="repeat-curves" class="left">
            {#each ids as i (i)}
                <Curve blockerTop={`calc(${i * 100}vh - 25px)`} />
            {/each}
        </div>
    {/if}
    <div id="repeat-curves" class="right">
        {#each ids as i (i)}
            <Curve blockerTop={`calc(${i * 100}vh - 25px)`} />
        {/each}
    </div>
{/if}
<div id="content">
    <h1 class={drawn}>FAQS</h1>
    <div id="faqs">
        {#each $faqStore as faq, i (i)}
            <Faq {...faq} id={i + 1} {updateBodyHeight} />
        {/each}
        <div class="line"></div>
    </div>
</div>

<style lang="scss">
    @keyframes flinch {
        0% {
            background-color: #59c;
        }

        40% {
            background-color: #59c;
        }

        50% {
            background-color: #68c;
        }

        60% {
            background-color: #59c;
        }

        100% {
            background-color: #59c;
        }
    }
    #repeat-curves {
        position: absolute;
        height: 100%;
        width: fit-content;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        top: 0;
    }

    .left {
        left: 0;
    }

    .right {
        right: 0;

        @media (max-width: 800px) {
            left: 0;
            right: 0;
            margin-right: auto;
            margin-left: auto;
        }
    }

    #content {
        height: fit-content;
        width: 100%;

        h1 {
            position: relative;
            text-align: center;
            font-size: 5rem;
            margin: 0;
            margin-bottom: 30px;
            color: #333;
            z-index: 2;

            &.background-shown {
                &::before {
                    width: 230px;
                }
            }

            &::before {
                content: "";
                position: absolute;
                bottom: 20px;
                left: 0;
                right: 0;
                margin-left: auto;
                margin-right: auto;
                background-color: #59c;
                width: 0;
                height: 60%;
                z-index: -1;
                transform: skew(-8deg, -8deg);
                transition: width 0.5s 0.3s;
                animation: flinch 5s infinite forwards;
            }
        }
    }

    #faqs {
        position: relative;
        max-width: 800px;
        padding-left: 225px;
        padding-right: 225px;
        height: fit-content;
        margin-left: auto;
        margin-right: auto;

        @media (max-width: 800px) {
            padding-left: calc(15vw - 30px);
            padding-right: calc(15vw - 30px);
        }
    }

    .line {
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        margin: 0 auto 0 auto;
        width: 3px;
        height: 100%;
        background-color: #3595;
        z-index: -1;

        @media (max-width: 800px) {
            display: none;
        }
    }
</style>
