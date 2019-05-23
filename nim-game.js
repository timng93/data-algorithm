const winNim = n => {
  return n % 4 !== 0 ? true : false;
};

console.log(winNim(4));
console.log(winNim(5));
