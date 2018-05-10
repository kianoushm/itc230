/*global next*/


var Book = require("./models/mongobook");

// return all records
Book.find({}, function (err, items) {
  if (err) return next(err);
  console.log(items.length);
  // other code here
});

// return all records that match a condition
Book.find({'title':'PHP'}, function (err, items) {
 if (err) return next(err);
 console.log(items.length);
 console.log(items[0].title+" "+items[0].author+" "+items[0].pubdate);
 // other code here
});


// return all records
Book.find({}, function (err, items) {
  if (err) return next(err);
  console.log("All --> "+items);
  // other code here
});