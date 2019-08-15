const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
    this.totalTime;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turn];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);
    this.turn++
    if (turn.giveFeedBack() === 'incorrect!') {
      this.incorrectGuesses.push(currentCard.id)
    } 
    return turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    let percentIncorrect =  this.incorrectGuesses.length / this.turn * 100;
    return Math.floor(100 - percentIncorrect);
    
  }

  endRound() {
    let endTime = Date.now();
    let timeElapsed = endTime - this.startTime;
    let minutes = Math.floor(timeElapsed/ 60000);
    let seconds = ((timeElapsed % 60000) / 1000).toFixed(0);
    this.totalTime = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the quesitons correctly! It took you ${this.totalTime} to complete this set.`
  }

  
}

module.exports = Round;