document.addEventListener("DOMContentLoaded", function () {
  function includeHTML(callback) {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4) {
            if (this.status == 200) {
              elmnt.innerHTML = this.responseText;
            }
            if (this.status == 404) {
              elmnt.innerHTML = "Page not found.";
            }
            elmnt.removeAttribute("w3-include-html");
            includeHTML(callback);
          }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
      }
    }
    if (callback) callback();
  }

  // Wywołanie includeHTML i Swipera
  includeHTML(() => {
    if (typeof initializeCertSwiper === "function") {
      initializeCertSwiper();
    }

    if (typeof initializeServices === "function") {
      initializeServices();
    }

    if (typeof initializeSkills === "function") {
      initializeSkills();
    }

    if (typeof initializeHeader === "function") {
      initializeHeader();
    }
  });
});
