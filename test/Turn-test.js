const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');

describe('Turn', function() {

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
      const turn = new Turn('pug', card);
  });

  