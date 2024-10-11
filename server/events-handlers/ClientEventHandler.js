// eventsExampleHandlers.js

const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");

// Assuming db and io are required or passed in some way to be accessible
const startProccess = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};

const showsQR = (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};

const CameraScreen= (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};

const NewProduct= (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};
const SendProduct= (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};

const confirmProfile= (socket, db, io) => {
  return (data) => {
    io.emit("returnScreen1", { message: "ok" });
  };
};

module.exports = {
  startProccess,
  showsQR,
  CameraScreen,
  NewProduct,
  SendProduct,
  confirmProfile
};
