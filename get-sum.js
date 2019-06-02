//Problem: You are given an integer n. Count the total of 1+2+ ... + n
function getSum(n) {
  var result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(getSum(1));
console.log(getSum(2));
console.log(getSum(4));
