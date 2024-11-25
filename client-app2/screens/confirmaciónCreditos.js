import { router,socket } from "../routes.js";

export default function renderConfirmacionCreditos() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Confirmación de Créditos</h1>
        <p>¡Felicidades! Has recibido tus créditos.</p>
        <div id="creditosContainer"></div>
        <button id="finalizeButton">Finalizar</button>
    `;

  // Escuchar el evento del servidor para recibir los créditos.
  socket.on("creditosRecibidos", (data) => {
    const creditosContainer = document.getElementById("creditosContainer");
    // Mostrar los créditos recibidos.
    creditosContainer.innerHTML = `<p>Has recibido ${data.creditos} créditos.</p>`;
  });

  

  const finalizeButton = document.getElementById("finalizeButton");
  finalizeButton.addEventListener("click", () => {
    // En lugar de redirigir, mostramos un mensaje de agradecimiento
    alert("Proceso finalizado. Gracias por reciclar.");
 
  });
}