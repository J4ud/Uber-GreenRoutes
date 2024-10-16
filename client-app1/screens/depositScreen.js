import { router, socket } from "../routes.js";

export default function renderScreen5() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
            <div class="content">
             <p class="title">Deposita tu producto</p>
             <p class="description">Deposita tu plástico dentro de nuestro recipiente para ser parte del cambio</p>
        <div class="illustration">
          <img src="images/recycle-bin.svg" alt="Recycle bin">
        </div>
        <button id="simular2">Simular</button>
      </div>
    </div>
    `;

    


  document.getElementById("simular2").addEventListener("click", () => {
    socket.emit("depositado");
    router.navigateTo("/pCompleted");
  });

  
}
