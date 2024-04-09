<script lang="ts">
    import classesStore from "$lib/stores/classes";
</script>

<svg
    width="210mm"
    height="210mm"
    version="1.1"
    viewBox="0 0 210 210"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
>
    <defs>
        <linearGradient
            id="linearGradient1987"
            x1="150.63"
            x2="69.646"
            y1="53.397"
            y2="158.12"
            gradientTransform="matrix(1.4785 0 0 1.4785 -54.857 -40.107)"
            gradientUnits="userSpaceOnUse"
        >
            <stop style="stop-color:#fff" offset="0" />
            <stop style="stop-color:#fff;stop-opacity:.59898" offset="1" />
        </linearGradient>
        <linearGradient
            id="linearGradient2097"
            x1="-42.863"
            x2="-70.362"
            y1="97.211"
            y2="174.8"
            gradientTransform="matrix(1.4785 0 0 1.4785 186.73 -95.377)"
            gradientUnits="userSpaceOnUse"
        >
            <stop style="stop-color:#fff" offset="0" />
            <stop style="stop-color:#fff;stop-opacity:.6269" offset="1" />
        </linearGradient>
        <linearGradient
            id="linearGradient2746"
            x1="-119.81"
            x2="-165.34"
            y1="-23.923"
            y2="-33.331"
            gradientTransform="matrix(1.4785 0 0 1.4785 66.842 3.5111)"
            gradientUnits="userSpaceOnUse"
        >
            <stop style="stop-color:#fff" offset="0" />
            <stop style="stop-color:#fff;stop-opacity:.54575" offset="1" />
        </linearGradient>
    </defs>
    <circle
        cx="105"
        cy="104.19"
        r="86.125"
        style="fill:none;stroke-dasharray:112.182, 112.182;stroke-linecap:round;stroke-linejoin:round;stroke-width:9.3485;stroke:url(#linearGradient1987)"
        class={$classesStore.loader}
    />
    <circle
        cx="105"
        cy="104.19"
        r="57.352"
        style="fill:none;stroke-dasharray:74.7039, 74.7039;stroke-linecap:round;stroke-linejoin:round;stroke-width:6.2254;stroke:url(#linearGradient2097)"
        class={$classesStore.loader}
    />
    <circle
        cx="105"
        cy="104.19"
        r="35.682"
        style="fill:none;stroke-dasharray:46.4774, 46.4774;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.8731;stroke:url(#linearGradient2746)"
        class={$classesStore.loader}
    />
</svg>

<style lang="scss">
    @keyframes rotate {
        from {
            transform: rotate(36000deg);
        }
    }

    svg {
        width: 200px;
        circle {
            transform-origin: center center;
        }
    }

    :global(.running) {
        $start: 80s;
        animation-name: rotate;
        animation-iteration-count: infinite;
        animation-timing-function: linear;

        &:nth-child(2) {
            animation-duration: $start;
        }

        &:nth-child(3) {
            animation-duration: calc($start + ($start / 3));
        }

        &:nth-child(4) {
            animation-duration: calc($start + ($start * 2 / 3));
        }
    }
</style>
