(function () {
  emailjs.init({
    publicKey: "WVRmbCav6rYYoe6eI",
  });
})();

function sendMail(event) {
  event.preventDefault(); // Zapobiega przeładowaniu strony po kliknięciu przycisku.

  const parms = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  // Walidacja danych
  if (!parms.name || !parms.email || !parms.subject || !parms.message) {
    alert("Proszę wypełnić wszystkie pola formularza.");
    return;
  }
  emailjs
    .send("service_vohcmkk", "template_l7eva98", parms)
    .then(() => {
      alert("Email został pomyślnie wysłany!");
      // Opcjonalnie reset formularza
      document.querySelector(".contact__form").reset();
    })
    .catch((error) => {
      console.error("Błąd podczas wysyłania e-maila:", error);
      alert("Wystąpił problem z wysłaniem e-maila. Spróbuj ponownie.");
    });
}
