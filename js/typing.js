      // Typing Roles

      const roles = ["AI/ML ENGINEER", "FULL STACK DEVELOPER"];

      const roleElement = document.getElementById("typing-role");

      let roleIndex = 0;
      let charIndex = 0;
      let deleting = false;

      function typeRole() {
        const current = roles[roleIndex];

        if (!deleting) {
          roleElement.textContent = current.substring(0, charIndex + 1);
          charIndex++;

          if (charIndex === current.length) {
            deleting = true;
            setTimeout(typeRole, 1500);
            return;
          }
        } else {
          roleElement.textContent = current.substring(0, charIndex - 1);
          charIndex--;

          if (charIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
          }
        }

        setTimeout(typeRole, deleting ? 45 : 90);
      }

      typeRole();