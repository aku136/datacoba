var mysql = require("mysql");

//buat koneksi database mysql
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ethernet",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql terkoneksi");
});

module.exports = conn;
