// eventsExampleHandlers.js

const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");


// Assuming db and io are required or passed in some way to be accessible

const displayRegister = (socket, db, io) => {
  return (data) => {
    io.emit("register screen");
  };
};
const displayDeposit = (socket, db, io) => {
  return (data) => {
    io.emit("deposit screen");
  };
};
const waitForProduct = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const displayProccessing = (socket, db, io) => {
  return (data) => {
    io.emit("proccessing screen");
  };
};
const displayCompleted = (socket, db, io) => {
  return (data) => {
    io.emit("completed screen");
  };
};
const sendCredits = (socket, db, io) => {
  return (data) => {
    io.emit("send credits");
  };
};


module.exports = {
  
    displayRegister,
    displayDeposit,
  waitForProduct,
  displayProccessing,
  displayCompleted,
  sendCredits
};
