const db = require("../db");
const { startProccess, showsQR, CameraScreen, NewProduct, SendProduct, confirmProfile} = require("../events-handlers/ClientEventHandler");

const ClientEvents = (socket, io) => {
  socket.on("startProccess", startProccess(socket, db, io));
  socket.on("showsQR", showsQR(socket, db, io));
  socket.on("CameraScreen", CameraScreen(socket, db, io));
  socket.on("newProduct", NewProduct(socket, db, io));
  socket.on("sendProduct", SendProduct(socket, db, io));
  socket.on("confirmProfile", confirmProfile(socket, db, io));

};

module.exports = { ClientEvents };
