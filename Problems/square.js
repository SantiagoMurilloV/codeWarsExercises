

function square(arr){
    let total= 0;
    if(arr.lenght===0){
        return ""
    }else{
        
        const square_= (a,b) => (a*a) + (b*b);

        arr.forEach((_,i)=>{ if(i < arr.length-1){
            const result =  square_(arr[i],arr[i+1]);
            total= result;
        }})
        return total;
    }
}

console.log(square([1,2,4]))