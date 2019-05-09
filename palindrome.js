//peek - look at the element
// length- determine array size
// palindrome- spell the same forward and backward
const palindrome = word => {
  const letters = [];

  let rword = "";

  for (i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if (rword === word) {
    console.log(word + " is a palindrome");
  } else {
    console.log("not a palindrome");
  }
};

palindrome("racecar");

palindrome("abba");

palindrome("lucy")