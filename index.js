let computerMove = "";
let quantity = 0;
let quantity2 = 0;
let quantity3 = 0;
let rockImg = document.querySelector("#rock");
let scissorsImg = document.querySelector("#scissors");
let paperImg = document.querySelector("#paper");
let compRock = document.querySelector("#rockk");
let compPaper = document.querySelector("#paperr");
let compScissors = document.querySelector("#scissorss");
// ROCK
rock.onclick = () => {
    // compRock.display = "block";
    // compRock.classList.add = ("gamingImg2");
    rockImg.classList.add("gamingImg");
    scissorsImg.classList.remove("gamingImg");
    paperImg.classList.remove("gamingImg");
    // paperImg.classList.add("gamingImg");
    // scissorsImg.classList.add("gamingImg");

    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        // computerMove = "rock";
        computerMove = rockImg;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        // computerMove = "paper";
        computerMove = paperImg;
        // console.log(computerMove);
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        // computerMove = "scissors";
        computerMove = scissorsImg;
        // console.log(computerMove);
    }
    // console.log(computerMove);
    let result = "";
    // result.classList.add("gamingImg2");
    if (computerMove === rockImg) {
        compRock.style.display = "block";
        compRock.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compPaper.style.display = "none";
        compScissors.style.display = "none";
        // rockImg.classList.add("gamingImg2");
        // paperImg.classList.remove("gamingImg2");
        // scissorsImg.classList.remove("gamingImg2");
        result = "Draw";
    } else if (computerMove === paperImg) {
        compPaper.style.display = "block";
        compPaper.classList.add("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compRock.style.display = "none";
        compScissors.style.display = "none";
        // paperImg.classList.add("gamingImg2");
        // rockImg.classList.remove("gamingImg2");
        // scissorsImg.classList.remove("gamingImg2");
        result = "You lose";
    } else if (computerMove === scissorsImg) {
        compScissors.style.display = "block";
        compScissors.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compPaper.style.display = 'none';
        compRock.style.display = 'none';
        // scissorsImg.classList.add("gamingImg2");
        // paperImg.classList.remove("gamingImg2");
        // rockImg.classList.remove("gamingImg2");
        result = "You win";
    }
    // demo.innerHTML = `You picked Rock, Computer picked: ${computerMove}`;
    demo.innerHTML = result;
    if (result == "You win") {
        quantity += 1;
        birinchi.innerHTML = `You: ${quantity} | `;
    } else if (result == "You lose") {
        quantity2 += 1;
        ikkinchi.innerHTML = `Comp: ${quantity2} | `;
    } else if (result == "Draw") {
        quantity3 += 1;
        uchinchi.innerHTML = `Draw: ${quantity3} | `;
    }
};

// PAPER 
paper.onclick = () => {
    paperImg.classList.add("gamingImg");
    rockImg.classList.remove("gamingImg");
    scissorsImg.classList.remove("gamingImg");
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = rockImg;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = paperImg;
        // console.log(computerMove);
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = scissorsImg;
        // console.log(computerMove);
    }
    // console.log(computerMove);
    let result = "";
    if (computerMove === rockImg) {
        compRock.style.display = "block";
        compRock.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compPaper.style.display = "none";
        compScissors.style.display = "none";
        result = "You win";
    } else if (computerMove === paperImg) {
        compPaper.style.display = "block";
        compPaper.classList.add("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compRock.style.display = "none";
        compScissors.style.display = "none";
        result = "Draw"
    } else if (computerMove === scissorsImg) {
        compScissors.style.display = "block";
        compScissors.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compPaper.style.display = 'none';
        compRock.style.display = 'none';
        result = "You lose";
    }
    // demo.innerHTML = `You picked Rock, Computer picked: ${computerMove}`;
    demo.innerHTML = result;
    if (result == "You win") {
        quantity += 1;
        birinchi.innerHTML = `You: ${quantity} | `;
    } else if (result == "You lose") {
        quantity2 += 1;
        ikkinchi.innerHTML = `Comp: ${quantity2} | `;
    } else if (result == "Draw") {
        quantity3 += 1;
        uchinchi.innerHTML = `Draw: ${quantity3} | `;
    }
}

// SCISSORS 

scissors.onclick = () => {
    scissorsImg.classList.add("gamingImg");
    rockImg.classList.remove("gamingImg");
    paperImg.classList.remove("gamingImg");
    let randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = rockImg;
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = paperImg;
        // console.log(computerMove);
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = scissorsImg;
        // console.log(computerMove);
    }
    // console.log(computerMove);
    let result = "";
    if (computerMove === rockImg) {
        compRock.style.display = "block";
        compRock.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compPaper.style.display = "none";
        compScissors.style.display = "none";
        result = "You lose";
    } else if (computerMove === paperImg) {
        compPaper.style.display = "block";
        compPaper.classList.add("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compScissors.classList.remove("gamingImg2");
        compRock.style.display = "none";
        compScissors.style.display = "none";
        result = "You win"
    } else if (computerMove === scissorsImg) {
        compScissors.style.display = "block";
        compScissors.classList.add("gamingImg2");
        compPaper.classList.remove("gamingImg2");
        compRock.classList.remove("gamingImg2");
        compPaper.style.display = 'none';
        compRock.style.display = 'none';
        result = "Draw";
    }
    // demo.innerHTML = `You picked Rock, Computer picked: ${computerMove}`;
    demo.innerHTML = result;
    if (result == "You win") {
        quantity += 1;
        birinchi.innerHTML = `You: ${quantity} | `;
    } else if (result == "You lose") {
        quantity2 += 1;
        ikkinchi.innerHTML = `Comp: ${quantity2} | `;
    } else if (result == "Draw") {
        quantity3 += 1;
        uchinchi.innerHTML = `Draw: ${quantity3} | `;
    }

}

reset.onclick = () => {
    quantity = 0;
    quantity2 = 0;
    quantity3 = 0;
    birinchi.innerHTML = ` You: ${quantity} | `;
    ikkinchi.innerHTML = ` Comp: ${quantity2} | `;
    uchinchi.innerHTML = ` Draw: ${quantity3} | `;
}
