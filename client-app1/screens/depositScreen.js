import { router, socket } from "../routes.js";

export default function renderScreen5() {
  const app = document.getElementById("app");
  app.innerHTML = `
       <header class="navbar">
        <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
    </header>
    <div class="page-container">
      <div class="body-content">
        <p class="headline">Deposita tu producto</p>
        <p class="paragraph-info">Deposita tu plástico dentro de nuestro recipiente para ser parte del cambio.</p>
        <div class="image-container">
          <img src="images/papelera.webp" alt="Recycle bin">
        </div>
        <button id="simular2">Simular</button>
      </div>
    </div>
    `;

    


  

  socket.on("depositado", () => {
    console.log("Evento 'depositado' recibido");
    router.navigateTo("/pCompleted");
    alert("Producto depositado correctamente");
  });
}

