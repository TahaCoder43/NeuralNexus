<script lang="ts">
    import classesStore from "$lib/stores/classes";
    import hideDocument from "$lib/loader";
    import stylesStore from "$lib/stores/styles";
    import Logo from "./Logo.svelte";
    export let didScrollDown: Boolean, inInitialPosition: Boolean;
    $: moved = inInitialPosition ? "" : "moved";
    $: hide = didScrollDown ? "hide" : "";
    function handleMenuClicked() {
        classesStore.update((classes) => {
            return {
                ...classes,
                menu: "menu-opened",
                menuHolder: "menu-holder-opened",
            };
        });
        setTimeout(() => {
            stylesStore.update((styles) => {
                return {
                    ...styles,
                    menuHolder: "left 0s ease 0.5s, backdrop-filter 0.5s",
                };
            });
        }, 500);
    }
    const preparedHideDocument = (event: Event) => {
        let target = event.target as HTMLAnchorElement;
        hideDocument(target.href);
    };
</script>

<div id="navbar" class={[moved, hide].join(" ")}>
    <div
        id="logo"
        on:click={() => {
            hideDocument("/");
        }}
    ></div>
    <div id="links">
        <a class="link" href="/" on:click|preventDefault={preparedHideDocument}>Home</a>
        <a class="link" href="/pricing" on:click|preventDefault={preparedHideDocument}>Pricing</a>
        <a class="link" href="/faqs" on:click|preventDefault={preparedHideDocument}>FAQs</a>
        <a class="link" href="/about-us" on:click|preventDefault={preparedHideDocument}>About us</a>
    </div>
    <button id="menu-opener" on:click={handleMenuClicked}>=</button>
</div>

<style lang="scss">
    @media (min-width: 1100px) {
        .link {
            font-size: 1.2rem;
        }

        #links {
            width: 30vw;
        }

        #menu-opener {
            position: absolute;
            top: -99999px;
        }
    }

    @media (max-width: 1100px) and (min-width: 800px) {
        .link {
            font-size: 1rem;
        }

        #links {
            width: 35vw;
        }

        #menu-opener {
            position: absolute;
            top: -99999px;
        }
    }

    @media (max-width: 800px) {
        #links {
            position: absolute;
            top: -99999px;
        }

        #menu-opener {
            position: relative;
            top: -5px;
        }
    }

    #navbar {
        height: 5rem;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        background-color: #fff8;
        backdrop-filter: blur(7px);
        z-index: 100;
        transition: all 0.3s;
    }

    .moved {
        box-shadow: 0px 2px 3px 1px #0003;

        #logo {
            height: 4rem;
            border-radius: 100%;
            margin-left: calc(var(--left-align) + 0.5rem);
        }
    }

    .hide {
        top: -5rem !important;
    }

    #logo {
        margin-left: var(--left-align);
        background-image: url("/logo.jpeg");
        background-size: contain;
        height: 100%;
        aspect-ratio: 1/1;
        filter: hue-rotate(20deg) saturate(1.5);
        transition:
            height 0.3s,
            border-radius 0.3s,
            margin-left 0.3s,
            filter 0.3s;

        cursor: pointer;

        &:hover {
            filter: hue-rotate(20deg) saturate(1.5) brightness(1.2);
        }
    }

    #links {
        margin-right: 1rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .link {
        font-weight: 700;
        color: #333;
        transition: all 0.3s;
        text-decoration: none;
        cursor: pointer;
    }

    .link:hover {
        color: #000;
    }

    #menu-opener {
        display: flex;
        align-items: center;
        justify-content: center;
        float: right;
        border: none;
        outline: none;
        font-size: 2rem;
        margin-right: 30px;
        cursor: pointer;
        background-color: transparent;
    }
</style>
