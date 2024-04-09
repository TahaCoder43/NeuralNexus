import { writable } from "svelte/store";

interface ClassesStore {
    menu: string;
    menuHolder: string;
    miniCircle: string[];
    border: string[];
    borderCover: string[];
    details: string[];
    contactUsHolder: string;
    contactUs: string;
    contactContent: string;
    cover: string;
    loader: string;
    heroContentContainer: string;
}

let classesStore = writable<ClassesStore>({
    menu: "menu-closed",
    menuHolder: "menu-holder-closed",
    miniCircle: Array(3).fill("shrinked"),
    border: Array(3).fill("shown"),
    borderCover: Array(3).fill("shown"),
    details: Array(3).fill("covered"),
    contactUsHolder: "",
    contactUs: "",
    contactContent: "hidden",
    cover: "",
    loader: "",
    heroContentContainer: "",
});

export default classesStore;
