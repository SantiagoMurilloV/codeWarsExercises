

function minimumNumber(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];  //all the elements of the array are added,
    }
    let num = 1;
    let isPrime = false;
    let actualSum = sum + num;
    while (!isPrime) {

    for (let i = 2; i < actualSum; i++) {
        if (actualSum % i === 0) {
            isPrime = true;
        }
    
    break;
    }

    }
    
    if (!isPrime) {
        num++;
    }
    console.log( num);
}


minimumNumber([3,1,2,5,30,4,1,1])