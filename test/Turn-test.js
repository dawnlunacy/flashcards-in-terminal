const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');

// let turn;
// let card;

describe('Turn', function() {
//   beforeEach(function() {
//     let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter')
//     let turn = new Turn('pug', card);
//   });

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  }); 

  it('should take an argument for a user/s guess', function () {
    const turn = new Turn('pug');
    expect(turn.guess).to.equal('pug');
  });

  it('should take an argument for a card representing the current card in play', function () {
    let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
    const turn = new Turn('pug', card);
    expect(turn.card).to.eql(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter')
  });

  describe('returnGuess', function() {
    it('should return the guess', function() {
      let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.returnGuess()).to.equal('pug');
    })
  });

  describe('returnCard', function() {
    it('should return the card', function() {
      let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.returnCard()).to.eql(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
    });
  });

  describe('evaluateGuess', function() {
    it('should return true if the guess is correct and false if the guess is wrong', function() {
      let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.returnCard()).to.equal(false);
    });
  });

  describe('giveFeedBack', function() {
    it('should return "incorrect!" if the guess is wrong and "correct!" if the guess is right' , function() {
      let card = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'sea otter');
      const turn = new Turn('pug', card);
      expect(turn.giveFeedBack()).to.eql('incorrect!');
    });
  });
});

