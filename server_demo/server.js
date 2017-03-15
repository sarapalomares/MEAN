// require express
var express = require("express");
// path module
var path = require("path");

// create the express app
var app = express();

// static content
app.use(express.static(path.join(__dirname, "./static")));

// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// root route to render the index.ejs view
app.get('/', function(req, res) {
      res.render("index");
})

// Selects the port and listens. Note that we're now storing our app.listen within a variable called server. Important!!
var server = app.listen(8000, function(){
      console.log("Listening on port 8000: Server Test")
});

//This line goes AFTER our server listener. Unless we have the server variable, this line will not work.
var io = require("socket.io").listen(server);

//Whenever a connection event happens, run the following code:
io.sockets.on("connection", function(socket){
      console.log("We are using sockets!");
      console.log(socket.id);

      socket.on("button_clicked", function (data){
            console.log('Someone clicked a button!  Reason: ' + data.reason);

      socket.emit('server_response', {response: "sockets are the best!"});
      });
});
