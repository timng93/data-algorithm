const palindrome = string => {
  const splitString = string.split("");
  const reverseString = splitString.reverse();
  const joinString = reverseString.join("");
  if (string === joinString) {
    return console.log(string + " is a palindrome");
  } else {
    return console.log("No palindrome");
  }
};

palindrome("cat");
palindrome("abba");

const uniqueString = word => {
  return new Set(word).size === word.length;
};

console.log(uniqueString("abba"));
console.log(uniqueString("abc"));
