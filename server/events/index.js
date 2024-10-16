const { Eventsclient2 } = require("./Eventsclient2")
const { ClientEvents } = require("./Client1Events")
const { IAEvents } = require("./IAEvents")
const { serverEvents } = require("./ServerEvents")

const handleEvents = (socket, io) => {
  Eventsclient2(socket, io)
  //Eventsclient1(socket, io)
  ClientEvents(socket, io)
  serverEvents(socket, io)
  IAEvents(socket, io)
}

module.exports = {handleEvents};