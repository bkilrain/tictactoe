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
    message: `${activePlayer}, what is your move?`
    // validate: (input) => {
    //   return new Promise(/[1-9]/.test(input);
    // }
  }).then((move) => {
      console.log(move, 'this was chosen');
    });
}

let game = new Game(['bill','dave']);
game.playTurn('bill');