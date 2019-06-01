const array = [1, 2, 3, 4];

const checkValue = element => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
};

console.log(checkValue(7));

// run time complexity of n- depend on input
