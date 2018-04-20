
var books = [
{title:"PHP",author:"Luke Welling",pubdate:2001},
{title:"NodeJS",author:"Andrew Mead",pubdate:2018},
{title:"MongoDB",author:"Rick Copeland",pubdate:2013},
{title:"BigData",author:"Viktor Mayer-Schonberger",pubdate:2013},
{title:"cloud9",author:"Alex Campbell",pubdate:2015}
	];


exports.getAll = ()=> {
	// return all books
  return books;
};


exports.get = (mytitle)=> {
var myBook = books.filter((book)=> {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
if (typeof myBook == "undefined") { return [{}];} else {
return myBook;
}};

exports.delete = (deletedTitle)=> {
var msg ="";
var deleteObj ={};
var flag = 0;

	books.forEach((element, index)=> {
	if (deletedTitle.toLowerCase() == element.title.toLowerCase()) {	
	books.splice(index,1);
	// msg = "[BOOK Title=\""+deletedTitle+"\"] removed!";
  	flag++;
	}
    });
	// if (flag==0) { msg = "[BOOK Title=\""+deletedTitle+"\"] not removed!";
		
	// 	deleteObj = {quantity:flag, title:deletedTitle, msg:deletedTitle+" not removed!"};
	// }
	deleteObj = {quantity:Object.keys(books).length, title:deletedTitle};
  return deleteObj;
   
};