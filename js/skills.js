const toggleBtn = document.getElementById("toggle-skills");
const moreSkills = document.getElementById("more-skills");

if (toggleBtn && moreSkills) {
  let expanded = false;

  toggleBtn.addEventListener("click", () => {
    expanded = !expanded;

    if (expanded) {
      // Expand
      moreSkills.style.maxHeight = moreSkills.scrollHeight + "px";
      moreSkills.style.opacity = "1";
      moreSkills.style.marginTop = "2.5rem";

      toggleBtn.innerHTML = `
        <span>Show Less</span>
        <span class="arrow">↑</span>
      `;
    } else {
      // Collapse
      moreSkills.style.maxHeight = "0";
      moreSkills.style.opacity = "0";
      moreSkills.style.marginTop = "0";

      toggleBtn.innerHTML = `
        <span>Show All</span>
        <span class="arrow">→</span>
      `;
    }
  });
}