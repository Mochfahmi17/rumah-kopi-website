// memberikan class "active" ketika tombol hamburger di klik
const menu = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");
menu.addEventListener("click", function () {
  navbarNav.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
