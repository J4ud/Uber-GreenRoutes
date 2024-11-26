import { router, socket } from "../routes.js";

export default function renderFormulario() {
  const app = document.getElementById("app");
  app.innerHTML = `
   <header class="navbar">
    <img src="images/frame1.webp" alt="Logo Uber" class="navbar-logo">
</header>
<h1>¡Regístrate y Comienza a Reciclar!</h1>
<form id="dataForm">
    <p>Por favor ingresa el nombre de usuario afiliado a tu aplicación de Uber</p>

    <!-- Etiqueta y campo para el nombre de usuario -->
    <label for="dataInput" class="form-label">Nombre de Usuario</label>
    <input type="text" id="dataInput" placeholder="Ingresa tu nombre de usuario" required />

    <!-- Etiqueta y campo para el número de celular -->
    <label for="phoneInput" class="form-label">correo electronico</label>
    <input type="tel" id="phoneInput" placeholder="Ingresa tu correo electronico" required />
    
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
    router.navigateTo("/renderReciclaje");
  });
}