

// perform a function that fulfills the game rock, paper, or tiger, and returns the player won or if there is a tie


function game(arr) {
    let result = 0;
    let wins1 = 0;
    let wins2 = 0;
    
    let winPlayer = "";
    if(arr.length === 0){
        return "";
    };
    for(let i = 0; i < arr.length - 1; i += 1) { // recorre el array padre
        for(let j = 0; j < arr[i].length; j++) { // recorre los arreglos hijos
            if(arr[i][j] === "scissors" && arr[i][j+1] === "scissors") {
                wins1++;
                wins2++;
            } else if(arr[i][j] === "scissors" && arr[i][j+1] === "paper") {
                wins1++;
            } else if(arr[i][j] === "scissors" && arr[i][j+1] === "rock") {
                wins2++;
            }else if(arr[i][j] === "paper" && arr[i][j+1] === "paper"){
                wins1++;
                wins2++;
            }else if(arr[i][j] === "paper" && arr[i][j+1] === "rock"){
                wins1++;
            }else if(arr[i][j] === "paper" && arr[i][j+1] === "scissors"){
                wins2++;
            }else if(arr[i][j] === "rock" && arr[i][j+1] === "rock"){
                wins1++;
                wins2++;
            }else if(arr[i][j] === "rock" && arr[i][j+1] === "paper"){
                wins2++;
            }else if(arr[i][j] === "rock" && arr[i][j+1] === "scissors"){
                wins1++;
            }
        }
    }
    if(wins1 > wins2) {
        winPlayer = "Player 1";
    } else if(wins2 > wins1) {
        winPlayer = "Player 2";
    } else {
        winPlayer = "Tie";
    }
    return winPlayer;
}

console.log(game([["rock","rock"], ["paper","rock"], ["rock","scissors"]]));
