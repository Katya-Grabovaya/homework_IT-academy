function rollDice() {
    return 1 + Math.floor(Math.random() * 6);
  }
  
  function playGame() {
    let player1Scr = 0;
    let player2Scr = 0;
  
    for (let i = 0; i < 5; i++) {
      const player1Roll = rollDice();
      const player2Roll = rollDice();
  
      player1Scr += player1Roll;
      player2Scr += player2Roll;
  
      console.log(`Player 1: ${player1Roll}`);
      console.log(`Player 2: ${player2Roll}`);
    }
  
    console.log(`Player 1 score: ${player1Scr}`);
    console.log(`Player 2 score: ${player2Scr}`);
  
    if (player1Scr > player2Scr) {
      console.log("Player 1 wins!");
    } else if (player2Scr > player1Scr) {
      console.log("Player 2 wins!");
    } else {
      console.log("Played in a draw! Try again.");
    }
  }

 