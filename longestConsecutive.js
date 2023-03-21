function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
    }
    
    let longestString = "";
    for (let i = 0; i < strarr.length - k + 1; i++) {
    let currentString = strarr.slice(i, i + k).join("");
        if (currentString.length > longestString.length) {
        longestString = currentString;
        }
    }
    
console.log(longestString);
}


let strarr = ['hello', 'word','time','hamburger'];
let k = 2;

longestConsec(strarr,k)

