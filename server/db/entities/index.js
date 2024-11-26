const users = [];

const save = (formData, callback) => {
  try {
    users.push(formData);
    callback(null);
  } catch (error) {
    callback(error);
  }
};

module.exports = { users, save };