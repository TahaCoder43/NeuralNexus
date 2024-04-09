let scale = 1.09;

export function setupSquish(scaleArg?: number) {
    scale = scaleArg !== undefined ? scaleArg : scale;
}

// make sure the element has an appropriate transition property
export function squish(event: Event) {
    let target = event.target as HTMLElement;
    let transitionToAdd = "";
    let startIndex: number;
    let endIndex: number;
    if (target.style.transition === "") {
        transitionToAdd = "transform 0.301s cubic-bezier(0.3, 4, 0.8, 0.9)";
        startIndex = 0;
    } else {
        transitionToAdd = ", transform 0.301s cubic-bezier(0.3, 4, 0.8, 0.9)";
    }
    target.style.transition += transitionToAdd;
    target.style.transform += ` scale(${scale})`;
    setTimeout(() => {
        if (startIndex === undefined) {
            startIndex = target.style.transition.search(
                /, transform 0\.301s cubic-bezier(0\.3, 4, 0\.8, 0\.9) 0s/,
            );
            let endIndex = startIndex + 52;
            let newTransition =
                target.style.transition.slice(startIndex, endIndex) +
                target.style.transition.slice(endIndex + 1);
            target.style.transition = newTransition;
            target.style.transition += ", transform 0.301s linear";
        } else {
            target.style.transition = "transform 0.301s linear";
        }
    }, 300);
}

export function removeSquishEffects(event: Event) {
    let target = event.target as HTMLElement;
    // transformations are not accurate. transform(10px, 20px) will also be splitted, but that does not matter as scale(1.09) will still be found
    let transformations = target.style.transform.split(" ");
    let remainingTransformations = transformations.filter(
        (transformation) => transformation !== `scale(${scale})`,
    );
    target.style.transform = remainingTransformations.join(" ");
    setTimeout(() => {
        let transitions = target.style.transition.split(", ");
        let remainingTransitions = transitions.filter(
            (transition) => transition !== "transform 0.301s linear 0s",
        );
        target.style.transition = remainingTransitions.join(", ");
    }, 300);
}
