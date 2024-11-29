<<<<<<< HEAD
const { ClientEvents } = require("./Client1Events")
=======
// const { ClientEvents } = require("./Client1Events")
>>>>>>> develop-Jaud
const { IAEvents } = require("./IAEvents")
const { serverEvents } = require("./ServerEvents")
const { Eventsclient2 } = require("./Eventsclient2")
const { ClientEvents } = require("./Client1Events")


const handleEvents = (socket, io) => {
  ClientEvents(socket, io)
  serverEvents(socket, io)
  IAEvents(socket, io)
  Eventsclient2(socket, io)
 
  
  
}
<<<<<<< HEAD
 
module.exports = {handleEvents};
=======

module.exports = { handleEvents }
>>>>>>> develop-Jaud
