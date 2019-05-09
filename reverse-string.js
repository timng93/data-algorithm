const stringReversion = string => {
  const splitString = string.split("");

  const reverseCharacters = splitString.reverse();

  const newString = reverseCharacters.join("");

  return newString;
};

console.log(stringReversion("hello"));
//olleh
console.log(stringReversion("abba"));
//abba
