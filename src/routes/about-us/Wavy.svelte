<script lang="ts"></script>

<span class="wavy">
    <slot />
</span>

<style lang="scss">
    @keyframes wavy {
        from {
            transform: rotate(-10deg);
        }
        to {
            transform: rotate(10deg);
        }
    }
    .wavy {
        display: inline-block;
        transform-origin: center 0;
        animation: wavy 1s cubic-bezier(0.46, 0.03, 0.52, 0.96) alternate infinite;

        &:first-child {
            animation-delay: 1s;
        }
    }
</style>
