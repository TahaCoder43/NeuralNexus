<script lang="ts">
    import classesStore from "$lib/stores/classes";
    import stylesStore from "$lib/stores/styles";
    import eventListenersStore from "$lib/stores/eventListeners";

    export let index: number;

    function expandCircle() {
        classesStore.update((classes) => {
            classes["miniCircle"][index] = "expanded";
            classes["border"][index] = "";
            classes["borderCover"][index] = "";
            classes["details"][index] = "";
            return classes;
        });
        stylesStore.update((styles) => {
            styles["para"][index] = "opacity: 0;";
            return styles;
        });
        eventListenersStore.update((eventListeners) => {
            eventListeners["expandCircle"][index] = false;
            return eventListeners;
        });
        setTimeout(() => {
            eventListenersStore.update((eventListeners) => {
                eventListeners["shrinkCircle"][index] = true;
                return eventListeners;
            });
        }, 500);
    }
</script>

<div
    class={`details-circle ${$classesStore.miniCircle[index]}`}
    on:click|stopPropagation={$eventListenersStore.expandCircle[index]
        ? expandCircle
        : null}
>
    <div class={`border ${$classesStore.border[index]}`}></div>
    <div class={`border-cover ${$classesStore.borderCover[index]}`}></div>
    <p style={$stylesStore.para[index]}>More...</p>
</div>

<style lang="scss">
    @media (min-width: 1200px) {
        .shrinked {
            width: 180px;
            height: 100px;
        }

        .details-circle > p {
            font-size: 1.3rem;
        }

        .expanded {
            width: 130%;
            height: 115%;
        }
    }

    @media (max-width: 1200px) {
        .shrinked {
            width: 170px;
            height: 90px;
        }

        .details-circle > p {
            font-size: 1.1rem;
        }

        .expanded {
            width: 140%;
            height: 115%;
        }
    }

    .details-circle {
        position: absolute;
        background-color: #fff;
        z-index: 3;
        transition: all 0.5s;
        bottom: -50px;
        right: -90px;

        p {
            position: absolute;
            left: 20px;
            font-weight: 600;
            letter-spacing: -1px;
            margin: 0;
            top: 15px;
            color: #666;
            z-index: 3;
            transition: all 0.5s;
        }
    }

    .shrinked {
        border-radius: 100%;
        overflow: shown;

        &:hover {
            border-radius: 1000px;

            .border {
                transform: translate(-3px, -3px);
            }

            .border-cover {
                border-radius: 1000px;
            }
        }
    }

    .expanded {
        overflow: hidden;
    }

    .border {
        position: absolute;
        border-radius: inherit;
        background-color: black;
        transform: translate(50%, -3px);
        z-index: 1;
    }

    .border-cover {
        position: relative;
        z-index: 2;
        background-color: white;
        border-radius: inherit;
    }

    .shown {
        transition: all 0.5s;
        width: 100%;
        height: 100%;
    }
</style>
