var titles = document.querySelectorAll(".service_title");
var service_descriptions = document.querySelectorAll(".service_des");
var icons = document.querySelectorAll(".ri-add-fill");
var Headings = document.querySelectorAll(".service_title h4");

titles.forEach((title, index) => {
  title.addEventListener("click", () => {
    var isActive = service_descriptions[index].classList.contains("ActiveDesc");

    service_descriptions.forEach((desc) => {
      desc.classList.remove("ActiveDesc");
    });
    icons.forEach((icon) => {
      icon.classList.remove("ri-subtract-line");
    });
    Headings.forEach((Heading) => {
      Heading.classList.remove("ActiveHeading");
    });
    if (!isActive) {
      service_descriptions[index].classList.add("ActiveDesc");
      icons[index].classList.toggle("ri-subtract-line");
      Headings[index].classList.toggle("ActiveHeading");
    }
  });
});
