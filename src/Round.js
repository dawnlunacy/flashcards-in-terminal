class Round {
  constructor(deckOfCards) {
    this.deckOfCards = deckOfCards;
    console.log(this.deckOfCards)
    this.turn = 0;
    this.currentCard = this.deckOfCards.cards[this.turn];
  }
}

module.exports = Round;