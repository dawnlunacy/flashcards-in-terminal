const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

let card1, card2, card3, deck, round

describe('Round', function() {
  beforeEach(function() {
    card1 = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'elephant');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should have a current card which is from the top of the deck at the start of the round', function() {
    expect(round.currentCard).to.equal(card1)
  });

  it('should have a list of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.eql([])
  });

  describe('returnCurrentCard', function() {
    it('should return the current card being played', function() {
      expect(round.returnCurrentCard()).to.equal(card1)
    });
  });
    
  describe('takeTurn', function() {
    it('should update the turns counter', function() {
      round.takeTurn('pug')
      expect(round.turn).to.equal(1)

      round.takeTurn('sea otter')
      expect(round.turn).to.equal(2)
    });

    it('should evaluate the guess ', function() {
      expect(round.takeTurn('pug')).to.equal('incorrect!')
    });

    it('should evaluate the guess ', function() {
      expect(round.takeTurn('elephant')).to.equal('correct!')
    });

    it('should record the id of the card if the guess is incorrect', function() {
      round.takeTurn('pug')
      expect(round.incorrectGuesses).to.equal([1])
    });

    it('should make the next card in the deck the current card', function() {
      round.takeTurn('pug')
      expect(round.currentCard).to.equal(card2)
    });
  });

  describe('calculatePercentCorrect', function() {
    it('should calulate the percentage of correct guesses', function() {
      round.takeTurn('pug')
      round.takeTurn('appendix')
      round.takeTurn('Fitzgerald')
      expect(round.calculatePercentCorrect()).to.equal(33)
    });
  });

  describe('endRound', function() {
    it('should tell the user that the round is over and the percentage of questions answered correctly', function() {
      expect(round.endRound()).to.equal(`** Round over! ** You answered ${round.calculatePercentCorrect()} of the quesitons correctly!`)
    });
  });
    
});



