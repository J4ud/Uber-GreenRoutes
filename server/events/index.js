// const { ClientEvents } = require("./Client1Events")
const { IAEvents } = require("./IAEvents")
const { serverEvents } = require("./ServerEvents")
const { Eventsclient2 } = require("./Eventsclient2")


const handleEvents = (socket, io) => {
  // ClientEvents(socket, io)
  serverEvents(socket, io)
  IAEvents(socket, io)
  Eventsclient2(socket, io)
  
  
}

module.exports = { handleEvents }