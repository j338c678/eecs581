const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;


// Create and Save a new User
exports.createUser = (req, res) => {
  // Validate request
  if (!req.body.username || !req.body.password || !req.body.fname  || !req.body.lname  || !req.body.gender) {
    res.status(400).send({
      message: "Content must have title, password, fname, lname, and gender. Optional: birthday, genderPref, agePref"
    });
    return;
  }

  // Create a User
  const user = {
    username: req.body.username,
    password: req.body.password,
    fname: req.body.fname,
    lname: req.body.lname,
    gender: req.body.gender,
    birthday: req.body.birthday,
    genderPref: req.body.genderPref,
    agePref: req.body.agePref,
  };

  // Save Tutorial in the database
  Users.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    });
};

exports.findUser = (req, res) => {

}

exports.findAllUsers = (req, res) => {

}

exports.updateUser = (req, res) => {

}

exports.deleteUser = (req, res) => {

}
