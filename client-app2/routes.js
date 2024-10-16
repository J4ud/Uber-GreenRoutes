import renderCodigoQR from "./screens/codigoqr.js";  // Pantalla de escaneo de QR
import renderFormulario from "./screens/formulario.js";  // Pantalla de formulario
import renderConfirmacionCreditos from "./screens/confirmacioncreditos.js";  // Pantalla de confirmación de créditos
import renderReciclaje from "./screens/renderReciclaje.js";  // Nueva pantalla de reciclaje

import socket from "./socket.js";  // Importa el socket
import Router from "vanilla-router";

const router = new Router({
  mode: "hash",
  page404: (path) => {
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
  },
})

// Función para limpiar el contenido de la pantalla actual
function clearScripts() {
  document.getElementById("app").innerHTML = ""
}

// Definición de rutas
router.add("/", async () => {
  clearScripts()
  renderCodigoQR()  // Pantalla principal que muestra el código QR
});

router.add("/formulario", async () => {
  clearScripts();
  renderFormulario();  // Muestra el formulario
});

router.add("/confirmacionCreditos", async () => {
  clearScripts();
  renderConfirmacionCreditos();  // Pantalla de confirmación de créditos
});

router.add("/reciclaje", async () => {
  clearScripts();
  renderReciclaje();  // Pantalla de reciclaje
});

// Escuchar eventos del servidor
socket.on("creditsSent", (data) => {
  router.navigateTo("/confirmacionCreditos");  // Navega a la pantalla de confirmación de créditos
});

// Aquí puedes añadir el evento que desencadene la pantalla de reciclaje
socket.on("recycleProcess", () => {
  router.navigateTo("/reciclaje");  // Navega a la pantalla de reciclaje
});

router.check().addUriListener();

// Listen for popstate event to handle browser navigation
window.addEventListener("popstate", () => {
  router.check();
});

document.addEventListener("DOMContentLoaded", () => {
  router.check();
});

export { router, socket };
