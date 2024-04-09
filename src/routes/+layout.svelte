<script lang="ts">
    import "./styles.css";
    import Navbar from "./Navbar.svelte";
    import Menu from "./Menu.svelte";
    import classesStore from "$lib/stores/classes";
    import { onNavigate } from "$app/navigation";
    import Loader from "./Loader.svelte";

    let inInitialPosition = true;
    let didScrollDown = false;

    const handleScroll = (function () {
        let previousScrolledPixels = 0;
        return () => {
            let scrolledPixels = document.documentElement.scrollTop;
            inInitialPosition = scrolledPixels == 0;
            didScrollDown = 0 < scrolledPixels - previousScrolledPixels;
            previousScrolledPixels = scrolledPixels;
        };
    })();

    onNavigate(() => {
        console.log("should have moved");
        return () => {
            classesStore.update((classes) => {
                return {
                    ...classes,
                    cover: "",
                };
            });
            setTimeout(() => {
                classesStore.update((classes) => {
                    return {
                        ...classes,
                        loader: "",
                    };
                });
            }, 400);
        };
    });
</script>

<svelte:document on:scroll={handleScroll} />
<svelte:head>
    <link rel="icon" href="/logo.jpeg" />
</svelte:head>
<div class="app">
    <div id="cover" class={$classesStore.cover}>
        <Loader />
    </div>
    <Navbar {didScrollDown} {inInitialPosition} />
    <Menu />
    <slot />
</div>

<style lang="scss">
    $coverTime: 0.2s;
    #cover {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        top: -100vh;
        height: 100vh;
        width: 100%;
        z-index: 99999;
        background-color: #2220;
        backdrop-filter: blur(0px);
        overflow: hidden;
        transition:
            background-color $coverTime,
            backdrop-filter $coverTime,
            top 0s ease $coverTime,
            animation 0s ease $coverTime;
    }

    :global(.covered) {
        background-color: #2228 !important;
        top: 0 !important;
        backdrop-filter: blur(5px) !important;
        transition:
            background-color $coverTime,
            backdrop-filter $coverTime !important;
    }
    .app {
        position: relative;
    }
</style>
