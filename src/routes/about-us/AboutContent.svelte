<script>
    import WiggleWiggle from "./WiggleWiggle.svelte";
</script>

<h2>
    About me <WiggleWiggle content="..." displacementPx={30} />
</h2>
<p>
    I had a passion for sciences, and math since childhood. Growing up watching science youtube
    videos helped me fall in love with scieces. At 13 I saw the potential with coding and started
    learning it on my own.
</p>
<p>
    After all of this self-development, There has been a void in my heart for one unfullfilled
    desire, the desire of teaching others. I had a tendency to tell people close to me about what I
    learnt, hoping they become passionate about it too and perhaps learn it from me, but never did I
    succeed.
</p>
<p>
    But as I have grown up now, and became enough of an expert to teach, I decided to open an
    institute where I could help my brothers in humanity fall in love with sciences, math, and
    coding, or if they don't, at the least I want to make it less of a burden on them. Not everyone
    is destined to love these subjects, but many are required to learn them. This is the story of
    neural nexus
</p>

<style lang="scss">
    h2 {
        position: relative;
        font-size: 5em;
        margin: 10px 0 10px 0;
        width: fit-content;
        color: #fff0;
        background-image: linear-gradient(to right, #fff, #ddd 100%);
        background-clip: text;
        :global(span) {
            color: white;
        }

        @media (max-width: 1000px) {
            font-size: 4.5em;
        }

        @media (max-width: 530px) {
            font-size: 4em;
        }

        @media (max-width: 400px) {
            font-size: 3.5em;
        }
    }

    p {
        position: relative;
        font-size: 1.2em;
        color: #f5f5f5;
        height: fit-content;
        background-color: #0003;
        box-shadow: 2px 3px 5px 2px #0005;
        padding: 5px 10px 5px 10px;
        border-radius: 10px;
    }
</style>
