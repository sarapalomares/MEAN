//Load the express module
var express = require("express");

//Invoke 'var express' and store in var app
var app = express ();

//Let's handle the base route "/" and get response with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})

//Tell the express app to listen
//This line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
app.listen(8000, function(){
      console.log("Listening on port 8000");
})

//Don't forget to npm install express in the project folder!
