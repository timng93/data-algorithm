const array = [1, 2, 5, 1, 2, 8];

const output = [];

for (let i = 0; i < array.length; i++) {
  if (output.indexOf(array[i]) === -1) {
    output.push(array[i]);
  }
}

console.log(output);
