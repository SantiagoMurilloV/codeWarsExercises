// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99

function singleNumber(nums) {
  let result;
  if (nums.length === 0) {
    return "";
  }else{
    result = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
    // the .filter() returns the array that does not match the filter
  }
  return result;
}

console.log(singleNumber([2, 2, 2, 2, 4, 5, 5, 5, 5])); // OUTPUT: [7]
