var expect = require("chai").expect;
var book = require("../book");

//checking get module ----------------------
describe("Checking Get Module:", () => {
 it("Returns requested book", function() {
   var result = book.get("PHP");
   expect(result).to.deep.equal([{title:"PHP",author:"Luke Welling",pubdate:2001}]);
 });
 
 it("Fails w/ invalid book / Get Moudle: ", () => {
   var result = book.get("fake");
   expect(result).to.deep.equal([]);
 });
});
// Checking delete module -----------------------
// describe("Checking Book Module", () => {
//  it("Returns requested book", function() {
//    var result = book.get("PHP");
//    expect(result).to.deep.equal([{title:"PHP",author:"Luke Welling",pubdate:2001}]);
//  });
 
//  it("Fails w/ invalid book", () => {
//    var result = book.get("fake");
//    expect(result).to.deep.equal([]);
//  });
// });