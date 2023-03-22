// Given an integer array nums,
// find three numbers whose product is 
// maximum and return the maximum product.


// Example 1:

// Input: nums = [1,2,3]
// Output: 6

function maximumProduct(arr){
    let max = 0;
    let resultArr = [];
    if(arr.lenght === 0){
        return "";
    }else{

        const mux = (a,b)=> a*b;

        
        arr.forEach((_,i) => { if ( i < arr.length - 1 ){
            const result = mux(arr[0],arr[i+1]);
            const r2 = mux(arr[i],arr[i+1])
            resultArr.push(result);
            resultArr.push(r2)
                }
            }
        );
        //answere = resultArr.slice(1,)
        console.log(resultArr)   
        
        //answere =resultArr.map(x => x < x+1 ? x : 0);
        //console.log(answere) 
        
        for (let i = 0; i < resultArr.length-1; i++) {
            
            if(resultArr[i] < resultArr[i+1]){
                return ""
            } else if(resultArr[i] > resultArr[i+1]){
                max = resultArr[i];
                
                
        }
        
        console.log(max)  ;

    }
}
}
maximumProduct([1,2,3])