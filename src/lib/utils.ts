export function getElementIndex(element: Element): number {
    let siblings = element.parentElement?.children as HTMLCollection;
    return Array.from(siblings).indexOf(element);
}
