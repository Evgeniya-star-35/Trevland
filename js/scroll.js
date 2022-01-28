const anchors = document.querySelectorAll('a[href*="#"]');
const [burgerBtn] = document.getElementsByClassName("js-burger");

anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target);
    const elementId = anchor.getAttribute("href").substr(1);

    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
const links = document.querySelectorAll(".nav-mobile__link");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const [menu] = document.getElementsByClassName("nav-mobile__list");
    menu.style.display = "none";
    burgerBtn.classList.remove("is-open");
  });
});
