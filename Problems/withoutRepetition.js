// Create a function that 
// takes two arrays of numbers, and returns a new 
// array with the numbers that appear in both arrays, without repetition.


function withoutRepetition(array1, array2){

    const numsRep = array1.filter(function(num){
        return array2.includes(num);
    })

    console.log(numsRep)

}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7];

withoutRepetition(array1, array2);