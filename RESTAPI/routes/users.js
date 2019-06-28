const route = require('express').Router();

const authorization = require('../auth/auth.js');
const users = require('../controllers/userController.js');


route.post("/register", users.register);
route.post("/login", users.login);


route.get("/all", authorization, users.getUsers);      // Get users
route.get("/:id", authorization, users.getUser);       // Get specific user
route.put("/:id", authorization, users.updateUser);    // Update specific user
route.patch("/:id", authorization, users.updateUser);  // Update specific user
route.delete("/:id", authorization, users.deleteUser); // Remove specific user


module.exports = route;