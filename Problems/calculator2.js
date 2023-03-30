
// Make a calculator where K is the number assigned to the operation and arr is the numeric 
// array you want to do the operation on.




function calculator(arr, k){
    const answere = [];
    if(arr.lenght === 0){
        return "";
    }else{ 
        const mul = (a,b)=> a * b;
        const sum = (a,b)=> a + b;
        const res = (a,b)=> a - b;
                switch(true){
                    case (k===1):
                        for(j = 0 ; j <  arr.lenght ; j ++){
                            const result = sum(arr[i],arr[j]);
                            answere.push(result);
                        }
                        break;
                    case (k===2):
                        for(n = 0 ;  n < arr.lenght ; n++){
                            result = res(arr[i],arr[n]);
                            answere.push(result );
                        }
                        break;
                    case (k===3):
                        for(m = 0; m < arr.lenght ; m++){
                            result = mul(arr[i],arr[m]);
                            answere.push(result);
                        }
                        break;
                    default:
                        return 'Void!';
            }

    }
console.log(answere)
}

calculator([1,2,3],1)