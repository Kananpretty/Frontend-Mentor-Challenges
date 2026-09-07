const header = document.querySelector(".page-header");

const setHeaderHeight = () => {
  document.documentElement.style.setProperty(
    "--header-height",
    `${header.offsetHeight}px`,
  );
};

setHeaderHeight();

window.addEventListener("resize", setHeaderHeight);

const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector("#menu-icon");

menuButton.addEventListener("click", () => {
  const pageMenu = document.querySelector(".page-menu");
  const overlay = document.querySelector(".overlay");
  pageMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  const isOpen = pageMenu.classList.contains("active");

  menuIcon.src = isOpen
    ? "./assets/images/icon-close.svg"
    : "./assets/images/icon-menu.svg";

  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});
