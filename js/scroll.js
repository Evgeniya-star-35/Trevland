const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const elementId = anchor.getAttribute("href").substr(1);
    console.log(elementId);
    document.getElementById(elementId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
