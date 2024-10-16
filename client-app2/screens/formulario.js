import { router,socket } from "../routes.js";


export default function renderFormulario() {
  const app = document.getElementById("app");
  app.innerHTML = `
      <h1>Pantalla: Formulario de Usuario</h1>
      <form id="qrForm">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>
        
        <button type="submit">Enviar</button>
      </form>
    `;

  const qrForm = document.getElementById("qrForm");
  qrForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const username = document.getElementById("username").value;

    // Emitimos un evento al servidor con el nombre de usuario
    socket.emit("submitUsername", { username });
  });

  // Escuchar cuando los datos del usuario han sido guardados
  socket.on("usernameSaved", () => {
    router.navigateTo("/reciclaje");
  });
}
