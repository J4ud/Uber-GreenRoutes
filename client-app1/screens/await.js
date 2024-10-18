import { router, socket } from "../routes.js";

export default function renderAwait() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
            <p class="title">¡Completa el formulario en tu telefono!</p>
          </div>
        </div>
    `;

  // Escuchar el evento 'dataSaved' para cambiar a la pantalla de cámara
  socket.on("dataSaved", () => {
    console.log("Datos del formulario guardados. Cambiando a pantalla de cámara...");
    router.navigateTo("/cameraScreen"); // Cambia a la pantalla de cámara
  });
}