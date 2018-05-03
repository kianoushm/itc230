const books = [
{title:"PHP",author:"Luke Welling",pubdate:2001},
{title:"NodeJS",author:"Andrew Mead",pubdate:2018},
{title:"MongoDB",author:"Rick Copeland",pubdate:2013},
{title:"BigData",author:"Viktor Mayer-Schonberger",pubdate:2013},
{title:"cloud9",author:"Alex Campbell",pubdate:2015}
	];
	
var testObject = {title:"PkllHP",author:"Luke Welling",pubdate:2001};


exports.add = (newObject)=> {
  var arrayCount = books.length;    
  var found = books.findIndex((book)=>{
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


console.log("This is result --> " + JSON.stringify(this.add(testObject)));









exports.get = (mytitle)=> {
let myBook = books.filter((book)=> {
  return book.title.toLowerCase() == mytitle.toLowerCase();
});
if (typeof myBook == "undefined") { return [{}];} else {
return myBook;
}};

//console.log("This is result --> " + JSON.stringify(this.get("php")));

