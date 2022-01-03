const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const helmet = require('helmet');
const compression = require('compression');


app.use(compression()); 
app.use(cors());
app.use(helmet());

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./routes.js")(app);

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port ' + listener.address().port)
})