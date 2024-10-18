const db = require("../db");
const { qrScanned, submitForm, formDataSaved   // Añadido el manejador de reciclaje
} = require("../events-handlers/eventHandlerClient2");

const Eventsclient2 = (socket, io) => {
  
  // socket.on("qrScanned", () => {
  socket.on("qrScanned", qrScanned(socket, db, io, formData));
  console.log("Evento qrScanned recibido en el servidor");
  socket.on("submitForm", submitForm(socket, db, io, formData));
  socket.on("formDataSaved", formDataSaved(socket, db, io));


  
  // // Manejador para el evento "creditsSent" para redirigir a la pantalla de confirmación de créditos
  // socket.on("creditsSent", () => {
  //   io.to('cliente2-room').emit("confirmacionCreditos");
  // });

  // // Manejador para el evento "finalizaReciclaje" que redirige a la pantalla de reciclaje
  // socket.on("finalizaReciclaje", () => {
  //   completeRecycleProcessHandler(socket, db, io);  // Llama al manejador para finalizar el reciclaje
//   });
};




module.exports = { Eventsclient2 };


