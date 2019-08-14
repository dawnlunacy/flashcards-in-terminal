const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
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
    let percentIncorrect =  this.incorrectGuesses.length / this.turn * 100
    return Math.floor(100 - percentIncorrect);
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the quesitons correctly!`
  }

  
}

module.exports = Round;