import { router, socket } from "../routes.js";


export default function renderScreen2() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
            <p class="title">Tu código está listo para usar en tu próximo viaje.</p>
            <div class="qr-code">
              <img src="qr-code.png" alt="QR code">
            </div>
            <p class="description">El reciclaje tiene sus beneficios, y este código es la prueba. Canjéalo para aplicar tu cash y viajar sabiendo que hiciste la diferencia.</p>
            <button id="simular">Simular</button>
            
          </div>
        </div>
    `;

    


  document.getElementById("simular").addEventListener("click", () => {
    socket.emit("client2form");
    router.navigateTo("/await");
    
  });

  
}
