const { SerialPort, ReadlineParser } = require("serialport");
const { getIO } = require("./socket"); // Importar el método getIO para acceder a io

SerialPort.list().then((ports) => {
//   console.log("ports", ports); // this is for list all available devices connected
}); 

// create a port to listen and write
const port = new SerialPort({
  path: "COM5",
  baudRate: 9600,
});

// Create a parser
const parser = new ReadlineParser({ delimiter: "\r\n" }); // apply the parser to our port
port.pipe(parser);

// --------------- SERIAL LISTENERS ---------------------

parser.on("data", (data) => {
  console.log("Dato recibido desde Arduino:", data);

  // Si el Arduino envía "DEPOSITADO", emitir el evento
  if (data.trim() === "DEPOSITADO") {
    try {
      const io = getIO(); // Obtener la instancia de io
      io.emit("depositado"); // Emitir el evento a todos los clientes conectados
      // rs
    } catch (error) {
      console.error("Error al emitir el evento 'depositado':", error.message);
    }
  }
});

port.on("error", (err) => {
  console.error("Error en el puerto serial:", err.message);
});
// -------------- SERIAL WRITES EXAMPLES -----------------

const writeSomethingExample = () => {
  // send a message to arduino
  port.write("ON\n", (err) => {
    if (err) {
      console.log("Error on write", err.message);
    }
    return true;
  });
};