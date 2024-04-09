<script lang="ts">
    import hideDocument from "$lib/loader";

    let clicked = "";
    function handleMouseDown() {
        clicked = "clicked";
    }

    function handleMouseUp() {
        clicked = "";
    }

    function gotoCompany() {
        hideDocument("about-us#company");
    }
</script>

<div id="need-of-programmers">
    <h2>The world need developers!</h2>
    <p>
        Even after so many efforts on an international scale, the need of programmers is ever
        increasing. Getting a job, opening your own startups is easy with programming. In fact the
        only dificulty is learning it, and that's where we come in. In the future InshaAllah, we
        will also hire students from NeuralNexus into our own company SRT based <b>on need</b>
    </p>
    <button
        on:mousedown={handleMouseDown}
        on:mouseup={handleMouseUp}
        on:mouseleave={handleMouseUp}
        on:click={gotoCompany}
        class={clicked}
    >
        Learn more
    </button>
    <img alt="Illustration of a developer on a couch" src="/developers.png" />
</div>

<style lang="scss">
    #need-of-programmers {
        display: grid;
        min-height: 600px;
        box-sizing: border-box;
        padding: 0 var(--left-align) 50px var(--left-align);
        font-size: 1rem;
        grid-template:
            "heading   image" max-content
            "paragraph image" max-content
            "button    image" 100px
            ".         image" 1fr
            / 4fr 4fr;

        @media (max-width: 1100px) {
            font-size: 0.8rem;
            min-height: 500px;
        }

        @media (max-width: 900px) {
            min-height: 600px;
            grid-template:
                "heading   heading  " max-content
                "paragraph paragraph" max-content
                "button    image    " 100px
                ".         image" 1fr
                / 1fr 320px;
        }

        @media (max-width: 550px) {
            grid-template:
                "heading  " max-content
                "paragraph" max-content
                "button   " 50px
                "image    " max-content
                / 1fr;
            font-size: 0.75rem;
        }

        @media (max-width: 350px) {
            font-size: 0.7rem;
            grid-template:
                "heading  " max-content
                "paragraph" max-content
                "image    " max-content
                "button   " 50px
                / 1fr;
        }

        h2 {
            font-size: 5em;
            color: #333;
            grid-area: heading;
            margin: 50px 0 20px 0;

            @media (max-width: 1350px) {
                font-size: 4.4em;
            }

            @media (max-width: 1200px) {
                font-size: 4em;
            }

            @media (max-width: 900px) {
                margin: 0 0 20px 0;
            }

            @media (max-width: 450px) {
                font-size: 3.5em;
            }

            @media (max-width: 400px) {
                font-size: 3em;
            }
        }

        p {
            font-size: 1.2em;
            color: #444;
            grid-area: paragraph;
            margin: 0 0 40px 0;

            b {
                color: #333;
                font-weight: 600;
            }
        }

        button {
            position: relative;
            box-sizing: border-box;
            font-size: 1.5em;
            font-weight: 700;
            margin: 0;
            //padding: 5px 10px 5px 10px;
            padding: 5px;
            justify-self: flex-end;
            align-self: flex-start;
            outline: none;
            border: none;
            grid-area: button;
            color: #59c;
            z-index: 3;
            transition:
                color 0.5s,
                transform 0.05s;

            @media (max-width: 900px) {
                justify-self: flex-start;
            }

            @media (max-width: 550px) {
                justify-self: flex-end;
            }

            &:global(.clicked) {
                transform: scale(1.2, 0.8);
            }

            &:hover {
                color: white;

                &::after {
                    width: 0%;
                    height: 0%;
                    top: 50%;
                    left: 50%;
                    opacity: 0%;
                }
            }

            &::before {
                content: "";
                position: absolute;
                top: -3px;
                left: -3px;
                height: calc(100% + 6px);
                width: calc(100% + 6px);
                background-image: linear-gradient(to right, hsl(200, 60%, 70%), hsl(320, 60%, 70%));
                z-index: -2;
                border-radius: 5px;
                transition: transform 0.3s;
            }

            &::after {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: white;
                z-index: -1;
                border-radius: 5px;
                transition:
                    width 0.5s,
                    height 0.5s,
                    top 0.5s,
                    left 0.5s,
                    opacity 0.5s;
            }
        }

        img {
            grid-area: image;
            width: 80%;
            filter: contrast(1.2);
            justify-self: center;
            align-self: center;

            @media (max-width: 900px) {
                width: 100%;
            }

            @media (max-width: 550px) {
                position: relative;
                bottom: 50px;
            }
            @media (max-width: 350px) {
                bottom: 30px;
            }
        }
    }
</style>
