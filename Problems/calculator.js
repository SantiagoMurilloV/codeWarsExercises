// El problema consiste en hacer una funcion que simule una calculadora,que  
// tenga dos parametros, el primero es el arreglo con el que se va  a operar y 
// el segundo el numero de la operacion que  se le  va aplicar al arreglo.

// 1----- suma
// 2------ resta
// 3------ multiplicacion 

// ejemplo:

// calculator([1,2,3],3)

// output: [2,3,2,6,3,6]
[  1, 2, 3, 2, 4, 6, 3, 6, 9, 1, 2, 3, 2, 4,  6, 3, 6, 9 ]


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