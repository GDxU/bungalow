const Controllable = require('./controllables/controllable')
const MathHelper = require('./math-helper')
class Player {
  constructor (anId) {
    this.teamName = ''
    this.name = this.generateRandomName()
    this.id = anId
    this.controllable = Controllable.Null
  }

  is (aPlayer) {
    return this.id === aPlayer.id
  }

  assignControllable (aControllable) {
    aControllable.owner = this.id
    this.controllable = aControllable
  }

  quit () {
    this.controllable.abandon()
  }

  tick(aGameBoard) {
    this.controllable.tick(aGameBoard)
  }

  do (aGameBoard, command) {
    this.controllable.do(aGameBoard, command)
  }

  generateRandomName () {
    var adjective = MathHelper.selectRandom([
      'rickety',
      'spooky',
      'dilapidated',
      'charming',
      'classic',
      'cozy',
      'efficient',
      'exquisite',
      'incredible',
      'luxurious',
      'modern',
      'original',
      'rare',
      'sparkling',
      'stunning',
      'tasteful',
      'unique',
      'vibrant',
      'rundown'
    ])
    var noun = MathHelper.selectRandom([
      'Cabin',
      'House',
      'Castle',
      'Abode',
      'Condominium',
      'Igloo',
      'Tepee',
      'Apartment'
    ])
    return `${adjective}${noun}`
  }
}

module.exports = Player
