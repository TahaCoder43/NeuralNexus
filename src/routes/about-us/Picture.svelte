<script lang="ts">
    import stylesStore from "$lib/stores/styles";
</script>

<div id="holder" style={$stylesStore.myPicture}>
    <img src="/about-me/me2.jpg" alt="Me" />
</div>

<style lang="scss">
    #holder {
        --padding: 10px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: var(--image-height);
        box-sizing: border-box;
        padding: var(--padding);

        @media (max-width: 600px) {
            height: auto;
            aspect-ratio: 2 / 3;
        }

        &::before {
            content: "";
            position: absolute;
            bottom: var(--padding);
            left: var(--padding);
            width: calc(100% - (var(--padding) * 2));
            height: 50%;
            background-image: linear-gradient(to top, #000c 20%, #0000);
            z-index: 2;
            border-radius: 0 0 10px 10px;
            transition: opacity 0.3s;

            @media (min-width: 800px) {
                opacity: 0;
            }
        }

        &::after {
            content: "Taha Munawar";
            position: absolute;
            bottom: var(--padding);
            left: var(--padding);
            width: calc(100% - (var(--padding) * 2));
            text-align: center;
            box-sizing: border-box;
            padding: 0 0 30px 0;
            font-size: 2.5rem;
            font-weight: 700;
            color: #fff0;
            z-index: 3;
            background-image: linear-gradient(to right, #fff 20%, #bbb);
            background-clip: text;
            transition: opacity 0.3s;

            @media (min-width: 800px) {
                opacity: 0;
            }

            @media (max-width: 1000px) {
                font-size: 2rem;
            }

            @media (max-width: 750px) {
                font-size: 1.7rem;
            }

            @media (max-width: 600px) {
                font-size: 3rem;
            }

            @media (max-width: 450px) {
                font-size: 2.5rem;
            }

            @media (max-width: 400px) {
                font-size: 2rem;
            }

            @media (max-width: 320px) {
                font-size: 1.7rem;
            }
        }

        &:hover {
            &::before,
            &::after {
                @media (min-width: 800px) {
                    opacity: 1;
                }
            }
        }
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 40%;
        border-radius: 10px;
        overflow: hidden;
    }
</style>
