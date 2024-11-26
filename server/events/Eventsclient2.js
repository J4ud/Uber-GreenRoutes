const db = require("../db/entities/users");
const { qrScanned, submitForm, dataSaved,    // Añadido el manejador de reciclaje
} = require("../events-handlers/eventHandlerClient2");

const Eventsclient2 = (socket, io) => {
  
  // socket.on("qrScanned", () => {
    socket.on("qrScanned", () => {
      qrScanned(socket, db, io); // Llama a qrScanned sin formData
      console.log("Evento qrScanned recibido en el servidor");
    });
     console.log("Evento qrScanned recibido en el servidor");

    socket.on("submitForm", (formData) => {
    submitForm(socket, db, io, formData); // Pasa formData cuando se emite el evento
    });

    socket.on('client2form', (data) => {
  // Actualiza la pantalla de Client 2 con la data del evento
  // Por ejemplo, cambia la pantalla a una nueva vista o actualiza el contenido
  console.log('Evento client2form recibido en Client 2:', data);
  // ... Tu lógica para actualizar la pantalla de Client 2 ...
});
  
socket.on("dataSaved", dataSaved(socket, db, io));

socket.on('pCompleted', (data) => {
  // Actualiza la pantalla de Client 2 con la data del evento
  // Por ejemplo, cambia la pantalla a una nueva vista o actualiza el contenido
  console.log('pCompleted recibido en Client 2:', data);
  // ... Tu lógica para actualizar la pantalla de Client 2 ...
  
  // // Manejador para el evento "creditsSent" para redirigir a la pantalla de confirmación de créditos
  // socket.on("creditsSent", () => {
  //   io.to('cliente2-room').emit("confirmacionCreditos");
  // });

  // // Manejador para el evento "finalizaReciclaje" que redirige a la pantalla de reciclaje
  // socket.on("finalizaReciclaje", () => {
  //   completeRecycleProcessHandler(socket, db, io);  // Llama al manejador para finalizar el reciclaje
//   });
})};




module.exports = { Eventsclient2 };