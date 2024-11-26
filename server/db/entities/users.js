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

module.exports = {
  createUser,
  getAllUsers
};