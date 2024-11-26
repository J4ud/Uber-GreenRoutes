import { router,socket } from "../routes.js";

export default function renderConfirmacionCreditos() {
  const app = document.getElementById("app");
  app.innerHTML = `
       <header class="navbar">
    <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
  </header>
  <h1>Confirmación de Créditos</h1>
  <p>¡Felicidades! Has recibido tus créditos.</p>
  <div id="creditosContainer">
    <p id="creditosDinamicos">Créditos acumulados:</p>
    <p id="creditosValue">0</p>
    
  </div>
  <p class="message">Gracias por reciclar. Puedes seguir acumulando créditos con más reciclaje.</p>
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