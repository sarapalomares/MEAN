
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
mongoose.connect('mongodb://localhost/quoting_dojo');
mongoose.Promise = global.Promise;

//Building out schema and model
var QuotesSchema = new mongoose.Schema({
 name: {type: String},
 quote: {type: String}
}, {timestamps: true})

mongoose.model('Quote', QuotesSchema);
var Quote = mongoose.model('Quote');

// Routing
app.get('/', function(req, res) {
      res.render('index.ejs');
});

app.get('/quotes', function(req, res) {
      Quote.find({}, function(err, results){
            if(err) { console.log(err); }
            res.render('quotes', { quotes: results });
      });
});

app.post('/post_quote', function(req, res) {
      Quote.create(req.body, function(err){
            if(err) { console.log(err); }
            res.redirect('/quotes');
      });
});

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000: Quoting Dojo!");
});
