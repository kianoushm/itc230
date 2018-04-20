
var http = require('http');
var fs = require("fs");



http.createServer(function(req,res) {
  var path = req.url;
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
   default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('404 Error - Page Not Found!');
      break;
    }
}).listen(process.env.PORT || 3000);