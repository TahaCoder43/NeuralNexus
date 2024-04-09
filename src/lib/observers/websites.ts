let websiteObserver: IntersectionObserver;

function observeWebsite(website: HTMLElement) {
    if (websiteObserver === undefined) {
        websiteObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    let website = entry.target;
                    if (entry.isIntersecting) {
                        website.classList.add("shown");
                    } else {
                        website.classList.remove("shown");
                    }
                });
            },
            { threshold: 0.6 },
        );
    }
    websiteObserver.observe(website);
}

export default observeWebsite;
