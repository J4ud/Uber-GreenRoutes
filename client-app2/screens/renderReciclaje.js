import { socket } from "../routes.js";

export default function renderReciclaje() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <h1>Finaliza tu proceso de reciclaje</h1>
      <p>Para continuar, debes finalizar el proceso de reciclaje.</p>
  `;
}