<script lang="ts">
    import { onMount } from "svelte";
    let shown = "";

    onMount(() => {
        shown = "shown";
    });
</script>

<svg
    version="1.1"
    viewBox="0 0 210 210"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    id="logo"
    class={shown}
>
    <defs>
        <linearGradient id="linearGradient62">
            <stop style="stop-color:#286fc8" offset="0" />
            <stop style="stop-color:#4c8bdc" offset="1" />
        </linearGradient>
        <linearGradient id="linearGradient55">
            <stop style="stop-color:#1e5ba7" offset="0" />
            <stop style="stop-color:#4c8bdc;stop-opacity:.99994" offset="1" />
        </linearGradient>
        <filter
            id="filter54"
            x="-.056222"
            y="-.027679"
            width="1.0966"
            height="1.0671"
            style="color-interpolation-filters:sRGB"
        >
            <feFlood
                flood-color="rgb(0,0,0)"
                flood-opacity=".3451"
                in="SourceGraphic"
                result="flood"
            />
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="1.000000" />
            <feOffset dx="-1.900000" dy="1.313600" in="blur" result="offset" />
            <feComposite in="flood" in2="offset" operator="in" result="comp1" />
            <feComposite in="SourceGraphic" in2="comp1" result="comp2" />
        </filter>
        <linearGradient
            id="linearGradient56"
            x1="167.44"
            x2="132.06"
            y1="204.32"
            y2="139.56"
            gradientUnits="userSpaceOnUse"
            xlink:href="#linearGradient55"
        />
        <linearGradient
            id="linearGradient57"
            x1="167.44"
            x2="43.135"
            y1="204.32"
            y2="54.536"
            gradientUnits="userSpaceOnUse"
        >
            <stop style="stop-color:#206ac6" offset="0" />
            <stop style="stop-color:#4c8bdc;stop-opacity:.99994" offset=".23138" />
            <stop style="stop-color:#4c8bdc" offset=".76157" />
            <stop style="stop-color:#2468c2" offset="1" />
        </linearGradient>
        <linearGradient
            id="linearGradient63"
            x1="127.22"
            x2="115.92"
            y1="135.62"
            y2="125.4"
            gradientUnits="userSpaceOnUse"
            xlink:href="#linearGradient62"
        />
        <linearGradient
            id="linearGradient65"
            x1="80.046"
            x2="91.016"
            y1="124.21"
            y2="133.68"
            gradientUnits="userSpaceOnUse"
            xlink:href="#linearGradient62"
        />
    </defs>
    <g
        transform="matrix(1.0964 0 0 1.0964 -8.851 -38.269)"
        style="filter:url(#filter54);stroke:url(#linearGradient56)"
    >
        <path
            d="m86.791 129.9 78.044 71.105v-143.6c-5.0558-5.4296-10.502-8.4649-17.825 0v112.23l-84.95-80.532v114.79c-5.9793 6.2323-11.69 4.403-17.315 0v-146.48l78.706 74.962"
            style="fill:none;font-variation-settings:normal;stop-color:#000000;stroke-linecap:round;stroke-width:4.9033;stroke:url(#linearGradient57)"
        />
        <path
            d="m61.013 190.8c-9.1359 8.3457-12.464 0.53159-14.6-0.37144v11.932l7.326 4.0097 7.5431-4.2811z"
            style="fill:#4c8bdc;font-variation-settings:normal;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.1023;stroke:url(#linearGradient56)"
        />
        <path
            d="m164.07 69.603v-13.323l-8.5373-4.6726-7.6001 7.2048 0.43808 10.94c4.9545-4.3236 10.191-4.3191 15.699-0.14943z"
            style="-inkscape-stroke:none;fill:#4c8bdc;font-variation-settings:normal;stop-color:#000000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.9792;stroke:url(#linearGradient56)"
        />
        <path
            d="m116.57 125.59c4.3782-0.13196 9.7368 1.4636 12.163 4.5352 2.1114 3.3579-3.5941 8.9575-7.086 6.8262-3.3618-2.324-5.5653-6.622-5.0774-11.361z"
            style="fill:url(#linearGradient63);font-variation-settings:normal;stop-color:#000000;stroke:none"
        />
        <path
            d="m91.413 133.8c-4.3782 0.13196-9.7367-1.4636-12.163-4.5352-2.1114-3.3579 3.5941-8.9575 7.086-6.8262 3.3618 2.324 5.5653 6.622 5.0774 11.361z"
            style="fill:url(#linearGradient65);font-variation-settings:normal;stop-color:#000000;stroke:none"
        />
    </g>
</svg>

<style lang="scss">
    svg {
        stroke-dasharray: 1000;
        stroke-dashoffset: 1000;
        transition: stroke-dashoffset 2s linear;

        &:global(.shown) {
            stroke-dashoffset: 0;
        }
    }
</style>
