<script lang="ts">
    import hideDocument from "$lib/loader";
    import observeWebsite from "$lib/observers/websites";
    import observeBulb from "$lib/observers/bulb";
    import { onMount } from "svelte";
    import Websites3d from "./Websites3d.svelte";

    let clicked = "";
    function handleMouseDown() {
        clicked = "clicked";
    }

    function handleMouseUp() {
        clicked = "";
    }

    function gotoPricing() {
        hideDocument("pricing");
    }

    let thisComponent: HTMLDivElement;

    onMount(() => {
        observeBulb(thisComponent);
    });
</script>

<div id="make-website" bind:this={thisComponent}>
    <h2>Getting yours and others ideas Across</h2>
    <p>
        In our full-stack developer course, we teach programming, with an end goal of making a
        student capable of creating there own website. In today's age the talent of programmatically
        making a website is really valuable, and can take any business's marketing to another level!
    </p>
    <button
        on:mousedown={handleMouseDown}
        on:mouseup={handleMouseUp}
        on:mouseleave={handleMouseUp}
        on:click={gotoPricing}
        class={clicked}
    >
        Course
    </button>
    <Websites3d />
</div>

<style lang="scss">
    @keyframes glowing {
        from {
            filter: saturate(1);
        }
        to {
            filter: saturate(2);
        }
    }

    #make-website {
        position: relative;
        display: grid;
        min-height: 630px;
        padding: 50px 50px 0 0;
        box-sizing: border-box;
        font-size: 1rem;
        grid-template:
            "image heading   heading  " max-content
            "image paragraph paragraph" max-content
            "image button    bulb     " 50px
            "image .         bulb     " 1fr
            / 2fr 1fr 1fr;
        z-index: 2;

        @media (max-width: 1100px) {
            grid-template-columns: 3fr 1fr 1fr;
            font-size: 0.9rem;
        }

        @media (max-width: 1000px) {
            grid-template-columns: 2fr 1fr 1fr;
            font-size: 0.7rem;
            padding-right: 20px;
        }

        @media (max-width: 900px) {
            grid-template-columns: 5fr 2fr 2fr;
            padding-right: 20px;
        }

        @media (max-width: 800px) {
            grid-template:
                "image     image   image  " max-content
                "heading   heading heading" max-content
                "paragraph paragraph paragraph " max-content
                "button    button    bulb " 1fr
                / 5fr 2fr 2fr;
            padding-left: var(--left-align);
            font-size: 0.8rem;
        }

        @media (max-width: 400px) {
            font-size: 0.7rem;
        }

        &:global(.bulb-shown) {
            &::before {
                opacity: 0.5;
                animation: glowing 2s ease-in-out alternate infinite;
            }
        }

        &::before {
            position: relative;
            grid-area: bulb;
            content: "💡";
            font-size: 15em;
            justify-self: flex-end;
            align-self: flex-start;
            transform: rotate(-15deg) translateY(-50px);
            opacity: 0;
            z-index: -1;
            filter: saturate(2);
            transition: opacity 0.5s 0.5s;
        }

        h2 {
            font-size: 4em;
            color: #333;
            grid-area: heading;
            margin: 0 0 20px 0;

            @media (max-width: 350px) {
                font-size: 3.5em;
            }
        }

        p {
            font-size: 1.2em;
            grid-area: paragraph;
            margin: 0;
            color: #444;
            margin: 0 0 40px 0;
        }

        button {
            justify-self: flex-start;
            align-self: flex-start;
            font-size: 1.7em;
            background-color: #59c;
            color: white;
            width: fit-content;
            box-sizing: border-box;
            padding: 5px 10px 5px 10px;
            border-radius: 10px;
            font-weight: 700;
            outline: none;
            border: none;
            grid-area: button;
            margin: 0;
            box-shadow: 2px 3px 5px 2px #0005;
            transition:
                box-shadow 0.3s,
                text-shadow 0.3s;

            @media (max-width: 800px) {
                font-size: 2em;
            }

            &:hover {
                box-shadow:
                    2px 3px 5px 2px #0005,
                    0 0 20px 5px #3598 inset;
            }

            &:global(.clicked) {
                box-shadow:
                    2px 3px 5px 2px #0005,
                    0 0 20px 5px #359f inset;
                text-shadow: 1px 2px 3px #359;
            }
        }
    }
</style>
