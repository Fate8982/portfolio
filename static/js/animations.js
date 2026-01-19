// Scroll reveal for sections
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});

// Hero load animation (safe check)
window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    const heroImage = document.querySelector(".hero-image");

    if (heroText) heroText.classList.add("show");
    if (heroImage) heroImage.classList.add("show");
});
