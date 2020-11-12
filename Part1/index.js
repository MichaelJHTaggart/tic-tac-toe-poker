const gameProgress = [];
const board = document.querySelector('tbody')

function play(clickedId){
   const playerSpan = document.getElementById('player')
   const clickedElement = document.getElementById(clickedId)

   if(playerSpan.innerText === 'X'){
       playerSpan.innerText = 'O';
       clickedElement.innerText = 'X';
        gameProgress[clickedId] = 'X';

   } else {
       playerSpan.innerText = 'X';
       clickedElement.innerText = 'O';
        gameProgress[clickedId] = 'O';
   }
   console.log(board)
   
 const topLeft = gameProgress[0]
 const topCenter = gameProgress[1]
 const topRight = gameProgress[2]
 const midLeft = gameProgress[3]
 const midCenter = gameProgress[4]
 const midRight = gameProgress[5]
 const botLeft = gameProgress[6]
 const botCenter = gameProgress[7]
 const botRight = gameProgress[8]

 if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (midLeft !== undefined && midLeft === midCenter && midLeft === midRight) {
        alert(`${midLeft} is the winner`);
        return;
      }
      if (botLeft !== undefined && botLeft === botCenter && botLeft === botRight) {
        alert(`${botLeft} is the winner`);
        return;
      }
      if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (topCenter !== undefined && topCenter === midCenter && topCenter === botCenter) {
        alert(`${topCenter} is the winner`);
        return;
      }
      if (topRight !== undefined && topRight === midRight && topRight === botRight) {
        alert(`${topRight} is the winner`);
        return;
      }
      if (topLeft !== undefined && topLeft === midCenter && topLeft === botRight) {
        alert(`${topLeft} is the winner`);
        return;
      }
      if (botLeft !== undefined && botLeft === midCenter && botLeft === topRight) {
        alert(`${botLeft} is the winner`);
        return;
      }
 
      let boardFull = true;
      for (let i = 0; i <= 8; i++) {
        if (gameProgress[i] === undefined) {
          boardFull = false;
        }
      }
      if (boardFull === true) {
        alert("Cat's game");
      }
    }