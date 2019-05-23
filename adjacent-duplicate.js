const removeDuplications = s => {
  const newString = [];

  for (let i = 0; i < s.length; i++) {
    if (!newString.length) newString.push(s[i]);
    else {
      s[i] == newString[newString.length - 1]
        ? newString.pop()
        : newString.push(s[i]);
    }
  }

  return newString.join("");
};

console.log(removeDuplications("apple"));
