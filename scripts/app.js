const elementMenuButton = document
  .querySelector(".nav__menu__hamburger")
  .addEventListener("click", () => {
    elementMenu.classList.remove("hide");
  });
const elementMenu = document.querySelector(".menu");
const elementMenuClose = document
  .querySelector(".menu__wrapper__close")
  .addEventListener("click", () => {
    elementMenu.classList.add("hide");
  });
