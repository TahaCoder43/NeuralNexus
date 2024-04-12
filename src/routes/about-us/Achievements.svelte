<script>
    import CompanyRepresentation from "./CompanyRepresentation.svelte";
    import ExamResults from "./ExamResults.svelte";
    import ProgrammingLanguages from "./ProgrammingLanguages.svelte";
    import Wavy from "./Wavy.svelte";
    import Website from "./Website.svelte";
</script>

<div id="holder">
    <h2>
        <Wavy>🎖️</Wavy> Achievements <Wavy>🎖️</Wavy>
    </h2>
    <ul>
        <li><CompanyRepresentation /></li>
        <li><ExamResults /></li>
        <li><ProgrammingLanguages /></li>
        <li><Website /></li>
    </ul>
</div>

<style lang="scss">
    $light-blue: hsl(206, 54%, 57%);
    #holder {
        width: 100%;
        font-size: 1rem;
        padding: 10px 20px 10px 20px;
        box-sizing: border-box;
        background-image: radial-gradient(circle at bottom right, #0003 20%, #0000 70%);
        font-size: 1rem;

        @media (max-width: 600px) {
            padding: 10px;
        }
    }
    h2 {
        font-size: 2em;
        margin: 10px 0 10px 0;
        color: #222;
        text-align: center;

        @media (max-width: 800px) {
            font-size: 2.5em;
        }
        @media (max-width: 550px) {
            font-size: 2em;
        }

        @media (max-width: 400px) {
            font-size: 1.5em;
        }

        @media (max-width: 380px) {
            font-size: 1.5em;
        }

        @media (max-width: 290px) {
            font-size: 1.3em;
        }
    }
    ul {
        list-style: none;
        display: grid;
        grid-template: 1fr 1fr / 1fr 1fr;
        gap: 15px 15px;
        width: min(100%, 500px);
        margin-inline: auto;
        box-sizing: border-box;
        padding: 25px;
        background-color: #ccc;
        box-shadow:
            3px 5px 5px 2px #0003,
            -3px -5px 5px 2px #fff7;
        border-radius: 10px;

        @media (max-width: 900px) {
            padding: 15px;
            gap: 10px 10px;
        }

        @media (max-width: 600px) {
            padding: 10px;
            gap: 7px 7px;
        }

        li {
            display: flex;
            position: relative;
            width: 100%;
            aspect-ratio: 1/1;
            background-color: #111;
            border-radius: 10px;
            text-align: center;
            justify-content: center;
            align-items: flex-end;
            padding: 0 0 10px 5px;
            box-sizing: border-box;
            z-index: 3;
            transition: color 0.3s;

            :global(svg) {
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                z-index: -2;
            }

            &::before {
                content: "";
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: 50%;
                right: 50%;
                width: 0%;
                height: 0%;
                color: #fff0;
                font-weight: 700;
                font-size: 1em;
                background-image: radial-gradient(
                    circle at center,
                    $light-blue,
                    darken($light-blue, 10%) 80%
                );
                border-radius: 10px;
                z-index: -1;
                overflow: hidden;
                transition:
                    height 0.3s 0.2s,
                    width 0.3s 0.2s,
                    top 0.3s 0.2s,
                    right 0.3s 0.2s,
                    color 0.2s;
            }

            &:hover {
                &::before {
                    height: 100%;
                    width: 100%;
                    top: 0;
                    right: 0;
                    color: #fff;
                    transition:
                        height 0.3s,
                        width 0.3s,
                        top 0.3s,
                        right 0.3s,
                        color 0.3s 0.2s;
                }
            }

            &:nth-child(1) {
                background-image: radial-gradient(circle at bottom right, #fff2 10%, #fff0 80%);

                &::before {
                    content: "Opened a company with friends";
                }
            }

            &:nth-child(2) {
                background-image: radial-gradient(circle at bottom left, #fff2 10%, #fff0 80%);
                animation-delay: 0.25s;

                &::before {
                    content: "Triple A+ in O-levels";
                }
            }

            &:nth-child(3) {
                background-image: radial-gradient(circle at top right, #fff2 10%, #fff0 80%);
                animation-delay: 0.5s;

                &::before {
                    content: "Learnt multiple programming languages";
                }
            }

            &:nth-child(4) {
                background-image: radial-gradient(circle at top left, #fff2 10%, #fff0 80%);
                animation-delay: 0.75s;

                &::before {
                    content: "Made full-stack websites";
                }
            }
        }
    }
</style>
