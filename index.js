const buttonElement = document.getElementById("roll-button");

const diceElement = document.getElementById("dice");

const rollHistoryElement = document.getElementById("roll-history");

let rollHistory = [];

function rollDice() {
    const rollResult= Math.floor(Math.random() * 6) + 1;
    const diceFace = getDiceFace(rollResult);
    diceElement.innerHTML = diceFace;
    rollHistory.push(rollResult);
    updateRollHistory();
}

function updateRollHistory() {
    rollHistoryElement.innerHTML = "";
    for (let i = 0; i < rollHistory.length; i++) {
        const rollResult = rollHistory[i];
        const diceFace = getDiceFace(rollResult);
        const rollElement = document.createElement("li");
        rollElement.innerHTML =`Roll ${i + 1}:<span>${getDiceFace(rollHistory[i])}</span>`; ;
        rollHistoryElement.appendChild(rollElement);
    }
}

function getDiceFace(rollResult) {
    switch (rollResult) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
    }
}


buttonElement.addEventListener("click", () => {
    diceElement.classList.add("roll-animation");
    setTimeout(() => {
        diceElement.classList.remove("roll-animation");
        rollDice();
    }, 1000);
});

