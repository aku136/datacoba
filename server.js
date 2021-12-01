// const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const helmet = require('helmet');
const compression = require('compression');

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(compression()); 
app.use(cors(corsOptions));
app.use(helmet());
// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// //pangil routes
// var routes = require('./routes');
// routes(app);

// app.listen(3000, () => {
//     console.log(`Server started on port`);
// });
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to application." });
// });

require("./routes.js")(app);

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

// set port, listen for requests
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})


// // declare react files in build as static
// app.use(express.static(path.join(__dirname, "build")));

// // serve index.html from the build folder
// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });
