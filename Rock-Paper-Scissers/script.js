let Score={
  Wins: 0,
  Losses: 0,
  Ties: 0
};



function playerMove(PMove){
  let result= '';
  computerMove = computerPlay();
  if (PMove === 'Rock'){
    if (computerMove==="Rock"){
      result="Tie";
    }else if(computerMove==="Paper"){
      result ="You Lose";
    }else if(computerMove==="Scissors"){
      result="You Win";
    }
  }
  else if (PMove === 'Paper'){
    if (computerMove==="Rock"){
      result="You Win";
    }else if(computerMove==="Paper"){
      result ="Tie";
    }else if(computerMove==="Scissors"){
      result="You Lose";
    }
  }
  else if(PMove=="Scissors"){
    if (computerMove==="Rock"){
      result="You Lose";
    }else if(computerMove==="Paper"){
      result ="You Win";
    }else if(computerMove==="Scissors"){
      result="Tie";
    }

  } if(result==="You Win"){
    Score.Wins+=1;
  } else if(result==="You Lose"){
    Score.Losses+=1;
  } else if(result==="Tie"){
    Score.Ties+=1;
  }
  
  document.querySelector('.js-result').innerHTML=result;
  document.querySelector('.js-moves').innerHTML=`your move ${PMove} and Computer Move ${computerMove}`;
  document.querySelector('.js-score').innerHTML=`Wins:${Score.Wins}, Losses:${Score.Losses}, Ties:${Score.Ties}`;


}

function computerPlay(){
  let computerMove='';
  let RandomNum = Math.random();
  if (RandomNum > 0 && RandomNum < 1/3){
    computerMove = "Rock";
  } 
  else if(RandomNum > 1/3 && RandomNum < 2/3){
    computerMove = "Paper";
  } else{
    computerMove =  "Scissors";
  } return computerMove;
};

