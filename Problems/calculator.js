// El problema consiste en hacer una funcion que simule una calculadora,que  
// tenga dos parametros, el primero es el arreglo con el que se va  a operar y 
// el segundo el numero de la operacion que l sele va aplicar al arreglo.

// 1----- suma
// 2------ resta
// 3------ multiplicacion 

// ejemplo:

// calculator([1,2,3],3)

// output: [2,3,2,6,3,6]

function calculator(arr, k){
    const answere = [];
    if(arr.lenght === 0){
        return "";
    }else{ 
        const mux = (a,b)=> a*b;
        const sum = (a,b)=> a+b;
        const res = (a,b)=> a-b;
        arr.forEach((_,i) => {if ( i < arr.length - 1 ){
            let result =  0;
            switch(true){
                case (k===1):
                    result = sum(arr[i],arr[i+1]);
                    answere.push(result );
                    break;
                case (k===2):
                    result = res(arr[i],arr[i+1]);
                    answere.push(result );
                    break;
                case (k===3):
                    result = mux(arr[i],arr[i+1]);
                    answere.push(result);
                    break;
                default:
                    return 'Void!';
        }}} )

    }
console.log(answere)
}

calculator([1,2,3],1)