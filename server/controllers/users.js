const db = require("../db");
const { getIO } = require("../socket");

// Función para obtener usuarios (ejemplo)
const getUsers = async (req, res) => {
  try {
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Función para crear usuarios (ejemplo)
const createUsers = async (req, res) => {
  try {
    const { user } = req.body;
    db.users.push(user);
    res.status(200).json(db.users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Nueva función para enviar créditos
const sendCredits = async (req, res) => {
  try {
    const { credits } = req.body;  // Suponemos que la cantidad de créditos viene en el cuerpo de la solicitud
    const io = getIO();  // Obtenemos el socket IO para emitir eventos

    // Emitimos el evento "creditsSent" al cliente 2
    io.to('cliente2-room').emit("creditsSent", { credits });

    res.status(200).json({ message: `Se enviaron ${credits} créditos` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsers, createUsers, sendCredits };