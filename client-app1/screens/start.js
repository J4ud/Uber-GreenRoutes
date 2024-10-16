import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Gana dinero reciclando</h1>
        <p>Por cada botella que depositas, acumulas saldo que puedes usar en la app de Uber.</p>
        <button id="goToScreen2">Recicla!</button>
    `;

  document.getElementById("goToScreen2").addEventListener("click", () => {
    router.navigateTo("/screen2");
  });
}

