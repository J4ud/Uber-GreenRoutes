import { router, socket } from "../routes.js";

export default function renderScreen6() {
  const app = document.getElementById("app");
  app.innerHTML = `
         <header class="navbar">
        <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
    </header>
    <div class="page-container">
      <div class="body-content">
        <p class="headline">proceso completado</p>
        <p class="paragraph-info">El proceso de reciclaje ha concluido con éxito. Ahora podrás mirar en tu telefono la cantidad de creditos recibidos.</p>
        <div class="image-container">
          <img src="images/recycle.webp" alt="Recycle bin">
        </div>
      </div>
    </div>
    `;

  // Emitir un evento cuando se renderiza la pantalla
  socket.emit("pCompleted", { message: "El proceso ha sido completado" });
  socket.on("resetAllClients", () => {
    console.log("Evento 'resetAllClients' recibido. Redirigiendo a la pantalla inicial...");
    router.navigateTo("/");
  });


      
      
    

  
    





  };


 
  

  
