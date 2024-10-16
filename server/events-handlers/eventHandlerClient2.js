const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");


const qrScannedHandler = (socket, db, io) => {
  console.log("Evento qrScanned recibido en el servidor");
  // Emitimos de vuelta el evento 'qrScannedSuccess' al cliente
  socket.emit("qrScannedSuccess");
};

// Manejador del evento para guardar el nombre de usuario
const submitUsernameHandler = (socket, db, io, data) => {
  const { username } = data;

  // Guardar el nombre de usuario en la base de datos
  db.saveUser(username)
    .then(() => {
      socket.emit("usernameSaved", { message: "Nombre de usuario guardado exitosamente" });

      // Emitimos el evento "showCameraScreen" al Cliente 1 para mostrar la pantalla de la cámara
      io.to('cliente1-room').emit("showCameraScreen");

      // Ahora procesamos los créditos y notificamos al Cliente 2
      processCredits(socket, io);
    })
    .catch((error) => {
      socket.emit("error", { message: "Error al guardar el nombre de usuario", error });
    });
};

// Manejador para el evento de envío de créditos
const sendCreditsHandler = (socket, io, credits) => {
  // Emitir evento para notificar que los créditos han sido enviados al cliente 2
  io.to('cliente2-room').emit("creditsSent", { credits });

  // Emitir evento para redirigir al cliente 2 a la pantalla de confirmación de créditos
  io.to('cliente2-room').emit("confirmacionCreditos", { message: "Créditos confirmados" });

  // Opción adicional: puedes emitir un evento para notificar al cliente 1, si es necesario
  io.to('cliente1-room').emit("creditsConfirmed", { message: "Créditos procesados" });
};

// Procesar los créditos, llamado cuando se guarda el nombre de usuario
function processCredits(socket, io) {
  const credits = 100; // Ejemplo de cantidad de créditos
  sendCreditsHandler(socket, io, credits); // Envía los créditos al cliente 2
}

module.exports = {
  qrScannedHandler,
  submitUsernameHandler,
  sendCreditsHandler,
  processCredits

};
