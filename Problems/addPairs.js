// Create a function that takes an array of numbers and returns the sum of the even numbers in the array.

function addPairs(nums) {
    let sum = 0;
    nums.forEach(function (num) {
        if (num % 2 === 0) {
            sum += num;
        }
    });
    return sum;
}

console.log(addPairs([1, 2, 3, 4, 5, 6, 7, 8])); // Output: 20



