// View more/less functionality
document.addEventListener("DOMContentLoaded", function () {
  const viewMoreLinks = document.querySelectorAll(".js-view-more-link");

  viewMoreLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("data-target");
      const targetContent = document.getElementById(targetId);

      if (targetContent.hidden) {
        targetContent.hidden = false;
        this.textContent = this.getAttribute("data-less-text") || "View less";
      } else {
        targetContent.hidden = true;
        this.textContent = this.getAttribute("data-more-text") || "View more";
      }
    });
  });
});