import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Screen 1</h1>
        <p>Inicio</p>
        <button id="emitButton">Emit Event</button>
        <button id="goToScreen2">Recicla</button>
    `;

  document.getElementById("emitButton").addEventListener("click", () => {
    console.log("emited");
    socket.emit("event1", { message: "Hello from About page" });
  });

  document.getElementById("goToScreen2").addEventListener("click", () => {
    router.navigateTo("/screen2");
  });
}
