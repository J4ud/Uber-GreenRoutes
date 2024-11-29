
const socket = io("http://localhost:5050", { path: "/real-time" });

// Conexión exitosa
socket.on("connect", () => {
  console.log("Conectado al servidor de socket. ID:", socket.id);
});

// Escuchar evento qrScannedSuccess
socket.on("qrScannedSuccess", () => {
  console.log("Evento qrScannedSuccess recibido. Redirigiendo a formulario...");
});

// Escuchar evento para guardar el nombre de usuario
socket.on("usernameSaved", (data) => {
  console.log("Evento usernameSaved recibido:", data.message);
});

// Escuchar evento para confirmar que los datos del formulario fueron guardados
socket.on("formDataSaved", (data) => {
  console.log("Evento formDataSaved recibido:", data.message);
});

// Escuchar evento para confirmar créditos
socket.on("creditsSent", (data) => {
  console.log("Evento creditsSent recibido. Créditos:", data.credits);

});

// Manejar errores de conexión
socket.on("connect_error", (error) => {
  console.error("Error de conexión:", error);
});

// Manejar desconexión
socket.on("disconnect", (reason) => {
  console.log("Desconectado del servidor:", reason);
});

export default socket;