
// problem: function that finds the largest number in an array

function majorityElement(nums) {
        
        
let max = nums[0];
        
for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
        max = nums[i];
    }
}
            
// return max;
        
console.log(max) ;


nums.forEach((_,i) => {if(i <= nums.length -1){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    
})

        
console.log(max) 

}


majorityElement([3,2,40]) 