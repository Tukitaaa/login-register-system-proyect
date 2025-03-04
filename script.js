document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const loginOverlayButton = document.getElementById("loginOverlay");

  // Cambiar el texto del botón y el estado de los formularios
  loginOverlayButton.addEventListener("click", () => {
    if (container.classList.contains("show-login")) {
      container.classList.remove("show-login");
      loginOverlayButton.textContent = "Login"; // Cambiar a "Login" cuando estamos en el formulario de registro
    } else {
      container.classList.add("show-login");
      loginOverlayButton.textContent = "Register"; // Cambiar a "Register" cuando estamos en el formulario de login
    }
  });
});
