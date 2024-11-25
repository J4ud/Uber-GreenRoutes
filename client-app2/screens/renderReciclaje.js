import { router, socket } from "../routes.js";

export default function renderReciclaje() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <h1>Continúa el Proceso en el Punto de Reciclaje</h1>
      <p>Tu registro ha sido completado. Ahora acércate al punto de reciclaje y continúa el proceso en la pantalla principal.</p>
  `;

  socket.on("pCompleted", () => {
    console.log("cambia de pantalla");
    router.navigateTo("/confirmacioncreditos");
  });
}