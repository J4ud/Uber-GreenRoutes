const users = require("../db/entities/users");
const { getIO } = require("../socket");

const getUsers = async (req, res) => {
  try {
    const usersResponse = await users.getAllUsers();
    res.status(200).json(usersResponse);
    /*
    getIO().emit("event1", "message or object"); // if you want emmit an event from endpoint controller
    */
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAllUsers = async () => {
  try {
    const { data, error } = await supabase.from("users").select("*");
    if (error) {
      throw error;
    }
    return data;
  } catch (err) {
    console.error("Error al obtener los usuarios:", err);
    throw err;
  }
};




const createUsers = async (req, res) => {
  try {
    const userData = req.body; // Datos enviados desde el cliente
    const result = await users.createUser(userData); // Llama a la lógica de negocio

    if (result instanceof Error) {
      res.status(400).json({ error: result.message });
    } else {
      res.status(201).json({ message: "Usuario creado exitosamente", data: result });
    }
  } catch (error) {
    console.error("Error al procesar el usuario:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await users.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const { id } = req.params;

    const userCreated = await users.updateUser(id, { name, email });
    res.status(200).json(userCreated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userCreated = await users.deleteUser(id);
    res.status(200).json(userCreated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getUsers,
  createUsers,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers
};