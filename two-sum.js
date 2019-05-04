const twoSum = (nums, target) => {
  for (x = 0; x < nums.length; x++) {
    const findNum = target - nums[x];
    if (nums.indexOf(findNum) in nums && nums.indexOf(findNum) != x) {
      return [x, nums.indexOf(findNum)];
    }
  }
};

const nums = [1, 2, 3, 4, 5];

const target = 4;

console.log(twoSum(nums, target));
