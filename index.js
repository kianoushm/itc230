
var http = require('http');
var fs = require("fs");
var url = require('url');
var myBook = require('./book.js');


http.createServer(function(req,res) {
  
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  var myTitle =q.title;
  myTitle = myTitle;
  var path = req.url;
  //handeling space in the query string - %20
  path=path.replace(/%20/g, " ");
  
   // No matter what comes after getall. It shows all objects
  if(path.indexOf("/getall") == 0) {
    path = '/getall';
  }
  
  switch(path) {
  case '/':
fs.readFile('./public/home.html', function (err, html) {
   if (err) return console.error(err);
   console.log(html);
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(html);
   res.end();
    });
  break;
  case '/about':
fs.readFile('./package.json', function (err, html) {
   if (err) return console.error(err);
   console.log(html);
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.write(html);
   res.end();
});
   break;
  case '/getall':
  res.writeHead(200, {'Content-Type': 'text/plain'}); 
  var allBooks  = myBook.getAll();
  res.write("All array items: \n\n"+allBooks);
  res.end();
  break;
  case '/get?title='+myTitle:
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var specificBook = myBook.get(myTitle);
  res.write("Searching for book title \""+myTitle+"\": \n\n"+specificBook);
  res.end();
  break;
  case '/delete?title='+myTitle:
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var deletedBook = myBook.delete(myTitle);
  res.write(deletedBook);
  res.end();
  break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Error - Page Not Found!');
      break;
    }
}).listen(process.env.PORT || 3000);