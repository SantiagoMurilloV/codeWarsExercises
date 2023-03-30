
// solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
// -- We sort by highest frequency to lowest frequency.
// -- If two elements have same frequency, we sort by increasing value.

function solve(arr) {
    
    const freq = {};
    arr.forEach(function (el) {
        if (el in freq) {
            freq[el]++;
        } else {
            freq[el] = 1;
        }
    });

    const sorted = arr.sort(function (a, b) {
        if (freq[a] !== freq[b]) {
            return freq[b] - freq[a];
        } else {
            return a - b;
        }
    });


    const result = [];
    sorted.forEach(function (el) {
        if (!result.includes(el)) {
            const count = freq[el];
            for (let i = 0; i < count; i++) {
                result.push(el);
            }
        }
    });

    console.log(result);
}


solve([2,3,5,3,7,9,5,3,7])