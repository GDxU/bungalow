var assert = require('assert')
const Game = require('../game/game')
const House = require('../game/house')
const PlaneObject = require('../game/position')

describe('game', function () {
  const PLAYER_0_ID = 'qw12'
  const PLAYER_1_ID = 'xnr13'
  const PLAYER_2_ID = 'xLB94'
  var game

  beforeEach(() => {
    game = new Game(500, 500, 3)
    game.setHouses([
      makeTestHouse(),
      makeTestHouse(),
      makeTestHouse()
    ])
  })

  it('Register one player', () => {
    game.registerPlayer(PLAYER_0_ID)
    var houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert(houses[1].isVancant())
    assert(houses[2].isVancant())
  })

  it('Register multiple players', () => {
    game.registerPlayer(PLAYER_0_ID)
    var houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert(houses[1].isVancant())
    assert(houses[2].isVancant())
    game.registerPlayer(PLAYER_1_ID)
    houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert.equal(houses[1].ownerId, PLAYER_1_ID)
    assert(houses[2].isVancant())
    game.registerPlayer(PLAYER_2_ID)
    houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert.equal(houses[1].ownerId, PLAYER_1_ID)
    assert.equal(houses[2].ownerId, PLAYER_2_ID)
  })

  it('De-Register one player', () => {
    game.registerPlayer(PLAYER_0_ID)
    game.deregisterPlayer(PLAYER_0_ID)
    var houses = game.state.houses
    assert(houses[0].isVancant())
    assert(houses[1].isVancant())
    assert(houses[2].isVancant())
  })

  it('De-Register multiple players FIFO', () => {
    game.registerPlayer(PLAYER_0_ID)
    game.registerPlayer(PLAYER_1_ID)
    game.registerPlayer(PLAYER_2_ID)
    game.deregisterPlayer(PLAYER_0_ID)
    var houses = game.state.houses
    assert(houses[0].isVancant())
    assert.equal(houses[1].ownerId, PLAYER_1_ID)
    assert.equal(houses[2].ownerId, PLAYER_2_ID)
    game.deregisterPlayer(PLAYER_1_ID)
    houses = game.state.houses
    assert(houses[0].isVancant())
    assert(houses[1].isVancant())
    assert.equal(houses[2].ownerId, PLAYER_2_ID)
    game.deregisterPlayer(PLAYER_2_ID)
  })

  it('De-Register multiple players LIFO', () => {
    game.registerPlayer(PLAYER_0_ID)
    game.registerPlayer(PLAYER_1_ID)
    game.registerPlayer(PLAYER_2_ID)
    game.deregisterPlayer(PLAYER_2_ID)
    var houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert.equal(houses[1].ownerId, PLAYER_1_ID)
    assert(houses[2].isVancant())
    game.deregisterPlayer(PLAYER_1_ID)
    houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert(houses[1].isVancant())
    assert(houses[2].isVancant())
  })

<<<<<<< HEAD
function makeTestHouse() {
  return new House(new PlaneObject(0, 0, 0), 'red');
}
=======
  it('Re-Register multiple players', () => {
    game.registerPlayer(PLAYER_0_ID)
    game.registerPlayer(PLAYER_1_ID)
    game.registerPlayer(PLAYER_2_ID)
    game.deregisterPlayer(PLAYER_0_ID)
    game.deregisterPlayer(PLAYER_1_ID)
    game.deregisterPlayer(PLAYER_2_ID)

    game.registerPlayer(PLAYER_0_ID)
    game.registerPlayer(PLAYER_1_ID)
    game.registerPlayer(PLAYER_2_ID)
    var houses = game.state.houses
    assert.equal(houses[0].ownerId, PLAYER_0_ID)
    assert.equal(houses[1].ownerId, PLAYER_1_ID)
    assert.equal(houses[2].ownerId, PLAYER_2_ID)
  })
})

function makeTestHouse () {
  return new House(new Position(0, 0, 0), 'red')
}
>>>>>>> f2d0da254cbf8363e17a26f82d57fb489d156d65
