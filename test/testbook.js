var expect = require("chai").expect;
var book = require("../lib/book");

describe("Book module", () => {
 it("Returns requested book", function() {
   var result = book.get("PHP");
   expect(result).to.deep.equal({title:"PHP",author:"Luke Welling",pubdate:2001});
 });
 
 it("Fails w/ invalid book", () => {
   var result = book.get("fake");
   expect(result).to.be.undefined;
 });
});