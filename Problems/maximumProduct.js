// Given an integer array nums,
// find three numbers whose product is 
// maximum and return the maximum product.


// Example 1:

// Input: arr = [1,2,3]
// Output: 6

function maximumProduct(arr){
    let max = 0;
    let resultArr = [];
    if(arr.length === 0){
        return [];
    } else {
        const mul = (a, b) => a * b;
        
        for (let j = 0; j < arr.length; j++) {
            for (let i = 0; i < arr.length ; i++) {
                const result = mul(arr[j], arr[i]);
                resultArr.push(result);
            }
        }
        console.log(resultArr)

        for(n = 0; n < resultArr.length ; n+=1 ){
            if ( resultArr[n] > max) {
                max = resultArr[n];
            }
        }
        return max;
    }
}
console.log(maximumProduct([1, 2, 4])); // Output: 16