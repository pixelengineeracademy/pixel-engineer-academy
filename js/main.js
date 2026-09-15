(function () {
  "use strict";
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("main-nav");
  if (!navToggle || !mainNav) return;

  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close the mobile menu if the viewport is widened back past the breakpoint
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900 && mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
})();
