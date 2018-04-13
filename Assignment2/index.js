var http = require('http');
var url = require('url');
var myBook = require('./book.js');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use the url module to turn the querystring into an object:*/
  var q = url.parse(req.url, true).query;
  var myTitle =q.title;
  var path = req.url.toLowerCase();
  switch(path) {
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
  res.end('Not found');
  break;
  }
  
  // res.end(path);
}).listen(process.env.PORT || 3000);