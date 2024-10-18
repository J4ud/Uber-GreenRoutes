import { router, socket } from "../routes.js";

export default function renderStart() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h1>Proceso sin empezar</h1>
        
    `;

 
}

socket.on("client2form", () => {
    router.navigateTo("/formulario"); // Cambia a la nueva pantalla
  });
