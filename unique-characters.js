const unique = string => {
  return new Set(string).size === string.length;
};

console.log(unique("abc"));
//True
console.log(unique("abba"));
//False
