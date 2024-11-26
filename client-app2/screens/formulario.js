import { router, socket } from "../routes.js";



export default function renderFormulario() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <h1>¡Regístrate y Comienza a Reciclar!</h1>
    <form id="dataForm">
      <h3>Por favor ingresa el nombre de usuario afiliado a tu aplicación de Uber</h3>
      <input type="text" id="dataInput" placeholder="Ingresa tu nombre de usuario" required />
  
      <h3>Ingresa tu número de celular</h3>
      <input type="tel" id="emailInput" placeholder="Ingresa tu número de celular" required />
      
      <button type="submit">Enviar</button>
    </form>
  `;

  const dataForm = document.getElementById("dataForm");

  dataForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = {
      name: document.getElementById("dataInput").value,
      email: document.getElementById("emailInput").value,
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
        throw new Error("Error al guardar los datos");
      }
  
      const result = await response.json();
      console.log("Datos guardados correctamente:", result);
      socket.emit("dataSaved"); // Notifica que los datos se guardaron
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  });}