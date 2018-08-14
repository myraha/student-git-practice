//
let botScore = 0
let playerScore = 0

//track botScore
function increaseBotScore(){
    botScore+=1;
    document.getElementById("computerScore").innerHTML = botScore;
}

//track playerScore
function increasePlayerScore(){
    playerScore+=1;
    document.getElementById("humanScore").innerHTML = playerScore;
}
