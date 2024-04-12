<script lang="ts">
    // your script goes here
</script>

<div class="card">
    <slot />
</div>

<style lang="scss">
    $light-blue: hsl(206, 54%, 57%);
    .card {
        width: 100%;
        height: 100%;
        box-shadow: 2px 3px 5px 2px #0003;
        border-radius: 10px;
        overflow: hidden;

        &:nth-child(1) {
            grid-area: about;
            background-color: $light-blue;
            color: #fff;
        }
        &:nth-child(2) {
            grid-area: picture;
            background-color: #eee;
            flex-basis: 100%;
        }
        &:nth-child(3) {
            grid-area: achievements;
            background-color: #eee;
        }
        &:nth-child(4) {
            grid-area: coding-details;
            background-color: $light-blue;
        }
        &:nth-child(5) {
            grid-area: company;
            background-color: #eee;
        }
        &:nth-child(6) {
            grid-area: left-decoration; // can't decide
            background-color: #eee;
            height: 220px;

            @media (max-width: 550px) {
                height: 150px;
            }
        }
    }
</style>
