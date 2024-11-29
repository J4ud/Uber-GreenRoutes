const { findUserByEmail, createUser, updateUserLogged, addCreditsToLoggedUser,setAllUsersLoggedToFalse } = require("../db/entities/users");
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
  const { name, email } = req.body;

  try {
    // Verificar si el usuario ya existe
    let user = await findUserByEmail(email);

    if (!user) {
      // Crear el usuario con la columna "logged" en true
      user = await createUser({ name, email, logged: true });
    } else {
      // Actualizar "logged" a true si el usuario ya existe
      await updateUserLogged(email, true);
    }

    res.status(200).json({ message: "Usuario procesado correctamente", user });
  } catch (error) {
    console.error("Error al crear el usuario:", error.message);
    res.status(500).json({ message: "Error al procesar el usuario" });
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


const updateCredits = async (req, res) => {
  const { credits } = req.body; // Créditos a sumar

  try {
    // Llama a la función de la base de datos para actualizar los créditos
    const updatedUser = await addCreditsToLoggedUser(credits);

    if (!updatedUser) {
      return res.status(404).json({ message: "No hay usuarios activos para actualizar créditos" });
    }

    res.status(200).json({
      message: "Créditos actualizados correctamente",
      data: updatedUser,
    });
  } catch (error) {
    console.error("Error al actualizar créditos en el controlador:", error.message);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const logoutAllUsers = async (req, res) => {
  try {
    await setAllUsersLoggedToFalse();
    res.status(200).json({ message: "Todos los usuarios deslogueados correctamente" });
  } catch (error) {
    console.error("Error al desloguear usuarios:", error.message);
    res.status(500).json({ message: "Error al desloguear usuarios" });
  }
};


module.exports = {
  getUsers,
  createUsers,
  getUser,
  updateUser,
  deleteUser,
  getAllUsers,
  addCreditsToLoggedUser,
  updateCredits,
  logoutAllUsers
};