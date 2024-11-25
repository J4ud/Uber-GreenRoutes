const db = require("../db");
const { save } = require("../db");

// Manejador para el evento "qrScanned"

const qrScanned = (socket, db, io) => {
  console.log("Evento qrScanned recibido en el servidor");
  // Lógica adicional para manejar el escaneo del QR
};

// Manejador para el envío del formulario
const submitForm = (socket, io, formData) => {
  console.log("Datos recibidos en submitForm:", formData);
  save(formData, (error) => {
    if (error) {
      console.error("Error guardando datos:", error);
      socket.emit("formDataError", { error: "Error guardando datos" });
    } else {
      console.log("Datos guardados con éxito");
      socket.emit("formDataSaved");
    }
  });
};


// Manejador para el evento de envío de créditos
exports.sendCreditsHandler = (socket, io, credits) => {
  console.log("Enviando créditos:", credits);
  
  // Emitir evento para notificar que los créditos han sido enviados al cliente 2
  io.to('cliente2-room').emit("creditsSent", { credits });

  // Emitir evento para redirigir al cliente 2 a la pantalla de confirmación de créditos
  io.to('cliente2-room').emit("confirmacionCreditos", { message: "Créditos confirmados" });

  // Opción adicional: emitir un evento para notificar al cliente 1, si es necesario
  io.to('cliente1-room').emit("creditsConfirmed", { message: "Créditos procesados" });
};

// Procesar los créditos, llamado cuando se guarda el nombre de usuario
exports.processCredits = (socket, io) => {
  const credits = 100; // Ejemplo de cantidad de créditos
  exports.sendCreditsHandler(socket, io, credits); // Envía los créditos al cliente 2
};

const dataSaved= (socket, db, io) => {
  return (data) => {
    io.emit("dataSaved", { message: "formulario completado" });
  };
};

module.exports = {
  qrScanned,
  submitForm,
  dataSaved
};