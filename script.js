let gameOver = false;
let newGame = true;
let humanLetter, computerLetter;
let humanScore=0, computerScore=0;

function checkGame(letter) {
    if(sqSelect[0].innerHTML === letter && sqSelect[1].innerHTML === letter && sqSelect[2].innerHTML === letter) {
        gameOver=true;
        newGame = true;
     } else if(sqSelect[3].innerHTML === letter && sqSelect[4].innerHTML === letter && sqSelect[5].innerHTML === letter) {
       gameOver=true;
        newGame = true;
     } else if(sqSelect[6].innerHTML === letter && sqSelect[7].innerHTML === letter && sqSelect[8].innerHTML === letter) {
       gameOver=true;
       newGame = true;
     } else if(sqSelect[0].innerHTML === letter && sqSelect[3].innerHTML === letter && sqSelect[6].innerHTML === letter) {
       gameOver=true;
       newGame = true;
     } else if(sqSelect[1].innerHTML === letter && sqSelect[4].innerHTML === letter && sqSelect[7].innerHTML === letter) {
       gameOver=true;
       newGame = true;
     } else if(sqSelect[2].innerHTML === letter && sqSelect[5].innerHTML === letter && sqSelect[8].innerHTML === letter) {
       gameOver=true;
       newGame = true;
     } else if(sqSelect[0].innerHTML === letter && sqSelect[4].innerHTML === letter && sqSelect[8].innerHTML === letter) {
       gameOver=true;
       newGame = true;
     } else if(sqSelect[2].innerHTML === letter && sqSelect[4].innerHTML === letter && sqSelect[6].innerHTML === letter){
       gameOver=true;
       newGame = true;
     } else {
       for(let i=0;i<9;i++) {
        if(sqSelect[i].innerHTML===""){
          break;
        } else if (i===8) {
          letter="T";
          gameOver=true;
          newGame = true;          
        } else {           
        }       
       }       
     }
  
  if(gameOver) {
    if(letter===computerLetter) {
      computerScore++;
      document.getElementById("computer-score").innerHTML = computerScore;
      document.getElementById("you-lost").style.display="";
      document.getElementById("game-start").style.display="";
    }else if(letter==="T") {
      document.getElementById("you-tie").style.display="";
    } else {
      humanScore++;
      document.getElementById("human-score").innerHTML = humanScore;
      document.getElementById("you-won").style.display="";
    }

    document.getElementById("game-start").style.display="";
    return false;
  } else {
    return true;
  }
}

function letterSelect(letter) {
  humanLetter=letter;
  document.getElementById("you-won").style.display="none";
  document.getElementById("you-lost").style.display="none";
  document.getElementById("you-tie").style.display="none";
  document.getElementById("game-start").style.display = "none";
  document.getElementById("scores").style.display = "block";
  document.getElementById("board").style.display = "flex";
  for(let i=0;i<9;i++) {
    sqSelect[i].innerHTML="";
  }
  gameOver = false;
  if(humanLetter!=="X") {
    humanLetter="O";
    computerLetter="X"
  } else {
    computerLetter="O"
  }
  computerMove();
}

const xSelect = document.getElementById("x-select");
const oSelect = document.getElementById("o-select");
const sqSelect = document.getElementsByClassName("square");

xSelect.addEventListener('click', function xFunc() {
  letterSelect("X");
}, false);

oSelect.addEventListener('click', function oFunc() {
  letterSelect("O");
}, false);

[].forEach.call(sqSelect, square => square.addEventListener('click', function () {
  if(!this.innerHTML && !gameOver) {
    this.innerHTML = humanLetter;
    if(checkGame(humanLetter)  && !gameOver) {
      computerMove();  
    }    
    if(!gameOver){
      checkGame(computerLetter);  
    }    
  }

}, false));

function computerMove() {
  let sqSet=true;
  
  while(sqSet===true) {
   let randomSquare=Math.floor(Math.random() *(sqSelect. length-1 + 1))-0;
    
    if(!sqSelect[randomSquare].innerHTML){
      sqSelect[randomSquare].innerHTML = computerLetter;
      sqSet=false; 
    }    
  }
}
