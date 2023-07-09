window.addEventListener("DOMContentLoaded", function() {
    var yearElements = document.querySelectorAll(".year");
    var currentYear = new Date().getFullYear();
  
    yearElements.forEach(function(element) {
      var h1Element = document.createElement("h1");
      h1Element.className = "year";
      h1Element.textContent = currentYear;
      element.appendChild(h1Element);
    });
  });
  