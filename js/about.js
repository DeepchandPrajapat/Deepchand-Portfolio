const aboutSection = document.getElementById("about");

if (aboutSection) {

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.2,
        }

    );

    aboutSection
        .querySelectorAll(".about-heading,.about-text,.about-photo")
        .forEach((element) => {

            observer.observe(element);

        });

}