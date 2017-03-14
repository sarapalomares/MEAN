//Load the express module
var express = require("express");

//Invoke 'var express' and store in var app
var app = express ();

//Make sure you've NPM installed body-parser. This allows us to get our POST data from the request object.
var bodyParser = require('body-parser');

//Let's handle the base route "/" and get response with "Hello Express"
app.get('/', function(request, response) {
  response.send("<h1>Hello Express</h1>");
})

// This is the line that tells our server to use the "/static" folder for static content
// two underscores before dirname
// try printing out __dirname using console.log to see what it is and why we use it
app.use(express.static(__dirname + "/static"));

//Here is where we tell the app to use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');

// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get("/users", function (request, response){
    // hard-coded user data
    var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})

// route to process new user form data:
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.redirect('/')
});

//Tell the express app to listen
//This line will almost always be at the end of your server.js file (we only tell the server to listen after we have set up all of our rules)
app.listen(8000, function(){
      console.log("Listening on port 8000");
})

//Don't forget to npm install express in the project folder!
