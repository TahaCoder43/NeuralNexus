import classesStore from "./stores/classes";
import { goto } from "$app/navigation";

export default function hideDocument(href: string) {
    classesStore.update((classes) => {
        return {
            ...classes,
            cover: "covered",
            loader: "running",
        };
    });
    setTimeout(() => {
        goto(href);
    }, 400);
}
