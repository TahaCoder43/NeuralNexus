<script lang="ts">
    import ContactUs from "./ContactUs.svelte";
    import offersTextStore from "$lib/stores/offersText";
    import Offer from "./Offer.svelte";
    import classesStore from "$lib/stores/classes";
    import { squish, removeSquishEffects } from "$lib/effects/click";
    function showContactUs() {
        classesStore.update((classes) => {
            classes.contactUsHolder = "cover-up-holder";
            return classes;
        });
        setTimeout(() => {
            classesStore.update((classes) => {
                classes.contactUsHolder = "cover-up-holder blur-background";
                classes.contactUs = "round";
                classes.contactContent = "";
                return classes;
            });
        }, 500);
    }
</script>

<div id="content-holder">
    <div id="content">
        <ContactUs />
        {#each $offersTextStore as offerText, index (index)}
            <Offer {offerText} {index} />
        {/each}
    </div>
    <button
        id="open-contact-us"
        on:click={showContactUs}
        on:mousedown={squish}
        on:mouseup={removeSquishEffects}>Contact</button
    >
</div>

<style lang="scss">
    #content-holder {
        height: max(600px, calc(100vh - 5rem));
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (max-width: 1200px) {
            height: max(500px, calc(100vh - 5rem));
        }

        @media (max-width: 900px) {
            height: auto;
        }
    }

    #content {
        box-sizing: border-box;
        padding-bottom: 40px;
        display: flex;
        justify-content: space-evenly;
        box-sizing: border-box;
        align-items: flex-end;
        min-height: 530px;

        @media (max-width: 900px) {
            padding-bottom: 100px;
            padding-top: 40px;
            flex-direction: column;
            align-items: center;
            row-gap: 50px;
            height: auto;
        }
    }

    #open-contact-us {
        display: block;
        position: relative;
        width: 180px;
        height: 50px;
        font-weight: 600;
        color: white;
        margin: 0 auto 50px auto;
        border: none;
        cursor: pointer;
        font-size: 2rem;
        border-radius: 10px;
        background-image: linear-gradient(to top, #77b, #89c);
        transition: box-shadow 0.3s;

        @media (max-width: 1200px) {
            width: 150px;
            height: 40px;
            font-size: 1.5rem;
            top: -15px;
        }

        @media (max-width: 900px) {
            position: fixed;
            margin: 0;
            bottom: 10px;
            right: 10px;
            top: auto;
            border-radius: 20px;
            width: 70px;
            height: 70px;
            font-size: 0rem;
            z-index: 100;
            background-color: #77b;
            background-image: url("/offers/contact.png");
            background-repeat: no-repeat;
            background-size: 70% 50%;
            background-position: 60% center;
        }

        &:hover {
            box-shadow: 0 0 8px 3px #abfa;
        }
    }
</style>
