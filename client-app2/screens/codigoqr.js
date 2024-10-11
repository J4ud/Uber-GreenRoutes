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
    socket.emit("qrScanned"); // Emitimos el evento cuando se presiona el botón
  }); 

  // Escuchamos el evento 'qrScannedSuccess' desde el servidor
  socket.on("qrScannedSuccess", () => {
    // Redirigimos al usuario a la pantalla del formulario
    router.navigateTo("/formulario"); 
  });
}
