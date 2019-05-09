// Time Complexity of O(n) = Depend entirely on Intput Size

const unique = string => {
  return new Set(string).size === string.length;
};

console.log(unique("abc"));
//True
console.log(unique("abba"));
//False
