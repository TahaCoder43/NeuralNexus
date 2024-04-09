import { writable } from "svelte/store";

interface NodesStore {
    websiteHolderSvg: SVGSVGElement | undefined;
    websiteHolderRect: SVGRectElement | undefined;
}

let nodesStore = writable<NodesStore>({
    websiteHolderSvg: undefined,
    websiteHolderRect: undefined,
});

export default nodesStore;
