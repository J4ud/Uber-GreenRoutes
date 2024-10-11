// eventsExampleHandlers.js

const { utilFuntion1, utilFuntion2 } = require("../utils/helpers");

// Assuming db and io are required or passed in some way to be accessible
const displayRegister = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const displayDeposit = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const waitForProduct = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const displayProccessing = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const displayCompleted = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
  };
};
const sendCredits = (socket, db, io) => {
  return (data) => {
    io.emit("showSomething");
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
