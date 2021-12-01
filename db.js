const mysql = require("mysql");
const dbConfig = require("koneksi.js");

// Create a connection to the database
const connection = mysql.createConnection({

  port: dbConfig.port,
  connection: dbConfig.connect,
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
});

// open the MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;