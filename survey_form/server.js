
var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path");

var app = express ();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname + "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

var route = require("./routes/index.js")(app);

app.listen(8000, function(){
      console.log("Listening on port 8000: Survey Form");
});
