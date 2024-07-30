function getComputerChoice() {
    let x = Math.random()
    let computer_choice;
    if (x < 1/3) {
        computer_choice = "rock"
    }
    else if (x >= 2/3) {
        computer_choice = "paper"
    }
    else {
        computer_choice = "scissors"
    }

    return computer_choice

}

function getHumanChoice() {
    const input = document.querySelector("input");
    const humanChoice = input.value.toLowerCase();
    return humanChoice;
    
}

let human_score = 0;
let computer_score = 0;
const resultList = document.querySelector("ul")

function playround(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        const score = document.createElement("li")
        score.innerText = `It is a tie, ${human_score} for you and ${computer_score} 
        for the computer`;
        resultList.append(score);
    
    }

    else if ((humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'rock')
    || (humanChoice ==='rock' && computerChoice === 'scissors')) {
        human_score ++
        const score = document.createElement("li")
        score.innerText = `It is a win, ${human_score} for you and ${computer_score} 
        for the computer`;
        resultList.append(score);
    }

    else {
        computer_score ++
        const score = document.createElement("li")
        score.innerText = `It is a loss, ${human_score} for you and ${computer_score} 
        for the computer`;
        resultList.append(score);
    }


}

const button = document.querySelector("button");
button.addEventListener("click", function() {
    playround(getHumanChoice(), getComputerChoice())
});


