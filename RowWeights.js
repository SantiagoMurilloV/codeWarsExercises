function rowWeights(arr){ 
        let wTeam1 = 0;
        let wTeam2 = 0;
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) { // check if the index is even or odd
                wTeam1 += arr[i]; //The += operator is used to 
                                    // add the value on the right to the variable on the
                                    //  left and assign the result to the variable on the left.
            } else {
                wTeam2 += arr[i];
            }
        }
    newArr = [wTeam1, wTeam2];
    console.log(newArr);
}

rowWeights([13, 27, 49]) ;