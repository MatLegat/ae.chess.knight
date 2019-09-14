class Board {

  // Initilize board and properties:
  constructor() {
    this.validPieces = [
      { name: 'knight', max: 1 },
    ]
    this.height = 8
    this.width = 8
    this.placedPieces = []
  }

  // Parse position from Algebraic Notation (e.g. 'A5') to Array Position (e.g. [0, 4]) 
  parseToArrPosition(algPos) {
    const fullPattern = /^[A-Z][0-9]+$/s
    algPos = algPos.toUpperCase()

    if (!algPos.match(fullPattern)) {
      throw "Invalid Algebraic Notation"
    }
    
    const x = algPos.charCodeAt(0) - 'A'.charCodeAt(0)
    const y = parseInt(algPos.substring(1)) - 1

    if (!this.validatePosition([x, y])) {
      throw "Invalid Position"
    }
    return [x, y]
  }

  // Parse position from Array Position (e.g. [0, 4]) to Algebraic Notation (e.g. 'A5')
  parseToAlgNotation(arrPos) {
    const [x, y] = arrPos
    return String.fromCharCode('A'.charCodeAt(0) + x) + (y+1)
  }

  // Check if array position is valid on the board
  validatePosition(arrPos) {
    const [x, y] = arrPos
    return (x >= 0 && x < this.width) && (y >= 0 && y < this.height)
  }

}

export default Board