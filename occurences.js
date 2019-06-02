var dataset = [2, 2, 4, 2, 6, 4, 7, 8];
var search = 4;

var count = dataset.reduce(function(n, value) {
  return n + (value === search);
}, 0);

console.log(count);
