import { router, socket } from "../routes.js";

export default function renderScreen3() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
             <p class="title">¡Asegúrate de que tu producto esté dentro del cuadro!</p>
            <div class="qr-code">
              <img src="qr-code.png" alt="QR code">
            </div>
            <p class="description">El reciclaje tiene sus beneficios, y este código es la prueba. Canjéalo para aplicar tu cash y viajar sabiendo que hiciste la diferencia.</p>
            <button id="simular">Simular</button>
            <button id="pl-recog">Plastico Reconocido</button>
          </div>
        </div>
    `;

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
  });


 
    document.getElementById("pl-recog").addEventListener("click", () => {
        socket.emit("turnCamera");
      });
    
  }
