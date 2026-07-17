// Scroll-reveal for Experience cards (and any future .exp-card elements)
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.exp-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const index = Array.from(cards).indexOf(el);
          setTimeout(() => {
            el.classList.add('show');
          }, index * 120); // slight stagger between cards
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));
});

