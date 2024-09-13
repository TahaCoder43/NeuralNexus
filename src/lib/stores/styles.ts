import { writable } from "svelte/store";

interface StylesStore {
    menuHolder: string;
    para: string[];
    line: string;
    myPicture: string;
    scrollHeader: string;
}

let stylesStore = writable<StylesStore>({
    menuHolder: "",
    para: Array(3).fill("opacity: 1;"),
    line: "",
    myPicture: "",
    scrollHeader: "scroll-behavior: smooth;",
});

export default stylesStore;
