// Test index file in the Express folder

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
 res.type('text/html');
 res.sendFile(__dirname + '/public/home.html'); 
});

//send static file as response
app.get('/form', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/public/form.html');
});

// send plain text response
app.get('/about', (req, res) => {
 res.type('text/html');
 res.sendFile(__dirname + '/package.json');
});


app.listen(app.get('port'), () => {
 console.log('Express started'); 
});

// app.get('/detail', (req, res) => {
//   console.log(req.query); // display parsed querystring object
// });

app.post('/get', (req, res) => {
  console.log(req.body); // display parsed form submission
  // res.type('text/plain');
  // res.write(JSON.stringify(req.body));
  // res.end();
console.log(req.body.firstname);
 let result = req.body;
 res.render('formview', {firstname: req.body.firstname, lastname:req.body.lastname, gender:req.body.gender, result:result});

});

// define 404 handler
app.use( (req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});




// send content of 'formview' view
app.get('/get', (req,res) => {
 res.render('home');
});