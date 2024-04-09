let bulbObserver: IntersectionObserver;

function observeBulb(bulb: HTMLElement) {
    if (bulbObserver === undefined) {
        bulbObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    let bulb = entry.target;
                    if (entry.isIntersecting) {
                        bulb.classList.add("bulb-shown");
                    } else {
                        bulb.classList.remove("bulb-shown");
                    }
                });
            },
            { threshold: 0.5 },
        );
    }
    bulbObserver.observe(bulb);
}

export default observeBulb;
