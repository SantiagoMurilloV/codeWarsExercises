// The problem is to make a function that simulates a calculator, which
// have two parameters, the first is the array to be operated on and
// the second is the number of the operation that will be applied to the array.

// 1----- sum
// 2------ subtract
// 3------ multiplication

// example:

// calculator([1,2,3],3)

// output: 
// [ 1, 2, 3, 2, 4, 6, 3, 6, 9 ]


function calculator(arr, k){
    const answer = [];
    if(arr.lenght === 0){
        return "";
    }else{ 
        const mul = (a,b)=> a*b;
        const sum = (a,b)=> a+b;
        const res = (a,b)=> a-b;

        arr.forEach((_,i) => {if ( i < arr.length -1 ){
            let result =  0;
            switch(true){
                case (k===1):
                        for (let j = 0; j < arr.length ; j++) {
                            const result = sum(arr[i], arr[j]);
                            answer.push(result);
                        }
                    break;
                case (k===2):
                        for (let j = 0; j < arr.length ; j++) {
                            const result = res(arr[i], arr[j]);
                            answer.push(result);
                        }
                    break;
                case (k===3):
                    for (let j = 0; j < arr.length; j++) {
                        const result = mul(arr[i], arr[j]);
                            answer.push(result);
                        }
                    
                    break;
                default:
                    return 'Void!';
        }}} )

    }
console.log(answer)
}

calculator([1,2,3],3)