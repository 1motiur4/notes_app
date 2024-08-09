// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById("mobile-menu");

  const profileButton = document.getElementById("user-menu-button");
  const userMenu = document.getElementById("user-menu");

  menuButton.addEventListener("click", function () {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("hidden");
  });

  profileButton.addEventListener("click", function () {
    userMenu.classList.toggle("hidden");
  });
});
