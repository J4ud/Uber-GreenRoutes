import { router, socket } from "../routes.js";

export default function renderAwait() {
  const app = document.getElementById("app");
  app.innerHTML = `
<<<<<<< HEAD
        <div class="container">
          <div class="content">
            <p class="title">¡Completa el formulario en tu telefono!</p>
          </div>
        </div>
=======
    <header class="navbar">
     <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
    </header>
    <div class="await-screen">
      <div class="await-content">
        <p class="await-title">Completa el formulario en tu teléfono</p>
      </div>
      <img src="images/loading-screen.webp" alt="Background" class="await-background">
    </div>

>>>>>>> develop-Jaud
    `;

  // Escuchar el evento 'dataSaved' para cambiar a la pantalla de cámara
  socket.on("dataSaved", () => {
    console.log("Datos del formulario guardados. Cambiando a pantalla de cámara...");
    router.navigateTo("/cameraScreen"); // Cambia a la pantalla de cámara
  });
}