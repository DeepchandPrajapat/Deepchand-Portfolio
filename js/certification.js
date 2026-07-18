
  document.querySelectorAll('.cert-details-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.cert-card');
      const panel = card.querySelector('.cert-details');
      const arrow = btn.querySelector('.cert-arrow');
      const isOpen = panel.classList.contains('open');

      if (isOpen) {
        panel.style.maxHeight = '0px';
        panel.classList.remove('opacity-100');
        panel.classList.add('opacity-0');
        arrow.style.transform = 'rotate(0deg)';
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.classList.remove('opacity-0');
        panel.classList.add('opacity-100');
        arrow.style.transform = 'rotate(90deg)';
      }
      panel.classList.toggle('open');
    });
  });

  const lightbox = document.getElementById('cert-lightbox');
  const lightboxImg = document.getElementById('cert-lightbox-img');

  document.querySelectorAll('.cert-photo').forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
      lightbox.classList.add('flex');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.add('hidden');
    lightbox.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.getElementById('cert-lightbox-close').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
