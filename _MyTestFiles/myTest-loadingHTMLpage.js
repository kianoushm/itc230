var http = require('http'),
    fs = require('fs');

http.createServer(function(request, response) {  
         console.log(request.url);
        
fs.readFile('./public/home.html', function (err, html) {
    if (err) {
        throw err; 
    }     
    console.log(html);
    
    response.writeHeader(200, {"Content-Type": "text/html"}); 
response.write(html); 
        response.end();  

});
    }).listen(process.env.PORT || 3000);