
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './views')));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//Set up DB connection
mongoose.connect('mongodb://localhost/dog_db');
mongoose.Promise = global.Promise;

//Building out schema and model
var DogSchema = new mongoose.Schema({
 name: {type: String},
 breed: {type: String}
}, {timestamps: true})

mongoose.model('Dog', DogSchema);
var Dog = mongoose.model('Dog');


// Routing
app.get('/', function(req, res){
      Dog.find({}, function(err, results){
            if (err) {console.log(err);}
            res.render('index', {dogs: results});
      });
});

app.post('/', function(req, res){
      Dog.create(req.body, function(err, results){
            if (err) {console.log(err);}
            res.redirect('/');
      });
});

app.get('/new', function(req, res){
      res.render('new');
});

app.get('/:id/edit', function(req, res){
      Dog.find({ _id: req.params.id}, function(err, response){
            if (err) {console.log(err);}
            res.render('edit', {dog: response[0]});
      });
});

app.post('/:id', function(req, res){
      Dog.update({ _id: req.params.id}, req.body, function(err, results){
            if (err) {console.log(err);}
            res.redirect('/');
      });
});

app.get('/:id', function(req, res){
      Dog.find({ _id: req.params.id }, function (err, response){
            if (err) {console.log(err);}
            res.render('show', {dog: response[0]});
      });
});

app.post('/:id/destroy', function(req, res){
      Dog.remove({ _id: req.params.id}, function(err, results){
            if (err) {console.log(err);}
            res.redirect('/');
      });
});
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000: Mongoose Dashboard");
});
