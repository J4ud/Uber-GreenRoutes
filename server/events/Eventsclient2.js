const db = require("../db");
const { 
  qrScannedHandler, 
  submitUsernameHandler, 
  completeRecycleProcessHandler  // Añadido el manejador de reciclaje
} = require("../events-handlers/eventHandlerClient2");

const Eventsclient2 = (socket, io) => {
  // Manejador para el evento "qrScanned"
  socket.on("qrScanned",  qrScannedHandler(socket, db, io));

  // Manejador para el evento "submitUsername"
  socket.on("submitUsername", (data) => submitUsernameHandler(socket, db, io, data));

  // Manejador para el evento "creditsSent" para redirigir a la pantalla de confirmación de créditos
  socket.on("creditsSent", () => {
    io.to('cliente2-room').emit("confirmacionCreditos");
  });

  // Manejador para el evento "finalizaReciclaje" que redirige a la pantalla de reciclaje
  socket.on("finalizaReciclaje", () => {
    completeRecycleProcessHandler(socket, db, io);  // Llama al manejador para finalizar el reciclaje
  });
};

// Evento para enviar créditos
const sendCreditsHandler = (socket, io, credits) => {
  // Emitir evento para notificar que los créditos han sido enviados
  io.to('cliente2-room').emit("creditsSent", { credits });

  // Emitir evento que notifica al cliente 1
  io.to('cliente1-room').emit("acercaProducto");
};

module.exports = { Eventsclient2, sendCreditsHandler };


