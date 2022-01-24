const openBtn = document.querySelector("#open-btn");
const closeBtn = document.querySelector("#close-btn");
const navigation = document.querySelector(".nav-mobile");
closeBtn.style.opacity = "0";
const openMenu = () => {
  navigation.classList.add("is-open");
  openBtn.style.display = "none";
  closeBtn.style.opacity = "1";
};
const closeMenu = () => {
  navigation.classList.remove("is-open");
  openBtn.style.display = "block";
  closeBtn.style.opacity = "0";
};
closeBtn.addEventListener("click", closeMenu);
openBtn.addEventListener("click", openMenu);
