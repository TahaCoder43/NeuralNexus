<script lang="ts">
    import nodesStore from "$lib/stores/nodes";
    let windowWidth: number;
    $: isLargeScreen = windowWidth > 800;
    let svg: SVGSVGElement | undefined;
    let rect: SVGRectElement | undefined;
    $: nodesStore.update((nodes) => {
        return {
            ...nodes,
            websiteHolderRect: rect,
            websiteHolderSvg: svg,
        };
    });
</script>

<svelte:window bind:innerWidth={windowWidth} />
{#if isLargeScreen}
    <svg
        version="1.1"
        viewBox="0 0 210 210"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        bind:this={svg}
    >
        <defs>
            <clipPath id="clipPath2">
                <path
                    d="m135.05 266.04c-12.746-42.133-10.871-83.903 0-121.77h-44.072c9.6456 36.037 9.9517 76.675 0.52633 121.7z"
                    style="display:none;fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:square;stroke-width:10;stroke:#fff"
                />
                <path
                    class="powerclip"
                    d="m45.464 244.7h140.04v39.562h-140.04zm89.584 21.349c-12.746-42.133-10.871-83.903 0-121.77h-44.072c9.6456 36.037 9.9517 76.675 0.52633 121.7z"
                    style="fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:square;stroke-width:10;stroke:#fff"
                />
            </clipPath>
            <linearGradient
                id="linearGradient45"
                x1="172.21"
                x2="171.74"
                y1="245.58"
                y2="210.76"
                gradientTransform="matrix(.45185 0 0 .45185 59.354 156.26)"
                gradientUnits="userSpaceOnUse"
            >
                <stop style="stop-color:#b4b4b4" offset="0" />
                <stop style="stop-color:#fff" offset="1" />
            </linearGradient>
            <linearGradient
                id="linearGradient47"
                x1="45.093"
                x2="44.428"
                y1="208.8"
                y2="246.89"
                gradientTransform="matrix(.45185 0 0 .45185 59.354 156.26)"
                gradientUnits="userSpaceOnUse"
            >
                <stop style="stop-color:#fff" offset="0" />
                <stop style="stop-color:#b1b1b1" offset="1" />
            </linearGradient>
            <clipPath id="clipPath52">
                <rect
                    x="-3.9873"
                    y="23.971"
                    width="224.51"
                    height="154.77"
                    style="display:none;fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:2.1953;stroke:#fff"
                />
                <path
                    class="powerclip"
                    d="m73.834 156.48h68.758v116.3h-68.758zm-77.822-132.51v154.77h224.51v-154.77z"
                    style="fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:2.1953;stroke:#fff"
                />
            </clipPath>
        </defs>
        <g transform="matrix(1.139 0 0 1.1217 -14.593 -12.319)">
            <g transform="matrix(.65719 0 0 .65719 33.883 18.93)" clip-path="url(#clipPath52)">
                <path
                    d="m117.05 251.7c-5.7591-19.037-4.9119-70.853 0-87.963h-19.914c4.3583 16.283 4.4967 67.587 0.23782 87.933z"
                    style="fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:square;stroke-width:4.5185;stroke:#fff"
                />
                <path
                    transform="matrix(.45185 0 0 .45185 56.032 131.49)"
                    d="m180.5 264.48a65.02 14.781 0 0 1-65.02 14.781 65.02 14.781 0 0 1-65.02-14.781 65.02 14.781 0 0 1 65.02-14.781 65.02 14.781 0 0 1 65.02 14.781z"
                    clip-path="url(#clipPath2)"
                    style="fill:#fff"
                />
                <path
                    d="m137.05 250.99v15.865"
                    style="-inkscape-stroke:none;fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.91758;stroke:url(#linearGradient45)"
                />
                <path
                    d="m79.316 250.99v16.324"
                    style="-inkscape-stroke:none;fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:.91758;stroke:url(#linearGradient47)"
                />
            </g>
            <rect
                x="14.797"
                y="12.967"
                width="180.41"
                height="124.37"
                style="fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:4;stroke:#fff"
                bind:this={rect}
            />
        </g>
    </svg>
{:else}
    <svg version="1.1" viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg" bind:this={svg}>
        <rect
            x="3.6497"
            y="3.6497"
            width="196"
            height="296"
            ry="3.914"
            style="fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:4;stroke:#fff"
            bind:this={rect}
        />
        <ellipse
            cx="100"
            cy="17.36"
            rx="2.5047"
            ry="2.4882"
            style="fill:none;stroke-linecap:square;stroke-miterlimit:5.4;stroke-width:1.7158;stroke:#fff"
        />
    </svg>
{/if}

<style lang="scss">
    svg {
        display: block;
        position: relative;
        width: min(calc(100% - 20px), 420px);
        margin: 0 auto 0 auto;
    }
</style>
