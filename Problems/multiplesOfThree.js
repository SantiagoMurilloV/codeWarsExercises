// Create a function that takes an array of numbers and returns a new array that
// contains only numbers that are multiples of 3.



function multiplesOfThree(nums) {
    return nums.filter(function (num) {
        return num % 3 === 0;
    });
}

console.log(multiplesOfThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [3, 6, 9]
