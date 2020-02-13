module.exports = app => {
  const tutorials = require("../controllers/api.controller.js");
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();


  //User Table API Endpoints
  //Create a new User
  router.post("/user", users.createUser);
  router.get("/user/:id", users.findUser);
  router.get("/user/findAll", users.findAllUsers);
  router.put("/user/:id", users.updateUser);
  router.delete("/user/:id", users.deleteUser);

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
