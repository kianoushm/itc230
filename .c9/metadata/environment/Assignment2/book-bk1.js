{"filter":false,"title":"book-bk1.js","tooltip":"/Assignment2/book-bk1.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":53,"column":2},"action":"insert","lines":["","var books = [","{title:\"PHP\",author:\"Luke Welling\",pubdate:2001},","{title:\"NodeJS\",author:\"Andrew Mead\",pubdate:2018},","{title:\"MongoDB\",author:\"Rick Copeland\",pubdate:2013},","{title:\"Big Data\",author:\"Viktor Mayer-Schönberger\",pubdate:2013},","{title:\"cloud9\",author:\"Alex Campbell\",pubdate:2015}","\t];","","","exports.seeAll = function() {","\t// return a sorted list of books","  return books.sort(function(a, b) {","    return b.pubdate - a.pubdate;","  });","};","","exports.getAll = function() {","\t// return all books","  return JSON.stringify(books);","};","","exports.get = function(mytitle) {","  ","// \tfor (var i = 0; i < books.length; i++){","// \t\tif (books[i].title.toLowerCase() == mytitle.toLowerCase())","// \t\t\t{","// \t\treturn(JSON.stringify(books[i]));\t\t\t\t\t","// \t\t\t} else{","// \t\t// return (\"Your favorite Book not found!\");\t\t","// \t\treturn (\"Book not found!\");","// \t\t\t}","//   }","// var obj = books.find(function (books) { return books.title === title; });","// return (JSON.stringify(obj));","","var myBook = books.filter(function(book) {","  return book.title.toLowerCase() == mytitle.toLowerCase();","});","return (JSON.stringify(myBook));","","};","","","exports.delete = function(mytitle) {","  ","  var myBook = books.filter(function(book) {","  return book.title.toLowerCase() == (mytitle.toLowerCase());","});","","  var bookIndex = books.indexOf(myBook);","  books.splice(bookIndex, 1);","  return (JSON.stringify(myBook));","};"],"id":1}]]},"ace":{"folds":[],"scrolltop":476,"scrollleft":0,"selection":{"start":{"row":53,"column":2},"end":{"row":53,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":33,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1523507012747,"hash":"974805ef12d0920e3e3d47d93ea342eb5f2c5e93"}