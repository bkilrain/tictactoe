const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');

let Game = function(players) {
  this.player1Name = players[0] || 'player1';
  this.player2Name = players[1] || 'player2';
  this.board = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];
};

Game.prototype.playTurn = function(activePlayer) {
  inquirer.prompt({
    name: 'play',
    message: `${activePlayer}, what is your move?`,
    validate: (input) => {
      return (/[1-9]/.test(input));
    }
  }).then((move) => {
      console.log(move, 'this was chosen');
    });
}

Game.prototype.checkWin = function(piece) {
  //check horizontal and vertical wins
  for (let i = 0; i < 3; i++) {
    if ((this.board[i][0] === piece && this.board[i][1] === piece && this.board[i][2] === piece) || (this.board[0][i] === piece && this.board[1][i] === piece && this.board[2][i] === piece)) {
      return true;
    }
  }
  //check diagonal wins
  if ((this.board[0][0] === piece && this.board[1][1] === piece && this.board[2][2] === piece) || (this.board[0][2] === piece && this.board[1][1] === piece && this.board[2][0]) === piece) {
    return true;
  }
  return false;
}

