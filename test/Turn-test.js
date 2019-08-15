const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

let card, turn1, turn2;


describe('Turn', function() {
  beforeEach( function() {
    card = new Card({id: 1, question: 'What is Tyler\'s favorite animal', answers: ['sea otter', 'elephant', 'pug', 'cat'], correctAnswer: 'elephant'})
    turn1 = new Turn('pug', card);
    turn2 = new Turn('elephant', card)
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  }); 

  it('should take an argument for a user/s guess', function () {
    expect(turn1.guess).to.equal('pug');
  });

  it('should take an argument for a card representing the current card in play', function () {
    expect(turn1.card).to.eql(card)
  });

  describe('returnGuess', function() {
    it('should return the guess', function() {
      expect(turn1.returnGuess()).to.equal('pug');
    })
  });

  describe('returnCard', function() {
    it('should return the card', function() {
      expect(turn1.returnCard()).to.eql(card);
    });
  });

  describe('evaluateGuess', function() {
    it('should return false if the guess is incorrect', function() {
      expect(turn1.evaluateGuess()).to.equal(false);
    });

    it('should return true if the guess is correct', function() {
      expect(turn2.evaluateGuess()).to.equal(true);
    });

  });

  describe('giveFeedBack', function() {
    it('should return "correct!" if the guess is right' , function() {
      expect(turn2.giveFeedBack()).to.eql('correct!');
    });
      
    it('should return "incorrect!" if the guess is wrong' , function() {
      expect(turn1.giveFeedBack()).to.eql('incorrect!');
    });
  });
});


