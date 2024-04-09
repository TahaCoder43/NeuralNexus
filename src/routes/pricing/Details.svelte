<script lang="ts">
    import classesStore from "$lib/stores/classes";
    import eventListenersStore from "$lib/stores/eventListeners";
    import stylesStore from "$lib/stores/styles";
    import type { DetailsText } from "$lib/stores/types";
    export let detailsText: DetailsText, index: number;
    let sections = Object.keys(detailsText);
    let headings = sections.map((section) => detailsText[section].heading);
    let contents = sections.map((section) => detailsText[section].content);
    function shrinkCircle() {
        classesStore.update((classes) => {
            classes["miniCircle"][index] = "shrinked";
            classes["border"][index] = "shown";
            classes["borderCover"][index] = "shown";
            classes["details"][index] = "covered";
            return classes;
        });
        stylesStore.update((styles) => {
            styles["para"][index] = "opacity: 1;";
            return styles;
        });
        eventListenersStore.update((eventListeners) => {
            eventListeners["shrinkCircle"][index] = false;
            return eventListeners;
        });
        setTimeout(() => {
            eventListenersStore.update((eventListeners) => {
                eventListeners["expandCircle"][index] = true;
                return eventListeners;
            });
        }, 500);
    }
</script>

<div class={`details ${$classesStore.details[index]}`}>
    <div class="info">
        {#each sections as section, i}
            <section class={section}>
                <h3>{@html headings[i]}</h3>
                {@html contents[i]}
            </section>
        {/each}
    </div>
    <div
        class="minimize"
        on:click|stopPropagation={$eventListenersStore.shrinkCircle ? shrinkCircle : null}
    ></div>
</div>

<style lang="scss">
    @media (min-width: 1200px) {
        .info {
            .notes {
                margin-bottom: 50px;
            }

            section {
                margin-left: 20px;
                margin-right: 10px;

                h3 {
                    font-size: 1.5rem;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }

                :global(p) {
                    margin-top: 10px;
                    margin-bottom: 10px;
                    font-size: 0.9rem;
                }

                :global(li) {
                    font-size: 0.8rem;
                }
            }
        }

        .minimize {
            width: 180px;
            height: 100px;
            background-position: 30px 5px;
            background-size: 40px 40px;
        }
    }

    @media (max-width: 1200px) {
        .info {
            .notes {
                margin-bottom: 40px;
            }

            section {
                margin-left: 15px;
                margin-right: 7px;

                h3 {
                    font-size: 1.2rem;
                    margin-top: 10px;
                    margin-bottom: 7px;
                }

                :global(p) {
                    margin-top: 7px;
                    margin-bottom: 7px;
                    font-size: 0.8rem;
                }

                :global(li) {
                    font-size: 0.75rem;
                }
            }
        }

        .minimize {
            width: 170px;
            height: 90px;
            background-position: 25px 3px;
            background-size: 35px 35px;
        }
    }

    .details {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 4;
        transition: width 0.5s 0.5s;
        overflow: hidden;
    }

    .info {
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        section {
            h3 {
                color: #333;
            }

            :global(p) {
                color: #444;
                overflow: hidden;
            }

            :global(li) {
                color: #444;
            }

            :global(ul) {
                margin: 0;
                padding-left: 20px;
            }
        }
    }

    .covered {
        width: 0;
        opacity: 0;
        z-index: -1;
    }

    .minimize {
        position: absolute;
        background-color: #59c;
        background-image: url("/offers/close-details.png");
        background-repeat: no-repeat;
        bottom: -50px;
        right: -90px;
        border-radius: 100px;
        z-index: 2;
        transition:
            background-position 0.5s,
            filter 0.3s;
        &:hover {
            background-position: 75px 53px;
            filter: blur(2px);
        }
    }
</style>
