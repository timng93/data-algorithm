const array = [-4, -1, 0, 3, 10];

const square = x => {
  return x * x;
};

const squaredArray = array.map(number => square(number)).sort((a, b) => a - b);

console.log(squaredArray);
