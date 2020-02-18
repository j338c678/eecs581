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
  const username = req.params.username;

  user.findByPk(username)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};


exports.findAllUsers = (req, res) => {
  const username = req.query.username;
  var condition = username ? { username: { [Op.like]: `%${username}%` } } : null;

  user.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.updateUser = (req, res) => {

}

exports.deleteUser = (req, res) => {

}
