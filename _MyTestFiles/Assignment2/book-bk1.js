
var books = [
{title:"PHP",author:"Luke Welling",pubdate:2001},
{title:"NodeJS",author:"Andrew Mead",pubdate:2018},
{title:"MongoDB",author:"Rick Copeland",pubdate:2013},
{title:"Big Data",author:"Viktor Mayer-Schönberger",pubdate:2013},
{title:"cloud9",author:"Alex Campbell",pubdate:2015}
	];


exports.seeAll = function() {
	// return a sorted list of books
  return books.sort(function(a, b) {
    return b.pubdate - a.pubdate;
  });
};

exports.getAll = function() {
	// return all books
  return JSON.stringify(books);
};

exports.get = function(mytitle) {
  
// 	for (var i = 0; i < books.length; i++){
// 		if (books[i].title.toLowerCase() == mytitle.toLowerCase())
// 			{
// 		return(JSON.stringify(books[i]));					
// 			} else{
// 		// return ("Your favorite Book not found!");		
// 		return ("Book not found!");
// 			}
//   }
// var obj = books.find(function (books) { return books.title === title; });
// return (JSON.stringify(obj));

var myBook = books.filter(function(book) {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
return (JSON.stringify(myBook));

};


exports.delete = function(mytitle) {
  
  var myBook = books.filter(function(book) {
  return book.title.toLowerCase() == (mytitle.toLowerCase());
});

  var bookIndex = books.indexOf(myBook);
  books.splice(bookIndex, 1);
  return (JSON.stringify(myBook));
};