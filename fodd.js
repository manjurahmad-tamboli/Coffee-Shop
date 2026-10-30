document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".section");

    function activateSection(section) {
        section.classList.add("active");

        // Play video when section is activated
        const video = section.querySelector(".bg-video");
        if (video) {
            video.play();
        }

        // If there's a carousel, start rotating it
        const carousel = section.querySelector(".carousel");
        if (carousel) {
            startCarouselRotation(carousel);
        }
    }

    function checkSections() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                activateSection(section);
            }
        });
    }

    // Intersection Observer for triggering animations only once
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activateSection(entry.target);
                obs.unobserve(entry.target); // Animate only once
            }
        });
    }, {
        threshold: 0.4
    });

    sections.forEach((section) => {
        observer.observe(section);
    });

    // 🌟 Rotating Carousel Function 🌟
    function startCarouselRotation(container) {
        const cards = container.querySelectorAll('.card');
        const cardCount = cards.length;
        let angle = 0;
        const step = 360 / cardCount;

        // Position cards in a circle
        cards.forEach((card, index) => {
            const rotateAngle = step * index;
            const transform = `
                rotateY(${rotateAngle}deg)
                translateZ(300px)
            `;
            card.style.transform = transform;
        });

        // Animate the rotation
        let currentRotation = 0;
        setInterval(() => {
            currentRotation += 1;
            container.style.transform = `translateZ(-300px) rotateY(${currentRotation}deg)`;
        }, 30);
    }
});