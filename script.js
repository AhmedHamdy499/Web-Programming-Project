// Smooth Scrolling (Kept)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      // Check if the target is the navbar itself to prevent errors
      const header = document.querySelector(".header");
      const headerOffset = header ? header.offsetHeight : 100;

      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Close the mobile menu on click
      const navCollapse = document.getElementById("navMenu");
      if (navCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navCollapse);
        bsCollapse.hide();
      }
    }
  });
});

// Header scroll effect (Kept)
// Removed unused 'lastScroll' variable
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > 100) {
    if (header) header.style.padding = "10px 0";
    if (header) header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    if (header) header.style.padding = "20px 0";
    if (header) header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)";
  }
  // 'lastScroll' assignment removed
});

// Parallax effect for hero (Kept)
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  const scrolled = window.pageYOffset;
  if (hero && scrolled < window.innerHeight) {
    hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
  }
});

// Fade-in animation on scroll (Kept)
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-visible");
    }
  });
}, observerOptions);

// Observe elements for fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(
    ".feature-card, .destination-card, .about-text, .about-image, .cta-content"
  );
  fadeElements.forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});
