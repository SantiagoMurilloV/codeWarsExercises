// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {

    if (array.lenght === 0){
        return 0;
    }else{
        const sum = (a,b)=> a+b;
        let num = 0;
        array.forEach((_,i) => { if ( i < array.length - 1 ){
            const result = sum(array[i],array[i + 1]);
            num = result;
        }}) 
        let average = num / array.length;

        console.log(`The average of the numbers is ${average}`);

    }
}

findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9])