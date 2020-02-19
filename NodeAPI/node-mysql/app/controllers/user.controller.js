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
  const username = req.params.username;

  Users.update(req.body, {
    where: { username: username }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update User with username=${username}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with Username=" + id
      });
    });
}

exports.deleteUser = (req, res) => {
  const username = req.params.username;

  Users.destroy({
    where: { username: username }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "User was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with username=${username}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with username=" + username
      });
    });
}
