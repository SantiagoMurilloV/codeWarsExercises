// arr = [':D', ':|', ':)', ':(', ':D']
// sortEmotions(arr, true) // [ ':D', ':D', ':)', ':|', ':(' ]
// sortEmotions(arr, false) // [ ':(', ':|', ':)', ':D', ':D' ]

// :D -> Super Happy
// :) -> Happy
// :| -> Normal
// :( -> Sad
// T_T -> Super Sad

// parameter is called "order", if this parameter is true then the
//  order of the emotions will be descending (from Super Happy to Super Sad) 
//  if it's false then it will be ascending (from Super Sad to Super Happy)


function sortEmotions(arr, order) {
    if (arr.length === 0) {
        return [];
    }

    let emotions = [];

    const happyEmotions = [':D'];
    const superHappyEmotions=[':)']
    const normalEmotions = [':|'];
    const sadEmotions = [':('];
    const superSadEmotions = ['T_T'];

    // Asignar valores numéricos a cada emoción
    const emotionValues = {
        ':D': 4,
        ':)': 3,
        ':|': 2,
        ':(': 1,
        'T_T': 0
    };

    // Concatenar las emociones en orden según la dirección
    let orderedEmotions = [];
    if (order) {
        for (let i = superSadEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(superSadEmotions[i]);
        }
        for (let i = sadEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(sadEmotions[i]);
        }
        for (let i = normalEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(normalEmotions[i]);
        }
        for (let i = superHappyEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(superHappyEmotions[i]);
        }
        for (let i = happyEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(happyEmotions[i]);
        }
    } else {
        for (let i = happyEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(happyEmotions[i]);
        }
        for (let i = superHappyEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(superHappyEmotions[i]);
        }
        for (let i = normalEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(normalEmotions[i]);
        }
        for (let i = sadEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(sadEmotions[i]);
        }
        for (let i = superSadEmotions.length - 1; i >= 0; i--) {
            orderedEmotions.push(superSadEmotions[i]);
        }
    }

    // Ordenar el arreglo de emociones según su valor numérico
    for (let i = 0; i < orderedEmotions.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === orderedEmotions[i]) {
                emotions.push(arr[j]);
            }
        }
    }

    return emotions;
}

let arr = [':D', ':|', ':)', ':(', ':D'];
console.log(sortEmotions(arr, true)); // ['T_T', ':(', ':|', ':)', ':D']
console.log(sortEmotions(arr, false)); // [':D', ':D', ':)', ':|', ':(']
