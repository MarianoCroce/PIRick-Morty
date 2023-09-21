const { Sequelize } = require("sequelize");
const app = require("./app")
const PORT = 3001;
const { conn } = require('./DB_connection')

app.listen(PORT, () => {
  conn.sync({force: true});
  console.log(`Server raised on port: ${PORT}`);
});


