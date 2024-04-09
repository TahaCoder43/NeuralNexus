<script lang="ts">
    import { squish, removeSquishEffects } from "$lib/effects/click";
</script>

<section class="footer">
    <label for="offer">Offer:</label>
    <div class="select-offer">
        <input type="radio" name="offer" id="offer1" />
        <input type="radio" name="offer" id="offer2" />
        <input type="radio" name="offer" id="offer3" />
        <div class="labels">
            <label for="offer1">1</label>
            <label for="offer2">2</label>
            <label for="offer3">3</label>
        </div>
    </div>
    <input
        type="submit"
        value="Mail Us!"
        on:mousedown={squish}
        on:mouseup={removeSquishEffects}
        on:submit
    />
</section>

<style lang="scss">
    .footer {
        grid-area: footer;
        display: grid;
        align-items: center;
        height: 100%;
        width: 100%;
        grid-template: "label offers . submit" 100% / 60px 120px 1fr max-content;

        @media (max-width: 800px) {
            grid-template-columns: 50px 120px 1fr 100px;
        }
    }

    label[for="offer"] {
        font-size: 1.2rem;
        justify-self: left;
        grid-area: label;

        @media (max-width: 800px) {
            font-size: 1rem;
        }
    }

    .select-offer {
        position: relative;
        display: flex;
        justify-content: center;
        border: solid 2px #888;
        border-radius: 5px;
        width: 100%;
        grid-area: offers;

        .labels {
            height: 100%;
            width: 100%;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: 0;
            label {
                display: inline-block;
                width: 33.33%;
                text-align: center;
                color: #555;
                cursor: pointer;
            }
        }
    }

    input[type="radio"] {
        appearance: none;
        margin: 0;
        height: 25px;
        width: 33.33%;
        transition: all 0.3s;
        cursor: pointer;

        @media (max-width: 800px) {
            height: 20px;
        }

        &:checked {
            background-color: #7f7;
        }

        &:nth-child(1) {
            border-right: solid 2px #888;
        }

        &:nth-child(2) {
            border-right: solid 2px #888;
        }
    }

    input[type="submit"] {
        background-color: #59c;
        width: fit-content;
        justify-self: flex-end;
        font-size: 1.2rem;
        padding: 5px 10px 5px 10px;
        box-sizing: border-box;
        font-weight: 700;
        color: white;
        border: none;
        box-shadow: 2px 3px 5px 2px #0003;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.5, 6, 0.9, 0.9);
        grid-area: submit;

        @media (max-width: 355px) {
            font-size: 1rem;
        }

        &:hover {
            transform: rotate(2deg);
        }
    }
</style>
