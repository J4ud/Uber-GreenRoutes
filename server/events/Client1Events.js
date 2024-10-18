const db = require("../db");
const { startProccess, showsQR, CameraScreen, NewProduct, SendProduct, DepositedProduct, turnOnCamera, plasticoReconocido, client2form} = require("../events-handlers/ClientEventHandler");

const ClientEvents = (socket, io) => {
  socket.on("startProccess", startProccess(socket, db, io));
  socket.on("showsQR", showsQR(socket, db, io));
  socket.on("CameraScreen", CameraScreen(socket, db, io));
  socket.on("newProduct", NewProduct(socket, db, io));
  socket.on("sendProduct", SendProduct(socket, db, io));
  socket.on("turnCamera", turnOnCamera(socket, db, io));
  socket.on("plasticoReconocido", plasticoReconocido(socket, db, io));
  socket.on("depositado", DepositedProduct(socket, db, io));
  socket.on("client2form", client2form(socket, db, io));
  socket.on('dataSaved', (data) => {
  
    console.log('Evento client2form recibido en Client 2:', data);
    // ... Tu lógica para actualizar la pantalla de Client 2 ...
  });
    

};

module.exports = { ClientEvents };
