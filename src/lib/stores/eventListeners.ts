import { writable } from "svelte/store";

interface EventListenersStore {
    expandCircle: boolean[];
    shrinkCircle: boolean[];
}

const eventListenersStore = writable<EventListenersStore>({
    expandCircle: Array(3).fill(true),
    shrinkCircle: Array(3).fill(false),
});

export default eventListenersStore;
