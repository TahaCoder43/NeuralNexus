<script lang="ts"></script>

<div id="company">
    <h3>Company</h3>
    <div id="company-info-grid">
        <section>
            <h4>A digital services provider company.</h4>
            <p>
                I together with my friend and brother have opened a company that provides digital
                services, like graphic design, social media marketing, website development, company
                architecture, and much more.
            </p>
        </section>
        <img src="/about-me/SRT.jpeg" alt="Our company SRT" />
        <section>
            <h4>Where SRT and NeuralNexus meet.</h4>
            <p>
                As any other company, we are in abundant need of programmers, particularly web
                developers and in the future we will also need Architecture designers. In the
                future, when our need grows we plan to hire skilled programmers from neuralnexus
            </p>
        </section>
        <img alt="us" />
        <section>
            <h4>Why we started this</h4>
            <p>
                Ever since the 3 of us got into business, we saw an ever increasing need of digital
                services, a businessman with a great startup idea could be wasted, if he is not good
                in getting his voice across the internet, that's where we come in
            </p>
        </section>
        <img />
    </div>
</div>

<style lang="scss">
    @use "$lib/scss/utils" as sass;

    #company {
        max-width: 100%;
        height: 100%;
        padding: 5px 20px 5px 20px;
        box-sizing: border-box;
        display: grid;
        grid-template-rows: min-content min-content;
        background-color: #f3f3f3;
        justify-items: center;

        @media (max-width: 500px) {
            padding: 5px 10px 5px 10px;
        }
    }

    h3 {
        font-size: 4rem;
        font-weight: 700;
        color: #0000;
        width: fit-content;
        margin: 0 auto 0 auto;
        text-align: center;
        background-image: linear-gradient(
            to right,
            hsl(47.9, 100%, 40%),
            hsl(47.9, 100%, 50%),
            hsl(47.9, 100%, 40%)
        );
        background-clip: text;

        @media (max-width: 400px) {
            font-size: 3.5rem;
        }
    }

    #company-info-grid {
        display: grid;
        max-width: 650px;
        border-radius: 10px;
        grid-template:
            "main-info       main-info       main-info           main-info           logo                logo               " min-content
            "us              us              srt-and-neuralnexus srt-and-neuralnexus srt-and-neuralnexus srt-and-neuralnexus" min-content
            "about-us-detail about-us-detail about-us-detail     decoration          decoration          decoration         " min-content /
            2fr 2fr 1fr 1fr 2fr 2fr;
        margin-top: 20px;
        gap: 15px;
        box-sizing: border-box;
        align-items: center;
        background-image: url("/about-me/paint-splash.jpg");
        background-size: cover;
        background-position: center;

        @media (max-width: 500px) {
            gap: 5px;
        }

        @media (max-width: 430px) {
            background-size: 200%;
            background-repeat: no-repeat;
        }

        section {
            box-sizing: border-box;
            padding: 5px 5px 5px 15px;
            font-size: 1rem;
            background-color: hsla(230, 50%, 90%, 70%);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            height: 100%;
            box-shadow: 0 0 10px 2px #0002 inset;

            @media (max-width: 1100px) {
                font-size: 0.9rem;
            }

            @media (max-width: 900px) {
                font-size: 0.85rem;
            }

            @media (max-width: 800px) {
                font-size: 1.1rem;
            }

            @media (max-width: 600px) {
                font-size: 1rem;
            }

            @media (max-width: 550px) {
                font-size: 0.9rem;
            }

            @media (max-width: 500px) {
                font-size: 0.8rem;
                padding: 5px 5px 5px 10px;
            }

            @media (max-width: 380px) {
                font-size: 0.75rem;
                padding: 5px 5px 5px 10px;
            }

            h4 {
                font-size: 1.3em;
                margin: 0 0 5px 0;
            }

            p {
                font-size: 0.9em;
                margin: 0;
            }

            &:nth-of-type(1) {
                grid-area: main-info;
            }

            &:nth-of-type(2) {
                grid-area: srt-and-neuralnexus;
            }

            &:nth-of-type(3) {
                grid-area: about-us-detail;
            }
        }

        img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
            object-fit: cover;

            @media (max-width: 400px) {
                height: auto;
                align-self: flex-start;
            }

            &:nth-of-type(1) {
                grid-area: logo;
            }

            &:nth-of-type(2) {
                grid-area: us;
            }

            &:nth-of-type(3) {
                grid-area: decoration; //idk
            }
        }
    }
</style>
