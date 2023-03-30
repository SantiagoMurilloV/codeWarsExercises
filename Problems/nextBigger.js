// find the largest combination that can be formed with a 3-digit number

function nextBigger(n) {

    let orderNum = [];
    let result;

    let stringNums = String(n)
    let arrNums = stringNums.split("")
    let separatedNumsNumeric = arrNums.map(Number);
    
    
    orderNum = separatedNumsNumeric.sort((a, b) => b - a)
    
    let num = orderNum.join("");
    console.log(num);
}


nextBigger(238)









