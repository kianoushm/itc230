
var books = [
{title:"PHP",author:"Luke Welling",pubdate:2001},
{title:"NodeJS",author:"Andrew Mead",pubdate:2018},
{title:"MongoDB",author:"Rick Copeland",pubdate:2013},
{title:"BigData",author:"Viktor Mayer-Schonberger",pubdate:2013},
{title:"cloud9",author:"Alex Campbell",pubdate:2015}
	];


exports.getAll = ()=> {
	// return all books
  return JSON.stringify(books);
};

exports.get = (mytitle)=> {
var myBook = books.filter((book)=> {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
var msg = JSON.stringify(myBook);
if (msg=='[]'){msg = "There is no book for this book title";}
if (mytitle=="") { msg = "Book title should not be blank!";}
return (msg);
};

exports.delete = (deletedTitle)=> {
var msg ="";
var flag = 0;

	books.forEach((element, index)=> {
	if (deletedTitle.toLowerCase() == element.title.toLowerCase()) {	
	books.splice(index,1);
	msg = "[BOOK Title=\""+deletedTitle+"\"] removed!";
  	flag++;
	}
    });
	if (flag==0) { msg = "[BOOK Title=\""+deletedTitle+"\"] not removed!";}
	if (deletedTitle=="") { msg = "Book title should not be blank!";}
  return msg;
   
};