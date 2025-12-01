// View more/less functionality
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreLinks = document.querySelectorAll(".js-view-more-link");

  viewMoreLinks.forEach(function (link) {
    const toggleContent = function (e) {
      e.preventDefault();

      const targetId = link.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent) {
        const isHidden = targetContent.hasAttribute("hidden");

        if (isHidden) {
          targetContent.removeAttribute("hidden");
          link.textContent = link.getAttribute("data-less-text") || "View less";
          link.setAttribute("aria-expanded", "true");
        } else {
          targetContent.setAttribute("hidden", "");
          link.textContent = link.getAttribute("data-more-text") || "View more";
          link.setAttribute("aria-expanded", "false");
        }
      }
    };

    link.addEventListener("click", toggleContent);

    link.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        toggleContent(e);
      }
    });
  });
});
