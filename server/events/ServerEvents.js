const db = require("../db");
const { waitForProduct, displayRegister, displayDeposit, displayProccessing, displayCompleted, sendCredits,} = require("../events-handlers/serverEventHandler");

const serverEvents = (socket, io) => {
  socket.on("displayRegister", displayRegister(socket, db, io));
  socket.on("displayDeposit", displayDeposit(socket, db, io));
  socket.on("waitForProduct", waitForProduct(socket, db, io));
  socket.on("showsProccessing", displayProccessing(socket, db, io));
  socket.on("displayCompleted", displayCompleted(socket, db, io));
  socket.on("sendCredits", sendCredits(socket, db, io));
  
};

module.exports = { serverEvents };
