function nextBigger(n) {

    let newNum = [];
    let result;

    let digits = String(n).split("").map(Number);
    
    
    newNum = digits.sort((a, b) => b - a)
    
    let numero = newNum.join("");
    console.log(numero);
}


nextBigger(238)








// function nextBigger(n) {
//     let result = -1;
//     let digits = String(n).split("").map(Number);

//     let i;
//     for (i = digits.length-2 ; i >= 0 ; i--) {
//         if(digits[i] < digits[i+1]) {
//             let left = digits.slice(0, i + 1);
//             let right = digits.slice(i + 1).reverse();
//             let newDigits = left.concat(right);
//             let newNum = Number(newDigits.join(""));
//             if (newNum > n) {
//                 result = newNum;
//             }
//         }
//     }
//     return result;
// }

// console.log(nextBigger(3));
