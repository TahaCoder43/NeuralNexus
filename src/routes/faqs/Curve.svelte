<script lang="ts">
    export let blockerTop: string = "-100px";
    let windowWidth: number;
</script>

<svelte:window bind:innerWidth={windowWidth} />
<svg
    version="1.1"
    viewBox="0 0 82 297"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <defs>
        <linearGradient
            id="linearGradient3166"
            x1="41.845"
            x2="43.225"
            y1=".43354"
            y2="298.65"
            gradientUnits="userSpaceOnUse"
        >
            <stop style="stop-color:#80b4fc" offset="0" />
            <stop style="stop-color:#b89dce" offset="1" />
        </linearGradient>
    </defs>
    <g style="stroke-width:2.9;stroke:url(#linearGradient3166)">
        <path
            d="m43.759 0.30867c-13.357 42.634-26.713 85.269-27.767 132.11-1.0533 46.845 10.196 97.9 18.799 126.19 8.6029 28.291 14.558 33.818 20.514 39.344"
            style="fill:none;stroke-width:2.9;stroke:url(#linearGradient3166)"
        />
        <path
            d="m30.74 296.94c9.5861-46.3 19.172-92.601 15.045-135.46-4.1272-42.862-21.967-82.285-28.852-108.51-6.885-26.229-2.8146-39.262 1.2559-52.296"
            style="fill:none;stroke-width:2.9;stroke:url(#linearGradient3166)"
        />
        <path
            d="m58.416 0.21775c5.2042 24.121 10.408 48.242 7.0055 74.7-3.4027 26.459-15.412 55.254-27.026 85.083s-22.834 60.688-22.538 83.919 12.104 38.833 23.913 54.435"
            style="fill:none;stroke-width:2.9;stroke:url(#linearGradient3166)"
        />
    </g>
</svg>
{#if windowWidth > 800}
    <div id="blocker" style:top={blockerTop}></div>
{/if}

<style lang="scss">
    svg {
        height: 100vh;
        flex-shrink: 0;
    }

    svg:nth-of-type(2n) {
        transform: rotateZ(180deg) rotateY(180deg);
    }

    #blocker {
        position: absolute;
        height: 50px;
        width: calc(100% - 20px);
        left: 10px;
        background-color: #333;
        backdrop-filter: blur(5px);
        z-index: 2;
        border-radius: 10px;
    }
</style>
