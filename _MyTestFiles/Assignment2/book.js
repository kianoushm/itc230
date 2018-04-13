
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
var myBook = books.filter(function(book) {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
return (JSON.stringify(myBook));
};

exports.delete = function(deletedTitle) {

var msg ="";
var flag = 0;

	books.forEach(function(element, index) {
	if (deletedTitle.toLowerCase() == element.title.toLowerCase()) {	
	books.splice(index,1);
	msg = "[BOOK Title="+deletedTitle+"] removed!";
  	flag++;
	}
    });
	if (flag==0) { msg = "[BOOK Title="+deletedTitle+"] not removed!";}
	
  return msg;
   
};