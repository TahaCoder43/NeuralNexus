<script lang="ts">
    import classesStore from "$lib/stores/classes";
    import ContactContent from "./ContactContent.svelte";
    import ContactUsForm from "./ContactUsForm.svelte";
    function hideContactUs() {
        classesStore.update((classes) => {
            classes.contactUsHolder = "cover-up-holder";
            classes.contactUs = "";
            classes.contactContent = "hidden";
            return classes;
        });
        setTimeout(() => {
            classesStore.update((classes) => {
                classes.contactUsHolder = "";
                return classes;
            });
        }, 500);
    }
</script>

<div id="contact-us-holder" class={$classesStore.contactUsHolder}>
    <div id="contact-us" class={$classesStore.contactUs}>
        <button id="close-contact-us" on:click={hideContactUs}>x</button>
        <ContactUsForm />
        <ContactContent />
    </div>
</div>

<style lang="scss">
    #contact-us-holder {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        width: 0;
        height: 0;
        margin: auto;
        z-index: 999;
        background-color: #fff0;
        overflow: hidden;
        transition: all 0.5s;
    }

    #contact-us {
        position: relative;
        width: 90%;
        height: max(90%, 650px);
        background-color: white;
        box-shadow: 3px 5px 8px 4px #0004;
        transition: all 0.5s;
        overflow: hidden;
    }

    .cover-up-holder {
        width: 100% !important;
        height: 100% !important;
        overflow: scroll !important;
    }

    .blur-background {
        backdrop-filter: blur(5px) brightness(0.9);
    }

    .round {
        border-radius: 20px;
    }

    #close-contact-us {
        position: absolute;
        top: 10px;
        right: 10px;
        color: white;
        background-color: #f55;
        border-radius: 100%;
        width: 30px;
        height: 30px;
        border: solid #f00 1px;
        outline: none;
        padding: 0;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: scale(0.9);
        padding-bottom: 4px;
        box-sizing: border-box;
        z-index: 10;
        transition:
            filter 0.3s,
            transform 0.3s;
    }

    #close-contact-us:hover {
        filter: brightness(0.8) saturate(1.2);
        transform: scale(1.1) rotate(180deg);
    }
</style>
