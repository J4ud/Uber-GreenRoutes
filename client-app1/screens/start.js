import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  app.innerHTML = `
  <header class="navbar">
      <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
    </header>
    <div class="main-content">
      <div class="content-left">
        <div class="infotext">
          <h2>Gana dinero reciclando</h2>
          <p>Por cada botella que depositas, acumulas saldo que puedes usar en la app de Uber.</p>
        </div>
      </div>
      <div class="content-right">
        <div class="image-container">
          <img src="images/uber.webp" alt="Reciclaje" class="main-image">
          <button id="goToScreen2" class="button">Recicla!</button>
          </div>
      </div>
    </div>
  `;

  document.getElementById("goToScreen2").addEventListener("click", () => {
    router.navigateTo("/qrScreen");
  });
}

