const socket = io("http://localhost:5050", { path: "/real-time" }); // Update this to your server URL

// Conexión exitosa
socket.on("connect", () => {
  console.log("Conectado al servidor de socket.");
});

// Escuchar evento qrScannedSuccess
socket.on("qrScannedSuccess", () => {
  console.log("Evento qrScannedSuccess recibido. Redirigiendo a formulario...");
  router.navigateTo("/formulario"); // Redirigir a la pantalla del formulario
});

// Escuchar evento para guardar el nombre de usuario
socket.on("usernameSaved", (data) => {
  console.log(data.message);
});

// Escuchar evento para confirmar créditos
socket.on("confirmacionCreditos", (data) => {
  console.log(data.message);
  // Aquí puedes manejar la redirección a la pantalla de confirmación si es necesario
});

export default socket;
