
function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
    }
    
    let concatenatedString = "";
    for (let i = 0; i < strarr.length-1; i++) {
    let newString = strarr.slice(i, i + k).join(""); // with .slice() I return a shallow copy of a slice of the array
                                                         // with .join() concatenate the elements by means of a specific separator
        if (newString.length > concatenatedString.length) {
            concatenatedString = newString;
        }
    }
    
console.log(concatenatedString);
}


let strarr = ['hello', 'world','time','hamburger'];
let k = 2;

longestConsec(strarr,k)

