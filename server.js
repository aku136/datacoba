const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

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
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

require("./routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
