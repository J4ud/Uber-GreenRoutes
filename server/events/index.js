const { Eventsclient2 } = require("./Eventsclient2")

const handleEvents = (socket, io) => {
  Eventsclient2(socket, io)
  //Eventsclient1(socket, io)
}

module.exports = { handleEvents }
