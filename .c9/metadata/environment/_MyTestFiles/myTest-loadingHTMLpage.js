{"filter":false,"title":"myTest-loadingHTMLpage.js","tooltip":"/_MyTestFiles/myTest-loadingHTMLpage.js","undoManager":{"mark":62,"position":62,"stack":[[{"start":{"row":0,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["var http = require('http'),","    fs = require('fs');","","","fs.readFile('./index.html', function (err, html) {","    if (err) {","        throw err; ","    }       ","    http.createServer(function(request, response) {  ","        response.writeHeader(200, {\"Content-Type\": \"text/html\"});  ","        response.write(html);  ","        response.end();  ","    }).listen(8000);","});"],"id":1}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"remove","lines":["x"],"id":2},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"remove","lines":["e"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"remove","lines":["d"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"remove","lines":["n"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"remove","lines":["i"]}],[{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["h"],"id":3},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["o"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["m"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["/"],"id":4},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["p"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["u"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["b"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["l"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["i"]},{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["c"]}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"remove","lines":["8"],"id":5}],[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["3"],"id":6}],[{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"remove","lines":["/"],"id":7},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"remove","lines":["."]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["."],"id":8},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":0},"end":{"row":12,"column":20},"action":"remove","lines":["    http.createServer(function(request, response) {  ","        response.writeHeader(200, {\"Content-Type\": \"text/html\"});  ","        response.write(html);  ","        response.end();  ","    }).listen(3000);"],"id":9}],[{"start":{"row":9,"column":3},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":10,"column":0},"end":{"row":11,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":11,"column":0},"end":{"row":15,"column":20},"action":"insert","lines":["    http.createServer(function(request, response) {  ","        response.writeHeader(200, {\"Content-Type\": \"text/html\"});  ","        response.write(html);  ","        response.end();  ","    }).listen(3000);"],"id":11}],[{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"remove","lines":[" "],"id":12},{"start":{"row":13,"column":30},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":4,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["fs.readFile('./public/home.html', function (err, html) {","    if (err) {","        throw err; ","    }       ","","});"],"id":13}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":8},"action":"remove","lines":["        "],"id":14},{"start":{"row":9,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["fs.readFile('./public/home.html', function (err, html) {","    if (err) {","        throw err; ","    }       ","","});"]}],[{"start":{"row":8,"column":8},"end":{"row":8,"column":30},"action":"remove","lines":["response.write(html); "],"id":15}],[{"start":{"row":13,"column":0},"end":{"row":13,"column":22},"action":"insert","lines":["response.write(html); "],"id":16}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":17}],[{"start":{"row":15,"column":0},"end":{"row":16,"column":0},"action":"remove","lines":["        response.end();  ",""],"id":18}],[{"start":{"row":13,"column":22},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":19}],[{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["        response.end();  ",""],"id":20}],[{"start":{"row":7,"column":8},"end":{"row":7,"column":66},"action":"remove","lines":["response.writeHeader(200, {\"Content-Type\": \"text/html\"}); "],"id":21}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":12},"action":"remove","lines":["  "],"id":22},{"start":{"row":12,"column":10},"end":{"row":13,"column":0},"action":"insert","lines":["",""]},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]},{"start":{"row":13,"column":4},"end":{"row":14,"column":0},"action":"insert","lines":["",""]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":62},"action":"insert","lines":["response.writeHeader(200, {\"Content-Type\": \"text/html\"}); "],"id":23}],[{"start":{"row":2,"column":0},"end":{"row":5,"column":0},"action":"remove","lines":["","","",""],"id":24}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"remove","lines":["l"],"id":25},{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"remove","lines":["m"]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"remove","lines":["t"]},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"remove","lines":["h"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"remove","lines":["."]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"remove","lines":["e"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["m"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"remove","lines":["o"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"remove","lines":["h"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"remove","lines":["/"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"remove","lines":["c"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["i"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["l"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["b"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["u"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"remove","lines":["p"]}],[{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["/"],"id":26},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"remove","lines":["."]}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["p"],"id":27},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["a"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["c"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["k"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["a"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["h"],"id":28},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["e"],"id":29},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["h"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["g"],"id":30},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["."]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["j"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["a"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["s"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["o"]}],[{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["n"],"id":31}],[{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"remove","lines":["a"],"id":32}],[{"start":{"row":9,"column":10},"end":{"row":10,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":10,"column":0},"end":{"row":10,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["c"],"id":34},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["o"]},{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":["n"]},{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["o"],"id":35},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["l"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["e"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["."]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["l"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["o"]}],[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["g"],"id":36}],[{"start":{"row":10,"column":15},"end":{"row":10,"column":17},"action":"insert","lines":["()"],"id":37}],[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["h"],"id":38},{"start":{"row":10,"column":17},"end":{"row":10,"column":18},"action":"insert","lines":["t"]},{"start":{"row":10,"column":18},"end":{"row":10,"column":19},"action":"insert","lines":["m"]},{"start":{"row":10,"column":19},"end":{"row":10,"column":20},"action":"insert","lines":["l"]}],[{"start":{"row":10,"column":21},"end":{"row":10,"column":22},"action":"insert","lines":[";"],"id":39}],[{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["c"],"id":40},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["o"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["n"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["s"]},{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["o"]},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["l"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["e"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["."]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["l"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["o"]},{"start":{"row":4,"column":19},"end":{"row":4,"column":20},"action":"insert","lines":["g"]}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":22},"action":"insert","lines":["()"],"id":41}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":23},"action":"insert","lines":["''"],"id":42}],[{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["r"],"id":43},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["e"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["q"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["u"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["e"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["s"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["t"]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["."]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"remove","lines":["."],"id":44},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"remove","lines":["t"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"remove","lines":["s"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"remove","lines":["e"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"remove","lines":["u"]},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"remove","lines":["q"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["e"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"remove","lines":["r"]},{"start":{"row":4,"column":21},"end":{"row":4,"column":23},"action":"remove","lines":["''"]}],[{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["r"],"id":45},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["e"]},{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["u"]}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"remove","lines":["u"],"id":46}],[{"start":{"row":4,"column":23},"end":{"row":4,"column":24},"action":"insert","lines":["q"],"id":47},{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["u"]},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["e"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["s"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["t"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["."]},{"start":{"row":4,"column":29},"end":{"row":4,"column":30},"action":"insert","lines":["u"]},{"start":{"row":4,"column":30},"end":{"row":4,"column":31},"action":"insert","lines":["r"]},{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["l"]}],[{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":[";"],"id":48}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "],"id":49},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":34},"action":"insert","lines":["process.env.PORT || "],"id":50}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["// "],"id":51},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "],"id":52},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["// "],"id":53},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"insert","lines":["// "],"id":54},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"insert","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"insert","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"insert","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"insert","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"insert","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"insert","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"insert","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["// "],"id":55},{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["// "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":3},"action":"remove","lines":["// "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":3},"action":"remove","lines":["// "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":3},"action":"remove","lines":["// "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":3},"action":"remove","lines":["// "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":3},"action":"remove","lines":["// "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":3},"action":"remove","lines":["// "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"remove","lines":["n"],"id":56},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"remove","lines":["o"]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"remove","lines":["s"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"remove","lines":["j"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"remove","lines":["."]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["e"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["g"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["a"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["k"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"remove","lines":["c"]},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"remove","lines":["a"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"remove","lines":["p"]}],[{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["."],"id":57},{"start":{"row":6,"column":14},"end":{"row":6,"column":15},"action":"insert","lines":["/"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["h"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["o"]}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["m"],"id":58},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["e"],"id":59},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["m"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["o"]},{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"remove","lines":["h"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":["p"],"id":60}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["u"],"id":61},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["b"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["l"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["i"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["c"]}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["/"],"id":62},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["h"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["o"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["m"]},{"start":{"row":6,"column":25},"end":{"row":6,"column":26},"action":"insert","lines":["e"]},{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["h"],"id":63},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":["t"]},{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["m"]},{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["l"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":12,"column":4},"end":{"row":14,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1522892977191,"hash":"9de32ca8788798d5308004f27a991420a9a059da"}