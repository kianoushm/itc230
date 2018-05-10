//Express Experience - Converting to Express Format


var myBook = require('./book.js');

'use strict';
const express = require("express");
const app = express();

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

// send static file as response
app.get('/', (req, res) => {
 var allBooks  = myBook.getAll();
 res.render('home', {books:allBooks});
});

// send plain text response
app.get('/about', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/package.json');
});

app.get('/delete', (req, res) => {
  var myTitle = req.query.title;
  var deletedBook = myBook.delete(myTitle);
  res.render('delete', deletedBook);
  
});

// send plain text response
app.get('/getall', (req, res) => {
  var allBooks  = myBook.getAll();
  var output = JSON.stringify(allBooks);
  res.type('text/plain');
  res.send(output);
});

app.post('/detail', (req, res) => {  //detail path - Form Post Method
  var myTitle = req.body.title.trim().toLocaleLowerCase();
  var specificBook = myBook.get(myTitle);
  if (specificBook != "") {
  var myBookInfo = specificBook[0];
  let result = req.body.title;
  myBookInfo.result = result;
  res.render('detail', myBookInfo); //detail.html file
  } else {
  res.render('detail', {msg: "\""+myTitle+"\" Not Found!", wrongTitle:"\""+myTitle+"\""});
  }   
});

app.get('/detail', (req, res) => { //detail path - Link Get Method
  var myTitle = req.query.title;
  var specificBook = myBook.get(myTitle);
  if (specificBook != "") {
  var myBookInfo = specificBook[0];
  let result = req.query.title;
  myBookInfo.result = result;
  res.render('detail', myBookInfo); //detail.html file
  } else {
  res.render('detail', {msg: "\""+myTitle+"\" not found!", wrongTitle:"\""+myTitle+"\""});
  }   
  
});

app.listen(app.get('port'), () => {
 console.log('Express started'); 
});

// define 404 handler
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});


