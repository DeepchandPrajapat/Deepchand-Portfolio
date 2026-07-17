document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".about-heading, .about-text, .about-photo, .exp-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;

        // Stagger only cards
        if (el.classList.contains("exp-card")) {
          const cards = [...document.querySelectorAll(".exp-card")];
          const index = cards.indexOf(el);

          setTimeout(() => {
            el.classList.add("show");
          }, index * 120);
        } else {
          el.classList.add("show");
        }

        observer.unobserve(el);
      });
    },
    { threshold: 0.2 }
  );

  revealElements.forEach((el) => observer.observe(el));
});