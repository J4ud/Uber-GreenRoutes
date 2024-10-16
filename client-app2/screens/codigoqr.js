import { router, socket } from "../routes.js";

export default function renderCodigoQR() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>Pantalla: Código QR</h1>
    <p>Haz clic en el botón para simular el escaneo del código QR.</p>
    <button id="qrButton">QR Escaneado</button>
  `;

  const qrButton = document.getElementById("qrButton");
  qrButton.addEventListener("click", () => {
    console.log("Botón de QR escaneado presionado. Emitiendo evento...");
    socket.emit("qrScanned");
    console.log("Evento qrScanned emitido");
  });

  // Escuchamos el evento 'qrScannedSuccess' desde el servidor
  socket.on("qrScannedSuccess", () => {
    console.log("Evento qrScannedSuccess recibido. Redirigiendo a formulario...");
    router.navigateTo("/formulario"); // Cambiar a la pantalla del formulario
  });
}


