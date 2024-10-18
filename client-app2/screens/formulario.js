import { router, socket } from "../routes.js";

export default function renderFormulario() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>¡Regístrate y Comienza a Reciclar!</h1>
    <form id="dataForm">
      <h3>Por favor ingresa el nombre de usuario afiliado a tu aplicación de Uber</h3>
      <input type="text" id="dataInput" placeholder="Ingresa tu nombre de usuario" required />
  
      <h3>Ingresa tu número de celular</h3>
      <input type="tel" id="phoneInput" placeholder="Ingresa tu número de celular" required />
      
      <button type="submit">Enviar</button>
    </form>
  `;

  const dataForm = document.getElementById("dataForm");

  dataForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = {
      username: document.getElementById("dataInput").value,
      phone: document.getElementById("phoneInput").value,
    };

    console.log("Enviando datos del formulario...", formData);
    socket.emit("submitForm", formData);
    socket.emit("dataSaved"); // Emitir evento para notificar que los datos han sido guardados
  });

  // Escuchar el evento 'formDataSaved' para confirmar que los datos fueron guardados
  socket.on("formDataSaved", () => {
    console.log("Datos del formulario guardados. Cambiando a pantalla de reciclaje...");
    router.navigateTo("/reciclaje");
  });
}