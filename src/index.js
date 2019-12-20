var express = require('express');
var graphqlHTTP = require('express-graphql');
var indexRouter = require("./routes/user.route.js");
var mongoose = require('mongoose');

var app = express();
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'budgetapp';
 
// Use connect method to connect to the server
mongoose.connect(url, function(err, dbName) {
  console.log("Connected successfully to server");
});

app.use('/graphql', graphqlHTTP({
  schema: indexRouter.schema,
  rootValue: indexRouter.root,
  graphiql: true
}));

// app.use('/Users',indexRouter);
app.listen(4000);
