let topicalsObserver: IntersectionObserver;

function observeTopicals(topicals: HTMLElement) {
    if (topicalsObserver === undefined) {
        topicalsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let topicals = entry.target;
                if (entry.isIntersecting) {
                    topicals.classList.remove("hidden");
                }
            });
        });
    }
    topicalsObserver.observe(topicals);
}

export default observeTopicals;
