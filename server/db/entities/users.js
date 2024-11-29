// get all users    

const supabase = require("../../services/supabase")

// https://supabase.com/docs/reference/javascript/insert
const createUser = async (object) => {
  const { data, error } = await supabase
    .from("users")
    .insert([object])
    .select();
  if (error) {
    console.error(error);
    return error;
  }
  return data;
};
// ----------------------------------------------------------

const findUserByEmail = async (email) => {
  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single(); // Asegura que retorne un solo usuario

  if (error) {
    console.error("Error buscando usuario por email:", error.message);
    return null;
  }
  
  return data;
};

// ----------------------------------------------------------

const getLastUser = async () => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("id", { ascending: false }) // Ordena por ID de forma descendente
      .limit(1); // Obtén solo el último usuario

    if (error) {
      console.error("Error al obtener el último usuario:", error);
      return null;
    }

    return data.length > 0 ? data[0] : null; // Retorna el último usuario si existe
  } catch (err) {
    console.error("Error al obtener el último usuario:", err);
    return null;
  }
};

// ----------------------------------------------------------

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

// ----------------------------------------------------------

const updateUserLogged = async (email, logged) => {
  const { data, error } = await supabase
    .from("users")
    .update({ logged })
    .eq("email", email);

  if (error) {
    console.error("Error al actualizar logged:", error.message);
    throw error;
  }

  return data;
};

// ----------------------------------------------------------

async function addCreditsToLoggedUser(credits) {
  try {
    console.log("Intentando añadir créditos:", credits);

    // Buscar usuarios logueados
    const { data: loggedUsers, error: findError } = await supabase
      .from("users")
      .select("*")
      .eq("logged", true);

    console.log("Usuarios logueados encontrados:", loggedUsers);
    console.log("Error al buscar usuarios:", findError);

    if (findError) {
      console.error("Error al buscar usuarios:", findError);
      throw findError;
    }

    if (!loggedUsers || loggedUsers.length === 0) {
      console.warn("No se encontró ningún usuario con logged: true");
      return null;
    }

    // Toma el primer usuario logueado
    const loggedUser = loggedUsers[0];
    console.log("Usuario logueado seleccionado:", loggedUser);

    // Calcula los nuevos créditos
    const newCredits = (loggedUser.credits || 0) + credits;
    console.log("Créditos actuales:", loggedUser.credits);
    console.log("Nuevos créditos:", newCredits);

    // Actualiza los créditos
    const { data, error } = await supabase
      .from("users")
      .update({ credits: newCredits })
      .eq("id", loggedUser.id)
      .select();

    console.log("Resultado de la actualización:", data);
    console.log("Error en la actualización:", error);

    if (error) {
      console.error("Error al actualizar créditos:", error.message);
      throw error;
    }

    return data[0]; // Retorna el usuario actualizado
  } catch (error) {
    console.error("Error en addCreditsToLoggedUser:", error);
    throw error;
  }
}


module.exports = {
  createUser,
  getAllUsers,
  getLastUser,
  findUserByEmail,
  updateUserLogged,
  addCreditsToLoggedUser
};