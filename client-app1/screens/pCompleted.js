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

  // Emitir un evento cuando se renderiza la pantalla
  socket.emit("pCompleted", { message: "El proceso ha sido completado" });

      
      
    

  
    





  };


 
  

  
