const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

let card1, card2, card3, deck

describe("Deck", function () {
  beforeEach(function() {
    card1 = new Card(1, 'What is Tyler\'s favorite animal', ['sea otter', 'elephant', 'pug', 'cat'], 'elephant');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should be created with more than 1 card', function() {
    expect(deck.cards).to.eql([card1, card2, card3]);
  });

  it('should know how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});