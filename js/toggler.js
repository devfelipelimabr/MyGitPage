window.addEventListener("DOMContentLoaded", function () {
  var body = document.querySelector("body");
  var button = document.querySelector(".colorBtn");

  button.addEventListener("click", function () {
    if (body.style.backgroundColor === "var(--cor1)") {
      body.style.backgroundColor = "var(--cor2)";
      body.style.color = "var(--cor1)";
      button.classList.remove("active");
    } else {
      body.style.backgroundColor = "var(--cor1)";
      body.style.color = "var(--cor2)";
      button.classList.add("active");
    }
  });
});
