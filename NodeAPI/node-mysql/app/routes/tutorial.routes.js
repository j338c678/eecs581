module.exports = app => {
  const tutorials = require("../controllers/api.controller.js");
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();


  //User Table API Endpoints
  //Create a new User
  router.post("/users", users.createUser);
  router.get("/users/:username", users.findUser);
  router.get("/users", users.findAllUsers);
  router.put("/users/:username", users.updateUser);
  router.delete("/users/:username", users.deleteUser);

  //Tutorial Stuff
  // Create a new
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Create a new Tutorial
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
