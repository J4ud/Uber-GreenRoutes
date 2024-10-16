const db = require("../db");
const submitUsernameHandler = (socket, db, io, data) => {
    const { username } = data;
  
    // Guardar el nombre de usuario en la base de datos
    db.saveUser(username)
      .then(() => {
        socket.emit("usernameSaved", { message: "Nombre de usuario guardado exitosamente" });
  
        // Emitimos el evento "showCameraScreen" al Cliente 1
        io.to('cliente1-room').emit("showCameraScreen");
      })
      .catch((error) => {
        socket.emit("error", { message: "Error al guardar el nombre de usuario", error });
      });
  };
  
module.exports = { submitUsernameHandler };
