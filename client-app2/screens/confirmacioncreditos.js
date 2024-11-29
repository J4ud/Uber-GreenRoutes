import { router, socket } from "../routes.js";

export default function renderConfirmacionCreditos() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Confirmación de Créditos</h1>
        <p>¡Felicidades! Has recibido tus créditos.</p>
        <div id="creditosContainer"></div>
        <button id="finalizeButton">Finalizar</button>
    `;

  // Escuchar el evento del servidor para recibir los créditos.
   // Escuchar el evento del servidor "depositado"
  socket.on("depositado", async () => {
    console.log("Evento 'depositado' recibido. Actualizando créditos...");
    try {
      // Notificar al servidor para actualizar los créditos
      const response = await fetch("http://localhost:5050/api/users/update-credits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ credits: 100 }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Error al actualizar créditos");
      }

      const result = await response.json();
      console.log("Créditos actualizados correctamente:", result);

      // Mostrar los créditos actualizados en la interfaz
      const creditosContainer = document.getElementById("creditosContainer");
      creditosContainer.innerHTML = `<p>Se han añadido 100 créditos a tu cuenta.</p>`;
    } catch (error) {
      console.error("Error al actualizar créditos:", error.message);
      alert(`Error al actualizar créditos: ${error.message}`);
    }
  });

  const finalizeButton = document.getElementById("finalizeButton");
  finalizeButton.addEventListener("click", () => {
    alert("Proceso finalizado. Gracias por reciclar.");
  });
}