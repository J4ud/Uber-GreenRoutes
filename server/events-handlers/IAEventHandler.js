// eventsExampleHandlers.js

const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");

// Assuming db and io are required or passed in some way to be accessible
const plasticDetected = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};




module.exports = {
  plasticDetected

};
