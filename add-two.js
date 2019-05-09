var reverse = function(x) {
  let xrev = x
    .toString()
    .split("")
    .reverse()
    .join(""); //reverse String
  if (xrev[xrev.length - 1] === "-") {
    //check if it's a negative number so reverse minus sign.
    xrev = parseInt("-" + xrev.slice(0, xrev.length - 1));
  }
  //check for signed Integer range.
  if (xrev > Math.pow(2, 31) - 1) {
    return 0;
  } else if (xrev < Math.pow(-2, 31)) {
    return 0;
  } else {
    return xrev;
  }
};

console.log(reverse(321))