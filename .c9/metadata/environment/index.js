{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":36},"action":"remove","lines":["// JavaScript Document","","var http = require(\"http\");  ","http.createServer(function(req,res) {","  res.writeHead(200, {'Content-Type': 'text/plain'});","  res.end('Aloha world');","}).listen(process.env.PORT || 3000);"],"id":2},{"start":{"row":0,"column":0},"end":{"row":17,"column":36},"action":"insert","lines":["var http = require(\"http\"); ","http.createServer(function(req,res) {","  var path = req.url.toLowerCase();","  switch(path) {","    case '/':","      res.writeHead(200, {'Content-Type': 'text/plain'});","      res.end('Home page');","      break;","    case '/about':","      res.writeHead(200, {'Content-Type': 'text/plain'});","      res.end('About page');","      break;","    default:","      res.writeHead(404, {'Content-Type': 'text/plain'});","      res.end('Not found');","      break;","    }","}).listen(process.env.PORT || 3000);"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":15,"column":12},"end":{"row":15,"column":12},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1522889832982,"hash":"9f1731b8aaec2bd6c72046100c818d4942ac4f31"}