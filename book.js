
const books = [
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
let myBook = books.filter((book)=> {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
if (typeof myBook == "undefined") { return [{}];} else {
return myBook;
}};




exports.delete = (deletedTitle)=> {
let deleteObj ={};
	books.forEach((element, index)=> {
	if (deletedTitle.toLowerCase() == element.title.toLowerCase()) {	
	books.splice(index,1);
	}
    });

	deleteObj = {quantity:Object.keys(books).length, title:deletedTitle};
 
  return deleteObj;
   
};

//console.log(JSON.stringify(this.delete("test")));
exports.add = (newObject)=> {
  const arrayCount = books.length;    
  if (typeof newObject.title === 'undefined') {return false;}
  let found = books.findIndex((book)=>{
  return book.title.toLowerCase() === newObject.title.toLowerCase();
});
 if (found == -1) {
     books.push(newObject);
 if (books.length == arrayCount) {
         return false;
     }
        return true;
 } else {
     return false; //it means it is already in the list
 }
};