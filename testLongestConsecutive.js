

function lonConsec(words,k){
    let wordLongMax = "";
    let longestMax = 0;
    for(i=0; i< words.length-1 ; i++){
        concatenatedattributes = words.slice(i, i+ k).join("");
        console.log(concatenatedattributes); // output: helloworld
        let longest = concatenatedattributes.length;
        console.log(longest)
      // variable to store the maximum length
     // update the word with the maximum length
        if (longest > wordLongMax.length) {
            wordLongMax = concatenatedattributes;
            longestMax = longest;
            
        }
        
    }
 // Return the longest string found
return wordLongMax;
}

let words = ['hello', 'world','time','hamburger'];
let k = 2;

lonConsec(words,2)