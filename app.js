let userScore =0;
let compScore=0; 
let choices=document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
let userScorePara=document.querySelector("#yourscore");
let compScorePara=document.querySelector("#compscore");
const drawGame=()=>{
    console.log("The game is draw");
    userScore++;
    compScore++;
    msg.innerText="THE GAME IS DRAW \n PLAY AGAIN";
    msg.style.backgroundColor="#f1faee";
    msg.style.color="#1d3658";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("user wins!");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`YOU WIN\n YOUR ${userChoice.toUpperCase()} BEATS ${compChoice.toUpperCase()} `;
        msg.style.backgroundColor="#568259";
        msg.style.color="#f1faee"
    }
    else{
        console.log("user loses!");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`YOU LOSE \n${compChoice.toUpperCase()} BEATS YOUR ${userChoice.toUpperCase()}`;
        msg.style.backgroundColor="#960000";
        msg.style.color="#f1faee";
    }
}
const compGen=()=>{
    const options=["rock","paper","scissors"];
    const randomIndx=Math.floor(Math.random()*3);//floor neglects the decimal values , random gives values from 0 to 1 and we have indices from 0 to 2 so multiplied by 3
    return options[randomIndx];
}
const playGame=(userChoice)=>{
    console.log("choice of user",userChoice);
    const compChoice=compGen();
    console.log("choice of computer",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});