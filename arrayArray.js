function calculateScore(x){
    let score;
    const resultArray = [];
    switch(true){
        case (typeof x[0]=== "number" && typeof x[1]=== "number"):
            score = x[0] + x[1];
            break;
        case (typeof x[0]=== "number" && typeof x[1] !== "number"):
            score = x[0];
            break;
        case (typeof x[1]=== "number" && typeof x[0] !== "number"):
            score = x[1];
            break;
        default:
            return 'Void!';
    }

    for (let i = 0; i < score; i++) {
        resultArray.push(x);
    }
console.log(resultArray);
}

let x = ['a', 3];

calculateScore(x)







