import { router, socket } from "../routes.js";

export default function renderScreen3() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
             <p class="title">¡Asegúrate de que tu producto esté dentro del cuadro!</p>
            
          <p class="description"> Esto nos ayudará a procesar correctamente el material y asegurarte que recibas el máximo beneficio.</p>
          
            <button id="plastico">Plastico Reconocido</button>
          </div>
        </div>
    `;

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
  });


 
    document.getElementById("plastico").addEventListener("click", () => {
        socket.emit("plasticoReconocido");
        router.navigateTo("/processing");

      });
    
  }
