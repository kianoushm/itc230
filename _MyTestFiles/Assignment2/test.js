var myBook = require('./book.js');
var test  = "PHP";
var books = myBook.books;
var output="";


// for (var i = 0; i < books.length; i++){
// 		if (books[i].title == test)
// 			{
// 		output=JSON.stringify(books[i]);					
// 			} else{
// 		output="Your favorite Book not found!";		
// 			}
//   }


var obj = books.find(function (obj) { return obj.title === "PHP"; });
console.log(JSON.stringify(obj));