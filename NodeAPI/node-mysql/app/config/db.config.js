module.exports = {
  HOST: "3.17.12.161",
  PORT: "3306",
  USER: "root",
  PASSWORD: "letsTalk!",
  DB: "letsTalk",
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
