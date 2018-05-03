var expect = require("chai").expect;
var books = require("../book");

//checking get module ----------------------
describe("Checking Get Module/Method:", () => {
 it("Returns requested book", function() {
   var result = books.get("PHP");
   expect(result).to.deep.equal([{title:"PHP",author:"Luke Welling",pubdate:2001}]);
 });
 
 it("Fails w/ invalid book (Get): ", () => {
   var result = books.get("fake");
   expect(result).to.deep.equal([]);
 });
});
// Checking Delete Module -----------------------
describe("Checking Delete Module/Method", () => {
 it("Delete requested book functionality", function() {
   var result = books.delete("PHP");
   expect(result).to.deep.equal({quantity:4, title:"PHP"});
 });
 
 it("Fails w/ invalid book (Delete)", () => {
   var result = books.delete("fake");
   expect(result).to.deep.equal({"quantity":4,"title":"fake"});
 });
});

// Checking Add Module -----------------------
describe("Checking Add Module/Method", () => {
 it("Adding book functionality", function() {
   var result = books.add({title:"test",author:"Test Author",pubdate:2018});
   expect(result).to.be.equal(true);
 });
 
 it("Fails w/ invalid book (Add)", () => {
   var result = books.add({});
   expect(result).to.deep.equal(false);
 });
});