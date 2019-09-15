import Board from '../models/board'

class Game {
  constructor() {
    this.board = new Board()
  }

  // Parse position from Algebraic Notation (e.g. 'A5') to Array Position (e.g. [0, 4]) 
  static parseToArrPosition(algPos) {
    const fullPattern = /^[A-Z][0-9]+$/
    algPos = algPos.toUpperCase()

    if (!algPos.match(fullPattern)) {
      throw "Invalid Algebraic Notation"
    }
    
    const x = algPos.charCodeAt(0) - 'A'.charCodeAt(0)
    const y = parseInt(algPos.substring(1)) - 1

    if (!Board.validatePosition([x, y])) {
      throw "Invalid Position"
    }
    return [x, y]
  }

  // Parse position from Array Position (e.g. [0, 4]) to Algebraic Notation (e.g. 'A5')
  static parseToAlgNotation(arrPos) {
    const [x, y] = arrPos
    if (!Board.validatePosition([x, y])) {
      throw "Invalid Position"
    }
    return String.fromCharCode('A'.charCodeAt(0) + x) + (y+1)
  }
}

export default Game