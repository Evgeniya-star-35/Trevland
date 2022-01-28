const [burgerBtn] = document.getElementsByClassName("js-burger");
const [navigation] = document.getElementsByClassName("nav-mobile__list");

const toggleMenu = (e) => {
  navigation.classList.toggle("is-open");
  burgerBtn.classList.toggle("is-open");
};

burgerBtn.addEventListener("click", toggleMenu);
