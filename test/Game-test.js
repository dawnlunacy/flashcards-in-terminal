const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

let game, deck, sampleData;

describe('Game', function() {
  beforeEach( function() {
    sampleData = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }];
    game = new Game(sampleData);
  });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  // describe('start', function() {
  //   it('should create cards', () => {
  //     game.start()
  //     expect(game.cards).to.eql([
  //       {
  //         id: 1,
  //         question: 'What allows you to define a set of ' +
  //           'related information using key-value ' +
  //           'pairs?',
  //         answers: [ 'object', 'array', 'function' ],
  //         correctAnswer: 'object'
  //       },
  //       {
  //         id: 2,
  //         question: 'What is a comma-separated list of related values?',
  //         answers: [ 'array', 'object', 'function' ],
  //         correctAnswer: 'array'
  //       },
  //       {
  //         id: 3,
  //         question: 'What type of prototype method directly modifies the existing array?',
  //         answers: [ 'mutator method', 'accessor method', 'iteration method' ],
  //         correctAnswer: 'mutator method'
  //       }
  //     ])
  //   });
  // });

  
})