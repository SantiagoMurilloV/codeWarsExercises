function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
    }
    
    let longestString = "";
    for (let i = 0; i < strarr.length - k + 1; i++) {
    let currentString = strarr.slice(i, i + k).join(""); // with .slice() I return a shallow copy of a slice of the array
                                                         // with .join() concatenate the elements by means of a specific separator
        if (currentString.length > longestString.length) {
        longestString = currentString;
        }
    }
    
console.log(longestString);
}


let strarr = ['hello', 'word','time','hamburger'];
let k = 2;

longestConsec(strarr,k)

