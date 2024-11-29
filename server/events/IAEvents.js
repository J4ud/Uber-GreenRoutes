<<<<<<< HEAD
const db = require("../db");
const { recognizePlastic, processPlasticData } = require("../events-handlers/IAEventHandler");
=======
const db = require("../db/entities/users");
const { plasticDetected } = require("../events-handlers/IAEventHandler");
>>>>>>> develop-Jaud

const IAEvents = (socket, io) => {
  // Evento para iniciar el reconocimiento de plástico
  socket.on("startRecognition", (data) => {
    // Aquí podrías llamar a la función que maneja el reconocimiento del plástico
    recognizePlastic(data, (result) => {
      // Emitir el resultado de reconocimiento al cliente
      socket.emit("plasticRecognized", result);
    });
  });

  // Evento para procesar los datos del plástico reconocido
  socket.on("processPlasticData", (data) => {
    processPlasticData(data, (credits) => {
      // Emitir los créditos calculados al cliente
      socket.emit("creditsCalculated", credits);
    });
  });

  // Agregar más eventos según sea necesario
  // Por ejemplo, un evento para finalizar el reconocimiento
  socket.on("finishRecognition", () => {
    socket.emit("recognitionFinished");
  });
};

module.exports = { IAEvents };
