<script lang="ts">
    export let content = "",
        displacementPx = 10,
        durationS = 0.3;
    let contentArray = Array.from(content);
    function generateVars(displacement: number, duration: number, index: number): string {
        return `--displacement: ${displacement}px; --delay: ${0.1 * index}s; --duration: ${duration}s;`;
    }
</script>

{#each contentArray as content, i}
    <span class="wiggle-wiggle" style={generateVars(displacementPx, durationS, i)}>{content}</span>
{/each}

<style lang="scss">
    @keyframes wiggle-wiggle {
        0% {
            top: calc(var(--displacement) * -1);
        }
        70% {
            transform: scale(1);
        }
        100% {
            top: 10px;
            transform: scale(1.5, 0.5);
        }
    }

    .wiggle-wiggle {
        position: relative;
        display: inline-block;
        animation: wiggle-wiggle var(--duration) cubic-bezier(0.55, 0.09, 0.68, 0.53) var(--delay)
            alternate-reverse infinite;
        text-wrap: nowrap;
        /*animation-name: wiggle-wiggle;
        animation-iteration-count: infinite;
        animation-direction: alternate-reverse;
        animation-timing-function: cubic-bezier(0.55, 0.09, 0.68, 0.53);
        animation-duration: 0.3s;
        animation-delay: var(--delay);*/
    }
</style>
