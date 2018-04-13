{"filter":false,"title":"index.js","tooltip":"/index.js","undoManager":{"mark":28,"position":28,"stack":[[{"start":{"row":2,"column":23},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":20},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":4,"column":0},"end":{"row":6,"column":34},"action":"insert","lines":["var http = require('http');","var url = require('url');","var myBook = require('./book.js');"],"id":21}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":27},"action":"remove","lines":["","var http = require('http');"],"id":22},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":35},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":23},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]},{"start":{"row":9,"column":2},"end":{"row":10,"column":0},"action":"insert","lines":["",""]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":2},"end":{"row":11,"column":0},"action":"insert","lines":["",""]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":9,"column":2},"end":{"row":13,"column":35},"action":"insert","lines":["","  /*Use the url module to turn the querystring into an object:*/","  var q = url.parse(req.url, true).query;","  var myTitle =q.title;","  var path = req.url.toLowerCase();"],"id":24}],[{"start":{"row":34,"column":9},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":35,"column":0},"end":{"row":35,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":35,"column":3},"end":{"row":52,"column":8},"action":"insert","lines":[" case '/getall':","  res.writeHead(200, {'Content-Type': 'text/plain'}); ","  var allBooks  = myBook.getAll();","  res.write(\"All array items: \\n\\n\"+allBooks);","  res.end();","  break;","  case '/get?title='+myTitle:","  res.writeHead(200, {'Content-Type': 'text/plain'});","  var specificBook = myBook.get(myTitle);","  res.write(\"Searching for book title \\\"\"+myTitle+\"\\\": \\n\\n\"+specificBook);","  res.end();","  break;","  case '/delete?title='+myTitle:","  res.writeHead(200, {'Content-Type': 'text/plain'});","  var deletedBook = myBook.delete(myTitle);","  res.write(deletedBook);","  res.end();","  break;"],"id":26}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"remove","lines":["    "],"id":27}],[{"start":{"row":35,"column":0},"end":{"row":35,"column":1},"action":"insert","lines":[" "],"id":28},{"start":{"row":35,"column":1},"end":{"row":35,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":35},"action":"remove","lines":["var path = req.url.toLowerCase();"],"id":29}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"remove","lines":[";"],"id":30}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":37},"action":"insert","lines":[".toLowerCase();"],"id":31}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":36},"action":"remove","lines":[".toLowerCase()"],"id":32}],[{"start":{"row":12,"column":23},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":42},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":2},"end":{"row":13,"column":3},"action":"insert","lines":["m"]},{"start":{"row":13,"column":3},"end":{"row":13,"column":4},"action":"insert","lines":["y"]}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"remove","lines":["my"],"id":43},{"start":{"row":13,"column":2},"end":{"row":13,"column":9},"action":"insert","lines":["myTitle"]}],[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":[" "],"id":44},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["="]}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":[" "],"id":45},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["m"]}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["u"],"id":46}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"remove","lines":["u"],"id":47}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["y"],"id":48}],[{"start":{"row":13,"column":12},"end":{"row":13,"column":14},"action":"remove","lines":["my"],"id":49},{"start":{"row":13,"column":12},"end":{"row":13,"column":19},"action":"insert","lines":["myTitle"]}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":20},"action":"insert","lines":["."],"id":50},{"start":{"row":13,"column":20},"end":{"row":13,"column":21},"action":"insert","lines":["t"]},{"start":{"row":13,"column":21},"end":{"row":13,"column":22},"action":"insert","lines":["o"]}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["L"],"id":51},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["o"]}],[{"start":{"row":13,"column":20},"end":{"row":13,"column":24},"action":"remove","lines":["toLo"],"id":52},{"start":{"row":13,"column":20},"end":{"row":13,"column":31},"action":"insert","lines":["toLowerCase"]}],[{"start":{"row":13,"column":31},"end":{"row":13,"column":33},"action":"insert","lines":["()"],"id":53}],[{"start":{"row":13,"column":33},"end":{"row":13,"column":34},"action":"insert","lines":[";"],"id":54}],[{"start":{"row":13,"column":19},"end":{"row":13,"column":33},"action":"remove","lines":[".toLowerCase()"],"id":55}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":34},"action":"remove","lines":[".toLowerCase()"],"id":56}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"remove","lines":[" "],"id":57},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"remove","lines":[" "]},{"start":{"row":7,"column":37},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":420,"scrollleft":0,"selection":{"start":{"row":37,"column":34},"end":{"row":37,"column":34},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":29,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1523595429676,"hash":"171b052bb2741eee925ddbfb7d51ad6d143c0bb2"}