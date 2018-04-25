
var books = [
{title:"PHP",author:"Luke Welling",pubdate:2001},
{title:"Node JS",author:"Andrew Mead",pubdate:2018},
{title:"Mongo DB",author:"Rick Copeland",pubdate:2013},
{title:"Big Data",author:"Viktor Mayer-Schonberger",pubdate:2013},
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
return (myBook);
};


exports.delete = (deletedTitle)=> {
var counter = books.length;
	books.forEach((element, index)=> {
	if (deletedTitle.toLowerCase() == element.title.toLowerCase()) {	
	books.splice(index,1);
		}
    });
    	if (counter != books.length){
		return true;
			} else {
	return false;
			}
};

// Testing inside js file 
// console.log("Output is -->"+JSON.stringify(this.get("php")));
// console.log("Output is -->"+JSON.stringify(this.delete("php")));