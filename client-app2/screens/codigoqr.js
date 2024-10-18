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
    
    // Emitir el evento al servidor
    socket.emit("qrScanned");
    console.log("Evento qrScanned emitido");

    // Redirigir inmediatamente a la pantalla del formulario
    console.log("Redirigiendo a formulario...");
    router.navigateTo("/formulario");
  });
  
}