const [burgerBtn] = document.getElementsByClassName("js-burger");
const [menu] = document.getElementsByClassName("nav-mobile__list");

const toggleMenu = () => {
  menu.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-open");
};
const closeMenu = () => {
  menu.classList.remove("is-open");
  burgerBtn.classList.remove("is-open");
};
const openMenu = () => {
  menu.classList.add("is-open");
  burgerBtn.classList.add("is-open");
};
const clickMenu = (e) => {
  if ((menu.style.display = "none")) {
    menu.style.display = "";
    burgerBtn.addEventListener("click", openMenu);
    burgerBtn.addEventListener("click", closeMenu);
    burgerBtn.removeEventListener("click", openMenu);
    burgerBtn.removeEventListener("click", closeMenu);
    e.currentTarget.addEventListener("click", toggleMenu);
  }
};

const links = document.querySelectorAll(".nav-mobile__link");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menu.style.display = "none";
    menu.classList.remove("is-open");
    burgerBtn.classList.remove("is-open");
    burgerBtn.addEventListener("click", clickMenu);
  });
});

burgerBtn.addEventListener("click", toggleMenu);
