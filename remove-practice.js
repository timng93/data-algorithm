const array = [1, 2, 3, 4, 5, 1, 2, 3];

const newArray = [];

for (let i = 0; i < array.length; i++) {
  if (newArray.indexOf(array[i]) === -1) {
    newArray.push(array[i]);
  }
}

console.log(newArray);
