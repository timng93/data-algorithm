const makeLine = length => {
  line = "";
  for (let i = 1; i <= length; i++) {
    for (let j = 1; j <= i; j++) {
      line += "*";
    }
    line += "\n";
  }
  return line;
};

console.log(makeLine(2));
