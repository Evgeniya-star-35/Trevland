const [buttonUp] = document.getElementsByClassName("js-top");
console.log(buttonUp);

window.addEventListener("scroll", hideElOnScroll(buttonUp));
buttonUp.addEventListener("click", toPageTopOnClick);

function hideElOnScroll(el) {
  return function hideOnScroll(e) {
    if (pageYOffset < document.documentElement.clientHeight) {
      el.classList.add("visually-hidden");
    } else {
      el.classList.remove("visually-hidden");
    }
  };
}

function toPageTopOnClick(e) {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
