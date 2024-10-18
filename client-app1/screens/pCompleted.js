import { router, socket } from "../routes.js";

export default function renderScreen6() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <div class="container">
          <div class="content">
             <p class="title">¡Proceso Completado!</p>
            
          
          
           
          </div>
        </div>
    `;

    socket.on("connect", () => {
      console.log("Socket conectado:", socket.id);
  });


 
  
}
  
