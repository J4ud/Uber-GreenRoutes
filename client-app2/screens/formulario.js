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
    <input type="text" id="phoneInput" placeholder="Ingresa tu correo electronico" required />
    
    <button type="submit">Enviar</button>
</form>
  `;
   socket.emit("client2form");
  const dataForm = document.getElementById("dataForm");

  dataForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = {
      name: document.getElementById("dataInput").value,
      email: document.getElementById("phoneInput").value,
    };
  
    try {
      const response = await fetch("http://localhost:5050/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message || "Error al guardar los datos");
      }
  
      const result = await response.json();
      console.log("Datos guardados correctamente:", result);
      socket.emit("dataSaved"); // Notifica que los datos se guardaron
      socket.emit("recycleProcess"); // Notifica que los datos se guardaron
    } catch (error) {
      console.error("Error al enviar los datos:", error.message);
      alert(`Error al guardar los datos: ${error.message}`); // Muestra un mensaje de error en el cliente
    }
  });}
