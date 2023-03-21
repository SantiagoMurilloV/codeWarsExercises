

function lonConsec(words,k){
    let wordLongMax = "";
    let longestMax = 0;
    for(i=0; i< words.length-k+1 ; i++){
        concatenatedattributes = words.slice(i, i+ k).join("");
        console.log(concatenatedattributes); // salida: holamundo
        let longest = concatenatedattributes.length;
        console.log(longest)
        // variable para almacenar la longitud máxima
    // actualizar la palabra con la longitud máxima
        if (longest > wordLongMax.length) {
            wordLongMax = concatenatedattributes;
            longestMax = longest;
            
        }
        
    }
  // Devolver la cadena de texto más larga encontrada
return wordLongMax;
}

let words = ['hello', 'word','time','hamburger'];
let k = 2;

lonConsec(words,2)