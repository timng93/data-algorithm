
var singleNumber = function(nums) {
  let numbers = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numbers[nums[i]]) {
      numbers[nums[i]] = true;
    } else {
      delete numbers[nums[i]];
    }
  }
  return Object.keys(numbers)[0];
};

console.log(singleNumber([1, 2, 2, 3, 3]));
