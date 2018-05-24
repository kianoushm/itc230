//Express Experience - Using MongoDB

/*global next*/

var myBook = require("./models/mongobook");


'use strict';
const express = require("express");
const app = express();
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route

let handlebars =  require("express-handlebars");
app.engine(".html", handlebars({extname: '.html'}));
app.set("view engine", ".html");
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(require("body-parser").urlencoded({extended: true})); // parse form submissions

//API routes start from here

app.get('/api/v1/books', (req,res) => {
  
  myBook.find({}, function (err, items) {
  if (err) return next(err);
  var allBooks  = items;
  if (allBooks) {
  res.json(allBooks);
  } else {
    return res.status(500).send('Error occurred: database error.');
  }
});
});

app.get('/api/v1/book/:title', (req,res, next) => {
var myTitle = req.params.title;
 var my_pattern = new RegExp(myTitle, "i"); 
   myBook.findOne({title:{$regex: my_pattern}}, function (err, item) {
  if (err) return next(err);
  if (item == null) {
    res.json([{"Action": false, "explaination": myTitle+" not found!"}]);
  } else {
    res.json(item);
  }
});  
});

//delete and generate output
app.get('/api/v1/book/delete/:title', (req,res, next) => {
var myTitle = req.params.title;
 myBook.deleteOne({title:myTitle}, function (err, items) {
 if (err) return next(err);
  var deletedBook  = items;
  if (deletedBook) {
   if (deletedBook.n == 1){
    res.json([{"deleted": true, "explaination": myTitle+" deleted!"}]);
   } else {
    res.json([{"deleted": false, "explaination": myTitle+" not deleted!"}]);
   }
   } else {
    return res.status(500).send('Error occurred: database error.');
  }
});
});  

// rendering add new item view page -  add.html
app.get('/add', (req, res) => {
res.render('add');
});


//add new document and generate output
app.post('/add', (req, res, next) => {  
  
 var myTitle = req.body.title; 
 var newBook = myBook();
 newBook.title = req.body.title;
 newBook.author = req.body.author;
 newBook.pubdate = req.body.pubdate;
 
 // newBook.save((err, result) => {
 //  console.log("Result--> "+result);
 // });
 
 myBook.update({"title":req.body.title}, req.body, {upsert:true}, (err, result) => {
  if (err) return next(err);
  console.log(JSON.stringify(result));
  if (result.upserted) { 
   res.json([{"added": true,"updated": false, "explaination": myTitle+" added."}]);
   
  } else {
  if (result.nModified == 0) {
    res.json([{"added": false,"updated": false, "explaination": myTitle+" not updated."}]);
  }
  if (result.nModified == 1) {
    res.json([{"added": false,"updated": true, "explaination": myTitle+" updated."}]);
  }
  }
   });
});


//API routes end here

// send static file as response
app.get('/', (req, res, next) => {

myBook.find({}, function (err, items) {
  if (err) return next(err);
  //console.log("All --> "+items);
  // other code here
  var allBooks  = items;
 res.render('home', {books:allBooks});
});
});




//React route
app.get('/react', (req, res, next) => {

myBook.find({}, function (err, items) {
  if (err) return next(err);
  //console.log("All --> "+items);
  // other code here
  var allBooks  = items;
 res.render('react-home', {books:JSON.stringify(allBooks)});
});
});






// send plain text response
app.get('/about', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/package.json');
});

app.get('/delete', (req, res, next) => {
  var qty=0;
  var myTitle = req.query.title;
myBook.deleteOne({title:myTitle}, function (err, items) {
 if (err) return next(err);
});

 myBook.find({}, function (err, items) {
  if (err) return next(err);
  qty = items.length;
   var deletedBook = {quantity:qty, title:myTitle};
 
 res.render('delete', deletedBook);
});
});

app.post('/detail', (req, res, next) => {  //detail path - Form Post Method
  var myTitle = req.body.title.trim();
  var my_pattern = new RegExp(myTitle, "i"); 
   myBook.findOne({title:{$regex: my_pattern}}, function (err, item) {
  if (err) return next(err);
   var myBookInfo = item;
  let result = req.body.title;
  myBookInfo.result = result;
  res.render('detail', myBookInfo); //detail.html file
});       
});

app.get('/detail', (req, res, next) => { //detail path - Link Get Method
  var myTitle = req.query.title;
 myBook.findOne({title:myTitle}, function (err, item) {
  if (err) return next(err);
   var myBookInfo = item;
  let result = req.query.title;
  myBookInfo.result = result;
  res.render('detail', myBookInfo); //detail.html file
}); 
});



// send plain text response
app.get('/about', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/package.json');
});

// send plain text response
app.get('/getall', (req, res) => {
  var allBooks  = myBook.getAll();
  var output = JSON.stringify(allBooks);
  res.type('text/plain');
  res.send(output);
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


