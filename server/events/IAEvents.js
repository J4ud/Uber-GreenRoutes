const { ClientEvents } = require("./Client1Events")
const { IAEvents } = require("./IAEvents")
const { serverEvents } = require("./ServerEvents")

const handleEvents = (socket, io) => {
  ClientEvents(socket, io)
  serverEvents(socket, io)
  IAEvents(socket, io)
}

module.exports = { handleEvents }
