

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
                result = sum(arr[0],arr[i+1]);
                answere.push(result );
                break;
            case (k===2):
                result = res(arr[0],arr[i+1]);
                answere.push(result );
                break;
            case (k===3):
                result = mux(arr[0],arr[i+1]);
                answere.push(result);
                break;
            default:
                return 'Void!';
    }}} )

}
console.log(answere)
}

calculator([1,2,3],3)