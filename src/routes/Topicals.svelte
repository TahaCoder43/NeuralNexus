<script lang="ts">
    import hideDocument from "$lib/loader";
    import { onMount } from "svelte";
    import observeTopicals from "$lib/observers/topicals";

    let clicked = "";
    function pushButton() {
        clicked = "clicked";
    }

    function pushBackButton() {
        clicked = "";
    }

    function gotoPricing() {
        hideDocument("pricing");
    }

    let holder3d: HTMLDivElement;

    onMount(() => {
        Array.from(holder3d.children).forEach((topical) => {
            observeTopicals(topical as HTMLElement);
        });
    });
</script>

<div id="topicals">
    <h2>The Topical<br /> way.</h2>
    <p>
        We teach O-levels by making students do past exams, which are arraged topic wise, thus
        called topicals. The students are challenged with unseen question from real exams thus
        making them pass the exam with ease.
    </p>
    <button
        on:mousedown={pushButton}
        on:mouseup={pushBackButton}
        on:mouseleave={pushBackButton}
        on:click={gotoPricing}
        class={clicked}
    >
        See more
    </button>
    <div id="holder-3d" bind:this={holder3d}>
        <img
            src="/topicals/maths-book2.png"
            alt="O-level maths book by redspot pubishing"
            class="hidden"
        />
        <img
            src="/topicals/physics-book2.png"
            alt="O-level physics book by redspot pubishing"
            class="hidden"
        />
    </div>
</div>

<style lang="scss">
    #topicals {
        position: relative;
        display: grid;
        min-height: 630px;
        font-size: 1rem;
        padding: 50px 0 50px var(--left-align);
        box-sizing: border-box;
        grid-template:
            "heading image" max-content
            "paragraph image" max-content
            "button image" 50px
            ". image" 1fr
            / 3fr 4fr;

        @media (max-width: 1150px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (max-width: 1000px) {
            font-size: 0.8rem;
            min-height: 550px;
        }

        @media (max-width: 800px) {
            font-size: 0.7rem;
            min-height: 500px;
            grid-template-columns: 5fr 4fr;
        }

        @media (max-width: 600px) {
            min-height: 800px;
            margin-right: var(--left-align);
            grid-template:
                "heading heading" max-content
                "paragraph paragraph" max-content
                "button image" 50px
                ". image" 1fr
                / 1fr 1fr;
        }

        @media (max-width: 450px) {
            grid-template:
                "heading heading" max-content
                "paragraph paragraph" max-content
                "button button" 50px
                "image image" 1fr
                / 1fr 1fr;
        }

        h2 {
            font-size: 5em;
            font-weight: 900;
            color: #333;
            width: 100%;
            grid-area: heading;
            margin: 0 0 20px 0;

            @media (max-width: 350px) {
                font-size: 4.5em;
            }

            @media (max-width: 310px) {
                font-size: 4em;
            }
        }

        p {
            font-size: 1.3em;
            color: #444;
            width: 100%;
            grid-area: paragraph;
            margin: 0 0 40px 0;
        }

        button {
            position: relative;
            font-size: 1.5em;
            color: #fff;
            border-radius: 10px;
            background-color: #59c;
            font-weight: 700;
            width: fit-content;
            box-sizing: border-box;
            padding: 0 10px 0 10px;
            height: 100%;
            border: none;
            outline: none;
            grid-area: button;
            justify-self: flex-end;
            transition: box-shadow 0.3s;
            box-shadow:
                -3px -5px 5px 2px #0003 inset,
                3px 5px 5px 2px #fff6 inset;

            @media (max-width: 600px) {
                justify-self: flex-start;
            }

            @media (max-width: 450px) {
                justify-self: flex-end;
            }

            &:hover {
                box-shadow:
                    -3px -5px 5px 2px #0005 inset,
                    3px 5px 5px 2px #fffa inset;
            }

            &:global(.clicked) {
                box-shadow:
                    3px 5px 5px 2px #0004 inset,
                    -3px -5px 5px 2px #fff8 inset;
            }
        }

        #holder-3d {
            grid-area: image;
            position: relative;
            margin: 200px 0 50px 80px;

            @media (max-width: 1000px) {
                margin-left: 30px;
            }

            @media (max-width: 600px) {
                margin-left: 0;
                margin-top: 100px;
            }

            @media (max-width: 450px) {
                margin: 100px 0 0 50px;
            }

            img {
                --height: 500px;
                --width: 500px;
                --gap: 0.2;
                position: absolute;
                width: var(--height);
                height: var(--width);
                border: none;
                outline: none;
                object-fit: contain;
                transition:
                    transform 0.5s,
                    opacity 0.5s;

                @media (max-width: 1000px) {
                    --height: 400px;
                    --width: 400px;
                }

                @media (max-width: 800px) {
                    --height: 350px;
                    --width: 350px;
                    --gap: 0.15;
                }

                &:global(.hidden) {
                    transform: translateY(200px);
                    opacity: 0.3;
                }

                &:nth-child(1) {
                    top: calc(50% - (var(--height) * (0.5 + var(--gap))));
                    left: calc(50% - (var(--width) * (0.5 + var(--gap))));
                }

                &:nth-child(2) {
                    top: calc(50% - (var(--height) * (0.5 - var(--gap))));
                    left: calc(50% - (var(--width) * (0.5 - var(--gap))));
                }
            }
        }
    }
</style>
