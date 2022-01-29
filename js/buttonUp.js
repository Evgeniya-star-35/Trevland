const [buttonUp] = document.getElementsByClassName("js-top");
const [form] = document.getElementsByClassName("form__field");

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
const onSubmit = (e) => {
  e.preventDefault();
  e.currentTarget.reset();
};
form.addEventListener("submit", onSubmit);
