const mysql = require("mysql");
const dbConfig = require("koneksi.js");

// Buat koneksi ke database
const connection = mysql.createConnection({

  port: dbConfig.port,
  connection: dbConfig.connect,
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// buka koneksi MySQL
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;