document.addEventListener("DOMContentLoaded", () => {
  const experienceSection = document.querySelector(".experience");
  const expBoxes = document.querySelectorAll(".exp-box");

  const observerOptions = {
    root: null, // obserwuje viewport
    threshold: 0.1, // uruchamia, gdy co najmniej 10% elementu jest widoczne
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Dodaj klasę uruchamiającą animację
        expBoxes.forEach((box, index) => {
          box.style.animationDelay = `${index * 1}s`;
          box.classList.add("animate");
        });
        observer.unobserve(entry.target); // przestań obserwować sekcję
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  if (experienceSection) {
    observer.observe(experienceSection);
  }
});
