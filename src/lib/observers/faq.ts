let faqObserver: IntersectionObserver;

function observeFAQ(faq: HTMLElement) {
    if (faqObserver === undefined) {
        faqObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                let faq = entry.target;
                if (entry.isIntersecting) {
                    faq.classList.add("shown");
                    faq.classList.remove("hidden");
                } else {
                    faq.classList.remove("shown");
                    faq.classList.add("hidden");
                }
            });
        });
    }
    faqObserver.observe(faq);
}

export default observeFAQ;
