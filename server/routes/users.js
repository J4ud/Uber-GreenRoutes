const express = require("express");
const usersController = require("../controllers/users");
const router = express.Router();

// Define routes and link them to controller methods
router.get("/users", usersController.getUsers);
router.get("/users/:id", usersController.getUser);
router.post("/users", usersController.createUsers);
router.post("/users/update-credits", usersController.updateCredits); // Nuevo endpoint
router.post("/users/logout-all", usersController.logoutAllUsers); // Nueva ruta


module.exports = router;