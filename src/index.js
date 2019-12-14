var express = require('express');
var app = express();
var indexRouter = require("./routes/user.route.js");
var mongoose = require('mongoose');

 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'budgetapp';
 
// Use connect method to connect to the server
mongoose.connect(url, function(err, db) {
  console.log("Connected successfully to server");
});


app.use('/Users',indexRouter);
app.listen(3000);
