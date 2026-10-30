document.addEventListener("DOMContentLoaded", function() {
    const videoSection = document.querySelector(".video-section");
    const eventsSection = document.querySelector(".events");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, {
            threshold: 0.2, // Trigger when 50% of the section is visible
        }
    );

    observer.observe(videoSection);
    observer.observe(eventsSection);
});





// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const achievementSection = document.querySelector(".achievement-section");
    const line = document.querySelector(".line");
    const coffeeBean = document.querySelector(".coffee-bean");

    // Function to check if the section is in the viewport
    const isSectionInViewport = (section) => {
        const rect = section.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };







});
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".offer-card");

    const section = document.querySelector("#offers");

    const observer = new IntersectionObserver(entries => {
        let index = 0;
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }, index * 300);
                index++;
            }
        });

    }, { threshold: 0.3 });

    cards.forEach(card => observer.observe(card));
});