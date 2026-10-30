document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    function checkCards() {
        const triggerBottom = window.innerHeight * 0.85; // 85% of viewport height

        cards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 200); // Each card appears 200ms after the previous one
            }
        });
    }

    // Initial check when page loads
    checkCards();

    // Check on scroll
    window.addEventListener("scroll", checkCards);

    // Flip Effect with Persistence
    cards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.classList.toggle("flipped");
        });
    });
});