// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.



// Example 1:

// Input: nums = [2,2,3,2]
// Output: 3
// Example 2:

// Input: nums = [0,1,0,1,0,1,99]
// Output: 99


// Constraints:

// 1 <= nums.length <= 3 * 104
// -231 <= nums[i] <= 231 - 1
// Each element in nums appears exactly three times except for one element which appears once.



function singleNumber(nums) {
    let number = 0;
    number = nums.filter(num => nums.indexOf(num) === nums.lastIndexOf(num));
    return number;
}

  console.log(singleNumber([2, 2, 2, 2, 5, 5, 5, 5, 7])); // OUTPUT: 4


  // function uniqueNumber(arr){
  //   let number = 0;
    
  //   arr.forEach((_,i) => {if(i < arr.lenght){
  //       if(arr[i] === arr[i--] && arr[i]===arr[i++] ){

  //       }  number = arr[i]
          
        
  //   }
  //   });
  //   console.log(number)
  // }