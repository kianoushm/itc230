{"filter":false,"title":"try.js","tooltip":"/_MyTestFiles/try.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["_"],"id":39}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"remove","lines":["-"],"id":40}],[{"start":{"row":10,"column":2},"end":{"row":10,"column":3},"action":"insert","lines":["_"],"id":41}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["-"],"id":42}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["_"],"id":43}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "],"id":44}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["","    "],"id":45},{"start":{"row":15,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["","  "]},{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "],"id":46},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":2,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["","  "]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":[" "],"id":47},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":2,"column":2},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":48},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":14,"column":33},"end":{"row":14,"column":34},"action":"remove","lines":["t"],"id":49},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"remove","lines":["s"]},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"remove","lines":["e"]},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"remove","lines":["u"]}],[{"start":{"row":14,"column":39},"end":{"row":14,"column":40},"action":"remove","lines":["e"],"id":50},{"start":{"row":14,"column":38},"end":{"row":14,"column":39},"action":"remove","lines":["s"]},{"start":{"row":14,"column":37},"end":{"row":14,"column":38},"action":"remove","lines":["n"]},{"start":{"row":14,"column":36},"end":{"row":14,"column":37},"action":"remove","lines":["o"]},{"start":{"row":14,"column":35},"end":{"row":14,"column":36},"action":"remove","lines":["p"]}],[{"start":{"row":19,"column":8},"end":{"row":40,"column":40},"action":"remove","lines":["  ","var path = request.url.toLowerCase();","  switch(path) {","    case '/':","      response.writeHeader(200, {\"Content-Type\": \"text/html\"}); ","      response.write(html);","      break;","    case '/about':","      response.writeHeader(200, {\"Content-Type\": \"text/html\"}); ","\t\tresponse.write(html);","      break;","    default:","      response.writeHead(404, {'Content-Type': 'text/plain'});","      response.end('Not found');","      break;","    }","          ","","});","","response.end(); ","    }).listen(process.env.PORT || 3000);"],"id":51}],[{"start":{"row":19,"column":8},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":52},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":20,"column":4},"end":{"row":20,"column":5},"action":"insert","lines":["}"],"id":53},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"remove","lines":["    "]},{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":[")"]},{"start":{"row":20,"column":2},"end":{"row":20,"column":3},"action":"insert","lines":[";"]}],[{"start":{"row":14,"column":0},"end":{"row":20,"column":3},"action":"remove","lines":["http.createServer(function(req, res) {  ","                 ","fs.readFile('./public/home.html', function (err, html) {","    if (err) {","        throw err; ","    }   ","});"],"id":54}],[{"start":{"row":14,"column":0},"end":{"row":30,"column":36},"action":"insert","lines":["http.createServer(function(req,res) {","  var path = req.url.toLowerCase();","  switch(path) {","    case '/':","      res.writeHead(200, {'Content-Type': 'text/plain'});","      res.end('Home page');","      break;","    case '/about':","      res.writeHead(200, {'Content-Type': 'text/plain'});","      res.end('About page');","      break;","    default:","      res.writeHead(404, {'Content-Type': 'text/plain'});","      res.end('Not found');","      break;","    }","}).listen(process.env.PORT || 3000);"],"id":55}],[{"start":{"row":12,"column":5},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":56},{"start":{"row":13,"column":0},"end":{"row":14,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":14,"column":0},"end":{"row":16,"column":24},"action":"insert","lines":["response.writeHeader(200, {\"Content-Type\": \"text/html\"}); ","response.write(html); ","        response.end(); "],"id":57}],[{"start":{"row":22,"column":48},"end":{"row":22,"column":53},"action":"remove","lines":["plain"],"id":58},{"start":{"row":22,"column":48},"end":{"row":22,"column":49},"action":"insert","lines":["h"]},{"start":{"row":22,"column":49},"end":{"row":22,"column":50},"action":"insert","lines":["t"]},{"start":{"row":22,"column":50},"end":{"row":22,"column":51},"action":"insert","lines":["m"]},{"start":{"row":22,"column":51},"end":{"row":22,"column":52},"action":"insert","lines":["l"]}],[{"start":{"row":23,"column":14},"end":{"row":23,"column":25},"action":"remove","lines":["'Home page'"],"id":60}],[{"start":{"row":22,"column":56},"end":{"row":23,"column":0},"action":"insert","lines":["",""],"id":61},{"start":{"row":23,"column":0},"end":{"row":23,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":23,"column":6},"end":{"row":23,"column":27},"action":"insert","lines":["response.write(html);"],"id":62}],[{"start":{"row":23,"column":9},"end":{"row":23,"column":13},"action":"remove","lines":["pons"],"id":63},{"start":{"row":23,"column":9},"end":{"row":23,"column":10},"action":"remove","lines":["e"]}],[{"start":{"row":14,"column":0},"end":{"row":16,"column":24},"action":"remove","lines":["response.writeHeader(200, {\"Content-Type\": \"text/html\"}); ","response.write(html); ","        response.end(); "],"id":64}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["","  "],"id":65}],[{"start":{"row":4,"column":54},"end":{"row":4,"column":58},"action":"remove","lines":["data"],"id":66},{"start":{"row":4,"column":54},"end":{"row":4,"column":55},"action":"insert","lines":["h"]},{"start":{"row":4,"column":55},"end":{"row":4,"column":56},"action":"insert","lines":["t"]},{"start":{"row":4,"column":56},"end":{"row":4,"column":57},"action":"insert","lines":["m"]},{"start":{"row":4,"column":57},"end":{"row":4,"column":58},"action":"insert","lines":["l"]}],[{"start":{"row":9,"column":51},"end":{"row":9,"column":55},"action":"remove","lines":["data"],"id":67},{"start":{"row":9,"column":51},"end":{"row":9,"column":52},"action":"insert","lines":["h"]},{"start":{"row":9,"column":52},"end":{"row":9,"column":53},"action":"insert","lines":["t"]},{"start":{"row":9,"column":53},"end":{"row":9,"column":54},"action":"insert","lines":["m"]},{"start":{"row":9,"column":54},"end":{"row":9,"column":55},"action":"insert","lines":["l"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":30},"action":"remove","lines":["data.toString()"],"id":68},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["h"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["t"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["m"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["l"]}],[{"start":{"row":11,"column":15},"end":{"row":11,"column":30},"action":"remove","lines":["data.toString()"],"id":69},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["h"]},{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["t"]},{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["m"]},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":58},"end":{"row":4,"column":59},"action":"insert","lines":["-"],"id":70}],[{"start":{"row":4,"column":58},"end":{"row":4,"column":59},"action":"remove","lines":["-"],"id":71}],[{"start":{"row":4,"column":58},"end":{"row":4,"column":59},"action":"insert","lines":["_"],"id":72},{"start":{"row":4,"column":59},"end":{"row":4,"column":60},"action":"insert","lines":["h"]},{"start":{"row":4,"column":60},"end":{"row":4,"column":61},"action":"insert","lines":["o"]},{"start":{"row":4,"column":61},"end":{"row":4,"column":62},"action":"insert","lines":["m"]},{"start":{"row":4,"column":62},"end":{"row":4,"column":63},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["_"],"id":73},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["h"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["o"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["m"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":55},"end":{"row":9,"column":56},"action":"insert","lines":["_"],"id":74},{"start":{"row":9,"column":56},"end":{"row":9,"column":57},"action":"insert","lines":["a"]},{"start":{"row":9,"column":57},"end":{"row":9,"column":58},"action":"insert","lines":["b"]},{"start":{"row":9,"column":58},"end":{"row":9,"column":59},"action":"insert","lines":["o"]},{"start":{"row":9,"column":59},"end":{"row":9,"column":60},"action":"insert","lines":["u"]},{"start":{"row":9,"column":60},"end":{"row":9,"column":61},"action":"insert","lines":["t"]}],[{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["_"],"id":75},{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":["a"]},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["b"]},{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["o"]},{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["u"]},{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["_"],"id":76},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["h"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["o"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["m"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":1},"end":{"row":7,"column":3},"action":"remove","lines":[" var fs_home = require(\"fs\");","fs_home.readFile('./public/home.html', function (err, html_home) {","   if (err) return console.error(err);","   console.log(html_home);","});"],"id":77}],[{"start":{"row":14,"column":13},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":78},{"start":{"row":15,"column":0},"end":{"row":15,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":15,"column":6},"end":{"row":19,"column":3},"action":"insert","lines":[" var fs_home = require(\"fs\");","fs_home.readFile('./public/home.html', function (err, html_home) {","   if (err) return console.error(err);","   console.log(html_home);","});"],"id":79}],[{"start":{"row":20,"column":6},"end":{"row":22,"column":16},"action":"remove","lines":["res.writeHead(200, {'Content-Type': 'text/html'});","      res.write(html_home);","      res.end();"],"id":80}],[{"start":{"row":18,"column":26},"end":{"row":19,"column":0},"action":"insert","lines":["",""],"id":81},{"start":{"row":19,"column":0},"end":{"row":19,"column":3},"action":"insert","lines":["   "]}],[{"start":{"row":19,"column":3},"end":{"row":21,"column":16},"action":"insert","lines":["res.writeHead(200, {'Content-Type': 'text/html'});","      res.write(html_home);","      res.end();"],"id":82}],[{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":[" "],"id":83},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":[" "]},{"start":{"row":20,"column":3},"end":{"row":20,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":21,"column":3},"end":{"row":21,"column":4},"action":"remove","lines":[" "],"id":84},{"start":{"row":21,"column":3},"end":{"row":21,"column":4},"action":"remove","lines":[" "]},{"start":{"row":21,"column":3},"end":{"row":21,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":23,"column":6},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":85},{"start":{"row":23,"column":6},"end":{"row":23,"column":8},"action":"remove","lines":["  "]},{"start":{"row":23,"column":6},"end":{"row":23,"column":8},"action":"remove","lines":["  "]}],[{"start":{"row":23,"column":6},"end":{"row":23,"column":8},"action":"remove","lines":["  "],"id":86}],[{"start":{"row":23,"column":4},"end":{"row":23,"column":6},"action":"remove","lines":["  "],"id":87}],[{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":[" "],"id":88},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":[" "]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":[" "]},{"start":{"row":15,"column":3},"end":{"row":15,"column":4},"action":"remove","lines":[" "]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":[" "],"id":89}],[{"start":{"row":2,"column":1},"end":{"row":10,"column":0},"action":"remove","lines":[" "," ","  var fs_about = require(\"fs\");","fs_about.readFile('./package.json', function (err, html_about) {","   if (err) return console.error(err);","   console.log(html_about);","});  ","",""],"id":90}],[{"start":{"row":16,"column":18},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":91},{"start":{"row":17,"column":0},"end":{"row":17,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":17,"column":6},"end":{"row":24,"column":3},"action":"insert","lines":[" var fs_home = require(\"fs\");","fs_home.readFile('./public/home.html', function (err, html_home) {","   if (err) return console.error(err);","   console.log(html_home);","   res.writeHead(200, {'Content-Type': 'text/html'});","   res.write(html_home);","   res.end();","});"],"id":92}],[{"start":{"row":25,"column":5},"end":{"row":26,"column":28},"action":"remove","lines":[" res.writeHead(200, {'Content-Type': 'text/plain'});","      res.end('About page');"],"id":93},{"start":{"row":25,"column":5},"end":{"row":26,"column":0},"action":"remove","lines":["",""]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "]}],[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "],"id":94},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "]},{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"remove","lines":[" "]}],[{"start":{"row":25,"column":2},"end":{"row":25,"column":4},"action":"remove","lines":["  "],"id":95}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":18},"action":"remove","lines":["home"],"id":96},{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["a"]},{"start":{"row":17,"column":15},"end":{"row":17,"column":16},"action":"insert","lines":["b"]},{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":["o"]},{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["u"]},{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"remove","lines":["e"],"id":97},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"remove","lines":["m"]},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"remove","lines":["o"]},{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"remove","lines":["h"]}],[{"start":{"row":18,"column":3},"end":{"row":18,"column":4},"action":"insert","lines":["a"],"id":98},{"start":{"row":18,"column":4},"end":{"row":18,"column":5},"action":"insert","lines":["b"]},{"start":{"row":18,"column":5},"end":{"row":18,"column":6},"action":"insert","lines":["o"]},{"start":{"row":18,"column":6},"end":{"row":18,"column":7},"action":"insert","lines":["u"]},{"start":{"row":18,"column":7},"end":{"row":18,"column":8},"action":"insert","lines":["t"]}],[{"start":{"row":18,"column":21},"end":{"row":18,"column":37},"action":"remove","lines":["public/home.html"],"id":99}],[{"start":{"row":18,"column":21},"end":{"row":18,"column":22},"action":"insert","lines":["p"],"id":100},{"start":{"row":18,"column":22},"end":{"row":18,"column":23},"action":"insert","lines":["a"]},{"start":{"row":18,"column":23},"end":{"row":18,"column":24},"action":"insert","lines":["c"]},{"start":{"row":18,"column":24},"end":{"row":18,"column":25},"action":"insert","lines":["k"]},{"start":{"row":18,"column":25},"end":{"row":18,"column":26},"action":"insert","lines":["a"]},{"start":{"row":18,"column":26},"end":{"row":18,"column":27},"action":"insert","lines":["g"]},{"start":{"row":18,"column":27},"end":{"row":18,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":18,"column":28},"end":{"row":18,"column":29},"action":"insert","lines":["."],"id":101},{"start":{"row":18,"column":29},"end":{"row":18,"column":30},"action":"insert","lines":["j"]},{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"insert","lines":["a"]},{"start":{"row":18,"column":31},"end":{"row":18,"column":32},"action":"insert","lines":["s"]},{"start":{"row":18,"column":32},"end":{"row":18,"column":33},"action":"insert","lines":["o"]},{"start":{"row":18,"column":33},"end":{"row":18,"column":34},"action":"insert","lines":["n"]}],[{"start":{"row":18,"column":60},"end":{"row":18,"column":61},"action":"remove","lines":["e"],"id":102},{"start":{"row":18,"column":59},"end":{"row":18,"column":60},"action":"remove","lines":["m"]},{"start":{"row":18,"column":58},"end":{"row":18,"column":59},"action":"remove","lines":["o"]},{"start":{"row":18,"column":57},"end":{"row":18,"column":58},"action":"remove","lines":["h"]}],[{"start":{"row":18,"column":57},"end":{"row":18,"column":58},"action":"insert","lines":["a"],"id":103},{"start":{"row":18,"column":58},"end":{"row":18,"column":59},"action":"insert","lines":["b"]},{"start":{"row":18,"column":59},"end":{"row":18,"column":60},"action":"insert","lines":["o"]},{"start":{"row":18,"column":60},"end":{"row":18,"column":61},"action":"insert","lines":["u"]},{"start":{"row":18,"column":61},"end":{"row":18,"column":62},"action":"insert","lines":["t"]}],[{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"remove","lines":["e"],"id":104},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"remove","lines":["m"]},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"remove","lines":["o"]},{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"remove","lines":["h"]}],[{"start":{"row":20,"column":20},"end":{"row":20,"column":21},"action":"insert","lines":["a"],"id":105},{"start":{"row":20,"column":21},"end":{"row":20,"column":22},"action":"insert","lines":["b"]},{"start":{"row":20,"column":22},"end":{"row":20,"column":23},"action":"insert","lines":["o"]},{"start":{"row":20,"column":23},"end":{"row":20,"column":24},"action":"insert","lines":["u"]},{"start":{"row":20,"column":24},"end":{"row":20,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":22},"action":"remove","lines":["home"],"id":106},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":[")"]}],[{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"insert","lines":["a"],"id":107},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"insert","lines":["b"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"insert","lines":["o"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"insert","lines":["u"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"insert","lines":["t"]}],[{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"insert","lines":[")"],"id":108}],[{"start":{"row":18,"column":30},"end":{"row":18,"column":31},"action":"remove","lines":["a"],"id":109}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["P"],"id":110},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["a"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["g"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":[" "],"id":111}],[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"remove","lines":["f"],"id":112}],[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":["F"],"id":113}],[{"start":{"row":28,"column":29},"end":{"row":28,"column":30},"action":"insert","lines":["!"],"id":114}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["O"],"id":115},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["O"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["P"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":["S"]},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["!"]}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":[" "],"id":116}],[{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"remove","lines":[" "],"id":117},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"remove","lines":["!"]},{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"remove","lines":["S"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["P"]},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"remove","lines":["O"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["O"]}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["4"],"id":118},{"start":{"row":28,"column":16},"end":{"row":28,"column":17},"action":"insert","lines":["0"]},{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"insert","lines":["4"]}],[{"start":{"row":28,"column":18},"end":{"row":28,"column":19},"action":"insert","lines":[" "],"id":119},{"start":{"row":28,"column":19},"end":{"row":28,"column":20},"action":"insert","lines":["E"]},{"start":{"row":28,"column":20},"end":{"row":28,"column":21},"action":"insert","lines":["r"]},{"start":{"row":28,"column":21},"end":{"row":28,"column":22},"action":"insert","lines":["r"]},{"start":{"row":28,"column":22},"end":{"row":28,"column":23},"action":"insert","lines":["o"]},{"start":{"row":28,"column":23},"end":{"row":28,"column":24},"action":"insert","lines":["r"]}],[{"start":{"row":28,"column":24},"end":{"row":28,"column":25},"action":"insert","lines":[" "],"id":120},{"start":{"row":28,"column":25},"end":{"row":28,"column":26},"action":"insert","lines":["-"]}],[{"start":{"row":28,"column":26},"end":{"row":28,"column":27},"action":"insert","lines":[" "],"id":121}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":122}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" "],"id":123},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "],"id":124}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "],"id":125},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "],"id":126},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "],"id":127},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":1},"action":"remove","lines":[" "]}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "],"id":128}],[{"start":{"row":13,"column":2},"end":{"row":13,"column":4},"action":"insert","lines":["  "],"id":129}],[{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "],"id":130},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":7},"action":"remove","lines":["_home"],"id":131}],[{"start":{"row":7,"column":53},"end":{"row":7,"column":58},"action":"remove","lines":["_home"],"id":132}],[{"start":{"row":9,"column":19},"end":{"row":9,"column":24},"action":"remove","lines":["_home"],"id":133}],[{"start":{"row":11,"column":17},"end":{"row":11,"column":22},"action":"remove","lines":["_home"],"id":134}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":13},"action":"remove","lines":["_home"],"id":135}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":14},"action":"remove","lines":["_about"],"id":136}],[{"start":{"row":17,"column":2},"end":{"row":17,"column":8},"action":"remove","lines":["_about"],"id":137}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":55},"action":"remove","lines":["_about"],"id":138}],[{"start":{"row":19,"column":19},"end":{"row":19,"column":25},"action":"remove","lines":["_about"],"id":139}],[{"start":{"row":21,"column":17},"end":{"row":21,"column":23},"action":"remove","lines":["_about"],"id":140}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":16,"column":25},"end":{"row":16,"column":25},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1522988002619,"hash":"b1d2945217e9c658aea8e58dc738f6868da3334a"}