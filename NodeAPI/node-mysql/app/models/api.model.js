module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Tutorial;
};

module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    fname: {
      type: Sequelize.STRING
    },
    lname: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.STRING
    },
    genderPref: {
      type: Sequelize.STRING
    },
    agePref: {
      type: Sequelize.STRING
    }
  });

  return Users;
};
