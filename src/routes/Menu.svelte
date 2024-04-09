<script lang="ts">
    import hideDocument from "$lib/loader";
    import classesStore from "$lib/stores/classes";
    import stylesStore from "$lib/stores/styles";

    function handleMenuCloserClicked() {
        classesStore.update((classes) => {
            return {
                ...classes,
                menu: "menu-closed",
                menuHolder: "menu-holder-closed",
            };
        });
        setTimeout(() => {
            stylesStore.update((styles) => {
                return {
                    ...styles,
                    menuHolder: "backdrop-filter 0.5s",
                };
            });
        }, 500);
    }

    const preparedHideDocument = (event: Event) => {
        handleMenuCloserClicked();
        let target = event.target as HTMLAnchorElement;
        hideDocument(target.href);
    };
</script>

<div
    id="menu-holder"
    class={$classesStore.menuHolder}
    style={`transition: ${$stylesStore.menuHolder}`}
>
    <div id="menu" class={$classesStore.menu}>
        <div
            id="menu-logo"
            on:click={() => {
                hideDocument("/");
            }}
        ></div>
        <button id="menu-closer" on:click={handleMenuCloserClicked}>=</button>
        <a href="/" on:click|preventDefault={preparedHideDocument}>Home</a>
        <a href="/pricing" on:click|preventDefault={preparedHideDocument}>Pricing</a>
        <a href="/faqs" on:click|preventDefault={preparedHideDocument}>FAQs</a>
        <a href="/about-us" on:click|preventDefault={preparedHideDocument}>About us</a>
    </div>
</div>

<style lang="scss">
    #menu-holder {
        position: fixed;
        top: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background-color: transparent;
        z-index: 999;
        transition: backdrop-filter 0.5s;
    }

    #menu {
        position: relative;
        box-sizing: border-box;
        height: 100%;
        width: 200px;
        background-color: #579;
        box-shadow: 2px 0px 5px 2px #0004;
        transition: left 0.5s;
        padding: 50px 0 0 0;
    }

    .menu-holder-closed {
        left: -100%;
    }

    .menu-holder-opened {
        left: 0%;
        backdrop-filter: blur(10px) brightness(0.6);
    }

    .menu-closed {
        left: -220px;
    }

    .menu-opened {
        left: 0px;
    }

    #menu-logo {
        margin-bottom: 30px;
        margin-left: 20px;
        height: 6rem;
        width: 6rem;
        background-image: url("/logo.jpeg");
        background-size: contain;
        border-radius: 10px;
        filter: hue-rotate(20deg) saturate(1.5);
        cursor: pointer;
        transition: filter 0.3s;

        &:hover {
            filter: hue-rotate(20deg) saturate(1.5) brightness(1.2);
        }
    }

    #menu-closer {
        position: absolute;
        right: 20px;
        top: 0;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 2rem;
        background-color: transparent;
        color: white;
    }

    #menu > a {
        font-size: 1.3rem;
        font-weight: 700;
        padding-top: 5px;
        padding-bottom: 5px;
        margin-top: 5px;
        margin-bottom: 5px;
        padding-left: 10px;
        margin-left: 20px;
        display: block;
        text-decoration: none;
        color: #fff;
        transition: all 0.5s;
        border-radius: 30px 0px 0px 30px;
    }

    #menu > a:hover {
        background-color: #fff;
        color: #579;
    }
</style>
