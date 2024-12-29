function initializeSkills() {
  const tabs = document.querySelectorAll(".tab_btn");
  const allContent = document.querySelectorAll(".skills");
  const line = document.querySelector(".line");

  // Funkcja do ustawiania szerokości i pozycji linii
  function updateLine(tab) {
    line.style.width = `${tab.offsetWidth}px`;
    line.style.left = `${tab.offsetLeft}px`;
  }

  // Inicjalizacja: ustawienie początkowej pozycji linii
  if (tabs.length > 0) {
    tabs[0].classList.add("active"); // Pierwsza zakładka aktywna domyślnie
    updateLine(tabs[0]);
    allContent[0].classList.add("active"); // Pierwsza treść aktywna domyślnie
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Dezaktywuj wszystkie zakładki i treści
      tabs.forEach((tab) => tab.classList.remove("active"));
      allContent.forEach((content) => content.classList.remove("active"));

      // Aktywuj klikniętą zakładkę i odpowiednią treść
      tab.classList.add("active");
      allContent[index].classList.add("active");

      // Aktualizuj linię
      updateLine(tab);
    });
  });

  // Obsługa zmiany rozmiaru okna, aby linia pozostała na swoim miejscu
  window.addEventListener("resize", () => {
    const activeTab = document.querySelector(".tab_btn.active");
    if (activeTab) updateLine(activeTab);
  });
}
