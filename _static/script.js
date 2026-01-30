document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

setTimeout(function () {
  if (!sessionStorage.getItem("ctaShown")) {
    alert("Need help with Quicken Download or Setup? Use chat support!");
    sessionStorage.setItem("ctaShown", "yes");
  }
}, 15000);
