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

module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define("users", {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING
    },
    fname: {
      type: DataTypes.STRING
    },
    lname: {
      type: DataTypes.STRING
    },
    gender: {
      type: DataTypes.STRING
    },
    birthday: {
      type: DataTypes.STRING
    },
    genderPref: {
      type: DataTypes.STRING
    },
    agePref: {
      type: DataTypes.STRING
    }
  });
  return Users;
};
