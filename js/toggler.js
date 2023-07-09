window.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var mobileMenu = document.querySelector(".mobile-menu");
  var buttons = document.querySelectorAll(".colorBtn");
  var logoImgs = document.querySelectorAll("img[alt='logo']");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (body.style.backgroundColor === "var(--cor1)") {
        body.style.backgroundColor = "var(--cor2)";
        body.style.color = "var(--cor1)";
        mobileMenu.style.backgroundColor = "var(--cor2)";
        mobileMenu.style.color = "var(--cor1)";

        logoImgs.forEach(function (logoImg) {
          logoImg.src = "img/whiteLogo.svg";
        });
        button.classList.remove("active");
      } else {
        body.style.backgroundColor = "var(--cor1)";
        body.style.color = "var(--cor2)";
        mobileMenu.style.backgroundColor = "var(--cor1)";
        mobileMenu.style.color = "var(--cor2)";
        logoImgs.forEach(function (logoImg) {
          logoImg.src = "img/blackLogo.svg";
        });
        button.classList.add("active");
      }
    });
  });
});
