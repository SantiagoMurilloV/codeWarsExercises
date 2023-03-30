
// The problem consists of calculating the sum of the squares of each
//  pair of consecutive elements in an array of numbers.


function square(arr){
    let total= 0;
    if(arr.lenght===0){
        return ""
    }else{
        
        const square_= (a,b) => (a**2) + (b**2);

        arr.forEach((_,i)=>{ if(i < arr.length-1){
            const result =  square_(arr[i],arr[i+1]);
            total= result;
        }})
        return total;
    }
}

console.log(square([1,2,4]))