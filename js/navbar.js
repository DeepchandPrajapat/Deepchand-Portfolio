      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
          navbar.classList.add("border-b");
          navbar.classList.add("border-[#1E293B]");

          navbar.classList.remove("bg-[rgba(9,13,22,.6)]");

          navbar.classList.add("bg-[rgba(9,13,22,.85)]");
        } else {
          navbar.classList.remove("border-b");
          navbar.classList.remove("border-[#1E293B]");

          navbar.classList.remove("bg-[rgba(9,13,22,.85)]");

          navbar.classList.add("bg-[rgba(9,13,22,.6)]");
        }
      });