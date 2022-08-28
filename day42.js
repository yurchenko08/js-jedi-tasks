// Scramblies https://www.codewars.com/kata/55c04b4cc56a697bb0000048

// [JEDI LEVEL] Two Sum https://leetcode.com/problems/two-sum/
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
