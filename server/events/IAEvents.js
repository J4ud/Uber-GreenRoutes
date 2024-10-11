const db = require("../db");

const { plasticDetected } = require("../events-handlers/IAEventHandler");

const IAEvents = (socket, io) => {
  socket.on("plasticDetected", plasticDetected(socket, db, io));
 
};

module.exports = { IAEvents };
