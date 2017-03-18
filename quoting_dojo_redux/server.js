// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory

mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

var QuotesSchema = new mongoose.Schema({
 name: {type: String},
 quote: {type: String}
}, {timestamps: true})

mongoose.model('Quote', QuotesSchema); // We are setting this Schema in our Models as 'Quote'
var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'Quote'

app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
      res.render('index.ejs');
});

app.get('/quotes', function(req, res) {
      Quote.find({}, function(err, results){
            if(err) { console.log(err); }
            res.render('quotes', { quotes: results });
      });
})

app.post('/post_quote', function(req, res) {
      Quote.create(req.body, function(err){
            if(err) { console.log(err); }
            res.redirect('/quotes');
      });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000: Quoting Dojo!");
})
