const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');


class Game {
  constructor(data) {
    this.data = data || prototypeQuestions;
    this.cards;
    this.deck;
    this.round;
    this.startTime;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    this.cards = this.data.map(dataObj => new Card(dataObj));
    this.deck = new Deck(this.cards);
    this.round = new Round(this.deck);
    this.printMessage(this.deck, this.round);
    this.printQuestion(this.round);
    
  }

}

module.exports = Game;