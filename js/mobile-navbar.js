(function () {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');
    let open = false;

    function setOpen(state) {
      open = state;
      btn.setAttribute('aria-expanded', String(open));
      if (open) {
        menu.classList.remove('scale-y-0', 'opacity-0');
        menu.classList.add('scale-y-100', 'opacity-100');
        bar1.style.transform = 'translateY(7px) rotate(45deg)';
        bar2.style.opacity = '0';
        bar3.style.transform = 'translateY(-7px) rotate(-45deg)';
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('scale-y-0', 'opacity-0');
        menu.classList.remove('scale-y-100', 'opacity-100');
        bar1.style.transform = '';
        bar2.style.opacity = '1';
        bar3.style.transform = '';
        document.body.style.overflow = '';
      }
    }

    btn.addEventListener('click', () => setOpen(!open));

    document.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && open) setOpen(false);
    });
  })();